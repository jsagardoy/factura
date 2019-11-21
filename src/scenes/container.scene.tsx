import * as React from 'react';
import { AppLayout } from '@layout';
import { EmpresaTablaScene, FacturaScene } from '@scenes';
import { emisoresData, receptoresData, Empresa, Factura } from '@core';

interface MainContainerProps {}

export const MainContainer: React.FC<MainContainerProps> = props => {
    const [emisor, setEmisor] = React.useState<Empresa>();
    const [receptor, setReceptor] = React.useState<Empresa>();
    const [factura, setFactura] = React.useState<Factura>();
    const [disabled, setDisabled] = React.useState<boolean>(true);
    const [facturasList, setFacturasList] =  React.useState<Factura[]>([]);
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

    const handleInputChange = (id: string, value: string | number | Date) => {
        setFactura({ ...factura, [id]: value });
    };
    const isDisabled = (): void => {
        if (emisor && receptor) setDisabled(!emisor.selected && !receptor.selected);
        else setDisabled(true);
    };
    const generateIdFactura = (year: number): number => {
        if (factura.id) {
            const facturasAnualesOredenadas = facturasList
                .filter(factura => factura.año === year)
                .sort((a, b) => (a.id > b.id ? 1 : -1));
            const lastFactura = facturasAnualesOredenadas[facturasAnualesOredenadas.length - 1];
            return lastFactura.id + 1;
        } else return 1;
    };
    const handleInputSave = () => {
        setFactura(fillFactura());
        console.log(factura);
        const newFacturasList:Factura[] = [...facturasList,factura];
        setFacturasList(newFacturasList);
        console.log(`lista ${JSON.stringify(newFacturasList)}`);
    };
    const fillFactura = (): Factura => {
        const newFactura:Factura = { ...factura, 
            emisor: emisor, 
            receptor: receptor, 
            id: generateIdFactura(factura.id),
        };
        return newFactura;
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
            />
        </AppLayout>
    );
};
