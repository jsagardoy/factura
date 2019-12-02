import * as React from 'react';
import TextField from '@material-ui/core/TextField';
import {ListaDetalles} from './factura.list';
interface FacturaFormProps {
    handleInputChange: <T>(fieldName: String, value: T) => void;
    submitDetalle: (detalle)=>void;
}
export const FacturaForm: React.FC<FacturaFormProps> = props => {
    const { handleInputChange, submitDetalle } = props;
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
                autoFocus
                margin="dense"
                id="porcentaje_iva"
                label="% IVA"
                type="number"
            />
            <TextField
                onChange={e => handleInputChange(e.target.id, +e.target.value)}
                required
                autoFocus
                margin="dense"
                id="porcentaje_irpf"
                label="% IRPF"
                type="number"
            />
            
            <TextField
                onChange={e => handleInputChange(e.target.id, +e.target.value)}
                required
                autoFocus
                margin="dense"
                id="año"
                label="Año"
                type="number"
            />
            <TextField
                onChange={e => handleInputChange(e.target.id, e.target.value)}
                required
                autoFocus
                margin="dense"
                id="fecha_emision"
                label="Fecha de Emisión"
                type="date"
                InputLabelProps={{
                    shrink: true,
                }}
            />
            <ListaDetalles submitDetalle={submitDetalle} />
        </>
    );
};
