import * as React from 'react';
import { AppLayout } from '@layout';
import { EmpresaTablaScene, ReceptoresScene, FacturaScene } from '@scenes';
import { emisoresData, receptoresData, Empresa } from '@core';

interface MainContainerProps {}

export const MainContainer: React.FC<MainContainerProps> = props => {
    const [emisor, setEmisor] = React.useState<Empresa>();
    const [receptor, setReceptor] = React.useState<Empresa>();
    
    const selectedRow = (dataRow:Empresa, actionType:string) =>{
        switch (actionType){
            case "Emisor":
                setEmisor(dataRow);
            break;
            case "Receptor":
                setReceptor(dataRow);    
            break;
        }
      
    }
    //TO BE CHANGED, JUST FOR TESTING PURPOSE
    React.useEffect(()=>{
        console.log('emisor'+ JSON.stringify(emisor));
        console.log('receptor'+ JSON.stringify(receptor));
    })
    
    return (
        <AppLayout>
            <EmpresaTablaScene title="Emisor" data={emisoresData} selectedRow={selectedRow}/>
            <EmpresaTablaScene title="Receptor" data={receptoresData} selectedRow={selectedRow}/>
            <FacturaScene/>
        </AppLayout>
    );
};
