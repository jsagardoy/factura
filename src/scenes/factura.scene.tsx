import * as React from 'react';
import { FacturaFormDialog } from 'pods/factura';
import { Empresa } from '@core';

interface FacturaProps {
    emisor: Empresa;
    receptor: Empresa;
    disabled: boolean;
    handleInputChange: (fieldName: String, value: string | number | Date) => void;
    handleInputSave: ()=> void;
}

export const FacturaScene: React.FC<FacturaProps> = props => {
    const { handleInputChange, disabled, handleInputSave } = props;
    return (
        <div>
            <h1>Factura</h1>
            <div>
                <FacturaFormDialog disabled={disabled} handleInputChange={handleInputChange} handleInputSave={handleInputSave} />
            </div>
        </div>
    //incluir la tabla
    );
};
