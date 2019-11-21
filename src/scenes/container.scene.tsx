import * as React from 'react';
import { AppLayout } from '@layout';
import { EmpresaTablaScene, ReceptoresScene, FacturaScene } from '@scenes';
import { emisoresData, receptoresData, Empresa, Factura } from '@core';

interface MainContainerProps {}

export const MainContainer: React.FC<MainContainerProps> = props => {
    const [emisor, setEmisor] = React.useState<Empresa>();
    const [receptor, setReceptor] = React.useState<Empresa>();
    const [factura, setFactura] = React.useState<Factura>();
    const [disabled, setDisabled] = React.useState<boolean>(true);

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
        console.log('emisor' + JSON.stringify(emisor));
        console.log('receptor' + JSON.stringify(receptor));
        isDisabled();
        console.log(disabled);
    });

    const handleInputChange = (id: string, value: string | number | Date) => {
        setFactura({ ...factura, [id]: value });
    };
    const isDisabled = (): void => {
        if (emisor && receptor) setDisabled(!emisor.selected && !receptor.selected);
        else setDisabled(true);
    };
    const generateIDFactura = (year: number) =>{
        
    }

    const fillFactura = () =>{
        const newFactura =  {...factura, emisor:emisor, receptor:receptor};
    }
    return (
        <AppLayout>
            <EmpresaTablaScene title="Emisor" data={emisoresData} selectedRow={selectedRow} />
            <EmpresaTablaScene title="Receptor" data={receptoresData} selectedRow={selectedRow} />
            <FacturaScene
                disabled={disabled}
                emisor={emisor}
                receptor={receptor}
                handleInputChange={handleInputChange}
            />
        </AppLayout>
    );
};
