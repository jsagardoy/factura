import * as React from 'react';
import { AppLayout } from '@layout';
import { EmpresaTablaScene, ReceptoresScene, FacturaScene } from '@scenes';
import { emisoresData, receptoresData, Empresa } from '@core';

interface MainContainerProps {}

export const MainContainer: React.FC<MainContainerProps> = props => {
    const [emisor, setEmisor] = React.useState();
    const [receptor, setReceptor] = React.useState();
    const SelectedValue = (value:Empresa, actionType:string) =>{
        switch (actionType){
            case "Emisor":
                setEmisor(value);
            break;
            case "Receptor":
                setReceptor(value);    
            break;
        }
      
    }
    React.useEffect(()=>{
        console.log('emisor'+ JSON.stringify(emisor));
        console.log('receptor'+ receptor);
    })
    return (
        <AppLayout>
            <EmpresaTablaScene title="Emisor" data={emisoresData} selectedValue={SelectedValue}/>
            <EmpresaTablaScene title="Receptor" data={receptoresData} selectedValue={SelectedValue}/>
            <FacturaScene/>
        </AppLayout>
    );
};
