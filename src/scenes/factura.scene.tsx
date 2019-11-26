import * as React from 'react';
import { FacturaFormDialog } from 'pods/factura';
import { Empresa, Factura } from '@core';
import { FacturaTabla } from 'pods/factura/components/factura.table';

interface FacturaProps {
    emisor: Empresa;
    receptor: Empresa;
    disabled: boolean;
    disabledOK: boolean;
    facturaList: Factura[];
    handleInputChange: <T>(fieldName: String, value: T) => void;
    handleInputSave: () => void;
    cleanForm: () => void;
}

export const FacturaScene: React.FC<FacturaProps> = props => {
    const { handleInputChange, disabled, handleInputSave, disabledOK, cleanForm, facturaList } = props;
    const añosFactura: number[] = [];
    facturaList.map(factura => {
        añosFactura.includes(factura.año) ? null : añosFactura.push(factura.año);
    });
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
                />
            </div>
            {añosFactura.map((año: number) => (
                <FacturaTabla key={año}
                    title={`Año ${año.toString()}`}
                    data={facturaList.filter((factura: Factura) => factura.año === año)}
                />
            ))}
        </div>
    );
};
