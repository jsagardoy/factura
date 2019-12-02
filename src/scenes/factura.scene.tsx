import * as React from 'react';
import { FacturaFormDialog } from 'pods/factura';
import { Empresa, Factura } from '@core';
import { FacturaTable } from 'pods/factura/components/factura.table';

interface FacturaProps {
    emisor: Empresa;
    receptor: Empresa;
    disabled: boolean;
    disabledOK: boolean;
    facturaList: Factura[];
    facturasAño: number[];
    handleInputChange: <T>(fieldName: String, value: T) => void;
    handleInputSave: () => void;
    cleanForm: () => void;
    submitDetalle:(detalle)=>void;
}

export const FacturaScene: React.FC<FacturaProps> = props => {
    const { handleInputChange, disabled, handleInputSave, disabledOK, cleanForm, facturaList, facturasAño, submitDetalle } = props;
    const getYearData =(year:number):Factura[] =>{
        const newArray = facturaList.filter((factura: Factura) => factura.año === year);
        return newArray;
    }
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
                    submitDetalle={submitDetalle}
                />
            </div>
            {facturasAño.map((año: number) => (
                <FacturaTable key={año}
                    title={`Año ${año.toString()}`}
                    data={getYearData(año)}
                />
            ))}
        </div>
    );
};
