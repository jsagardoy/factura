import * as React from 'react';
import { FacturaFormDialog } from 'pods/factura';
import { Empresa } from '@core';

interface FacturaProps {
    emisor: Empresa;
    receptor: Empresa;
    disabled: boolean;
    handleInputChange:<T> (fieldName: String, value: T ) => void;
    handleInputSave: ()=> void;
    disabledOK:boolean
}

export const FacturaScene: React.FC<FacturaProps> = props => {
    const { handleInputChange, disabled, handleInputSave, disabledOK} = props;
    return (
        <div>
            <h1>Factura</h1>
            <div>
                <FacturaFormDialog disabledOK= {disabledOK} disabled={disabled} handleInputChange={handleInputChange} handleInputSave={handleInputSave} />            </div>
        </div>
    //incluir la tabla
    );
};
