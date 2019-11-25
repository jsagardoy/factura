import * as React from 'react';
import { FacturaFormDialog } from 'pods/factura';
import { Empresa } from '@core';

interface FacturaProps {
    emisor: Empresa;
    receptor: Empresa;
    disabled: boolean;
    disabledOK: boolean;
    handleInputChange: <T>(fieldName: String, value: T) => void;
    handleInputSave: () => void;
    cleanForm: () => void;
}

export const FacturaScene: React.FC<FacturaProps> = props => {
    const { handleInputChange, disabled, handleInputSave, disabledOK, cleanForm } = props;
    return (
        <div>
            <h1>Factura</h1>
            <div>
                <FacturaFormDialog
                    cleanForm={cleanForm}
                    disabledOK={disabledOK}
                    disabled={disabled}
                    handleInputChange={handleInputChange}
                    handleInputSave={handleInputSave}
                />{' '}
            </div>
        </div>
        //incluir la tabla
    );
};
