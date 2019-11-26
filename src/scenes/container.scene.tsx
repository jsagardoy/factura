import * as React from 'react';
import { AppLayout } from '@layout';
import { EmpresaTablaScene, FacturaScene } from '@scenes';
import { emisoresData, receptoresData, Empresa, Factura } from '@core';
import { formValidation } from 'common-app/validations';

interface MainContainerProps {}

export const MainContainer: React.FC<MainContainerProps> = props => {
    const [emisor, setEmisor] = React.useState<Empresa>();
    const [receptor, setReceptor] = React.useState<Empresa>();
    const [factura, setFactura] = React.useState<Factura>();
    const [disabled, setDisabled] = React.useState<boolean>(true);
    const [disabledOK, setDisabledOK] = React.useState<boolean>(false);
    const [facturasList, setFacturasList] = React.useState<Factura[]>([]);
    const selectedRow = (dataRow: Empresa, actionType: string) => {
        switch (actionType) {
            case 'Emisor':
                setEmisor(dataRow);
                break;
            case 'Receptor':
                setReceptor(dataRow);
                break;
        }
    };
    //TO BE CHANGED, JUST FOR TESTING PURPOSE
    React.useEffect(() => {
        isDisabled();
    });
    React.useEffect(() => {
        isDisabledOK();
    }, [factura]);

    const handleInputChange = <T extends any>(id: string, value: T) => {
        setFactura({ ...factura, [id]: value });
    };
    const isDisabled = (): void => {
        if (emisor && receptor) setDisabled(!emisor.selected && !receptor.selected);
        else setDisabled(true);
    };
    const isDisabledOK = (): void => {
        if (factura) {
            formValidation.validateForm(factura).then(validationResult => {
                setDisabledOK(!validationResult.succeeded);
            });
        } else {
            setDisabledOK(true);
        }
    };
    const cleanForm = (): void => {
        setFactura(null);
    };
    const generateIdFactura = (year: number): number => {
        if (factura.id) {
            const facturasAnualesOredenadas: Factura[] = facturasList
                .filter(factura => factura.año === year)
                .sort((a, b) => (a.id > b.id ? 1 : -1));
            const lastFactura = facturasAnualesOredenadas[facturasAnualesOredenadas.length - 1];
            return lastFactura.id + 1;
        } else return 1;
    };
    const handleInputSave = () => {
        const newFactura: Factura = fillFactura();
        setFactura(newFactura);
        const newFacturasList: Factura[] = [...facturasList, newFactura];
        setFacturasList(newFacturasList);
    };
    const fillFactura = (): Factura => {
        if (factura) {
            const newFactura: Factura = {
                ...factura,
                emisor: emisor,
                receptor: receptor,
                id: generateIdFactura(factura.id),
            };
            return newFactura;
        }
    };

    return (
        <AppLayout>
            <EmpresaTablaScene title="Emisor" data={emisoresData} selectedRow={selectedRow} />
            <EmpresaTablaScene title="Receptor" data={receptoresData} selectedRow={selectedRow} />
            <FacturaScene
                disabled={disabled}
                emisor={emisor}
                receptor={receptor}
                handleInputChange={handleInputChange}
                handleInputSave={handleInputSave}
                disabledOK={disabledOK}
                cleanForm={cleanForm}
                facturaList={facturasList}
            />
        </AppLayout>
    );
};
