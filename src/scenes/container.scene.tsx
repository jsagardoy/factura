/* eslint-disable @typescript-eslint/no-empty-interface */
/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/explicit-function-return-type */
import * as React from 'react';
import { AppLayout } from '@layout';
import { EmpresaTablaScene, FacturaScene } from '@scenes';
import { emisoresData, receptoresData, Empresa, Factura, Detalle } from '@core';
import { formValidation } from 'common-app/validations';

interface MainContainerProps {}

export const MainContainer: React.FC<MainContainerProps> = props => {
    const [emisor, setEmisor] = React.useState<Empresa>();
    const [receptor, setReceptor] = React.useState<Empresa>();
    const [factura, setFactura] = React.useState<Factura>();
    const [disabled, setDisabled] = React.useState<boolean>(true);
    const [facturasAño, setFacturasAño] = React.useState<number[]>([]);
    const [disabledOK, setDisabledOK] = React.useState<boolean>(false);
    const [facturasList, setFacturasList] = React.useState<Factura[]>([]);
    const [disabledFactura, setDisabledFactura] = React.useState(true);
    //TO BE CHANGED, JUST FOR TESTING PURPOSE
    const handleFacturaList = (factura: Factura): void => {
        const newFacturasList: Factura[] = [...facturasList];
        const index = facturasList.findIndex(elem => elem.año === factura.año && elem.id === factura.id);
        if (index !== -1) {
            newFacturasList.splice(index, 1, factura);
            setFacturasList(newFacturasList);
        }
    };
    const selectedRow = (dataRow: Empresa | Factura, actionType: string): void => {
        switch (actionType) {
            case 'Emisor':
                setEmisor(dataRow as Empresa);
                break;
            case 'Receptor':
                setReceptor(dataRow as Empresa);
                break;
            case 'Factura':
                setFactura(dataRow as Factura);
                handleFacturaList(dataRow as Factura);
                break;
        }
    };
    const calculateYears = () =>
        facturasList.map((factura: Factura) => {
            if (!facturasAño.includes(factura.año)) {
                setFacturasAño([...facturasAño, factura.año]);
            }
        });
    const handleInputChange = <T extends any>(id: any, value: T): void => {
        setFactura({ ...factura, [id]: value });
    };
    const submitDetalle = detalle => {
        let newDetalle = [];
        if (factura.detalle) {
            newDetalle = [...factura.detalle];
        }
        newDetalle.push(detalle);
        setFactura({
            ...factura,
            detalle: newDetalle,
        });
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
    const calculateIVA = (cuantia: number): number => {
        if (factura && cuantia && factura.porcentaje_iva) {
            return (cuantia * factura.porcentaje_iva) / 100;
        }
    };
    const calculateIRPF = (cuantia: number): number => {
        if (factura && cuantia && factura.porcentaje_irpf) {
            return (cuantia * factura.porcentaje_irpf) / 100;
        }
    };
    const calculateTotal = (cuantia: number): number => {
        if (factura && cuantia && calculateIVA(cuantia) && calculateIRPF(cuantia)) {
            return cuantia + calculateIVA(cuantia) - calculateIRPF(cuantia);
        }
    };
    const reducer = (acum, value) => acum + value;

    const calculateDetalle = (factura: Factura): Factura => {
        if (factura && factura.detalle.length > 0) {
            const newDetalle: Detalle[] = factura.detalle.map((detalle: Detalle) => {
                return {
                    ...detalle,
                    iva: (detalle.precio * detalle.cantidad * factura.porcentaje_iva) / 100,
                    total: detalle.precio * detalle.cantidad * (1 + factura.porcentaje_iva / 100),
                };
            });
            const detalleTotalList: number[] = newDetalle.map(detalle => detalle.total);
            const detalleIVAList: number[] = newDetalle.map(detalle => detalle.iva);
            const cuantia: number = detalleTotalList.reduce(reducer) - detalleIVAList.reduce(reducer);
            return { ...factura, detalle: newDetalle, cuantia };
        }
    };

    const fillFactura = (): Factura => {
        if (factura) {
            const facturaWithDetails = calculateDetalle(factura);
            let newFactura: Factura = {
                ...factura,
                emisor: emisor,
                receptor: receptor,
                id: generateIdFactura(factura.id),
                cuantia: facturaWithDetails.cuantia,
                iva: calculateIVA(facturaWithDetails.cuantia),
                irpf: calculateIRPF(facturaWithDetails.cuantia),
                total: calculateTotal(facturaWithDetails.cuantia),
            };
            if (!newFactura.selected) {
                newFactura = { ...newFactura, selected: false };
            }
            return newFactura;
        }
    };
    const handleInputSave = () => {
        const newFactura: Factura = fillFactura();
        setFactura(newFactura);
        const newFacturasList: Factura[] = [...facturasList, newFactura];
        setFacturasList(newFacturasList);
    };
    const isFacturaChecked = (): boolean => {
        const factura: Factura = facturasList.find((factura: Factura) => factura.selected === true);
        return factura ? true : false;
    };

    const handleDisabledFactura = (): void => {
        const resp: boolean = isFacturaChecked();
        setDisabledFactura(resp);
    };
    React.useEffect(() => {
        isDisabled();
    });
    React.useEffect(() => {
        isDisabledOK();
        handleDisabledFactura();
    }, [factura]);

    React.useEffect(() => {
        calculateYears();
    }, [facturasList]);
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
                facturasAño={facturasAño}
                submitDetalle={submitDetalle}
                selectedRow={selectedRow}
                disabledFactura={disabledFactura}
            />
        </AppLayout>
    );
};
