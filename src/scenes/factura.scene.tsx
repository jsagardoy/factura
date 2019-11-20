import * as React from 'react';
import { FacturaFormDialog } from 'pods/factura';

 interface FacturaProps {
  /*  emisor: Empresa;
    receptor: Empresa;*/
} 

export const FacturaScene: React.FC<FacturaProps> = props => {
    //const { emisor, receptor } = props;
   
    return (
        <div>
            <h1>Factura</h1>
            <FacturaFormDialog />        
        </div>
         //el botón para añadir //incluir la tabla
    );
};


