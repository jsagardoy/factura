import * as React from 'react';
import TextField from '@material-ui/core/TextField';
import { ListaDetalles } from './factura.list';
import { Detalle } from '@core';

interface FacturaFormProps {
    isDisabledOKFactura:boolean;
    handleInputChange: <T>(fieldName: String, value: T) => void;
    submitDetalle: (detalle: Detalle) => void;
}
export const FacturaForm: React.FC<FacturaFormProps> = props => {
    const { handleInputChange, submitDetalle, isDisabledOKFactura } = props;
    const [detalleList, setDetalleList] = React.useState<Detalle[]>([]);
    const composeDetalleList = (detalle: Detalle) => {
        const newDetalleList: Detalle[] = [...detalleList];
        newDetalleList.push(detalle);
        setDetalleList(newDetalleList);
    };
    return (
        <>
            <TextField
                onChange={e => handleInputChange(e.target.id, e.target.value)}
                required
                autoFocus
                margin="dense"
                id="concepto"
                label="Concepto"
                type="string"
                fullWidth
            />
            <TextField
                onChange={e => handleInputChange(e.target.id, +e.target.value)}
                required
                margin="dense"
                id="porcentaje_iva"
                label="% IVA"
                type="number"
            />
            <TextField
                onChange={e => handleInputChange(e.target.id, +e.target.value)}
                required
                margin="dense"
                id="porcentaje_irpf"
                label="% IRPF"
                type="number"
            />

            <TextField
                onChange={e => handleInputChange(e.target.id, +e.target.value)}
                required
                margin="dense"
                id="año"
                label="Año"
                type="number"
            />
            <TextField
                onChange={e => handleInputChange(e.target.id, e.target.value)}
                required
                margin="dense"
                id="fecha_emision"
                label="Fecha de Emisión"
                type="date"
                InputLabelProps={{
                    shrink: true,
                }}
            />
            <ListaDetalles
                submitDetalle={submitDetalle}
                detalleList={detalleList}
                composeDetalleList={composeDetalleList}
                isDisabledOKFactura={isDisabledOKFactura}
            />
        </>
    );
};
