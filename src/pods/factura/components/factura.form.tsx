import * as React from 'react';
import TextField from '@material-ui/core/TextField';

export const FacturaForm = () => (
    <>
        <TextField autoFocus margin="dense" id="Concepto" label="Concepto" type="string" fullWidth />
        <TextField autoFocus margin="dense" id="porcentaje_iva" label="% IVA" type="number" />
        <TextField autoFocus margin="dense" id="porcentaje_irpf" label="% IRPF" type="number" />
        <TextField autoFocus margin="dense" id="cuantia" label="Cuantía" type="number" />
        <TextField autoFocus margin="dense" id="detalle" label="Detalle" type="string" multiline />
        <TextField autoFocus margin="dense" id="año" label="Año" type="number" />
        <TextField
            autoFocus
            margin="dense"
            id="fechaEmision"
            label="Fecha de Emisión"
            type="date"
            InputLabelProps={{
                shrink: true,
            }}
        />
        <TextField autoFocus margin="dense" id="iban" label="IBAN" type="string" fullWidth />
    </>
);
