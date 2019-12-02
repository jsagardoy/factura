import {Validators, createFormValidation}  from '@lemoncode/fonk';

const validationSchema = {
    field:{
        concepto:[Validators.required.validator],
        porcentaje_iva:[Validators.required.validator],
        porcentaje_irpf:[Validators.required.validator],
        año:[Validators.required.validator],
        fecha_emision:[Validators.required.validator],
        //TODO validación para detalle?
    }
}

export const formValidation =  createFormValidation (validationSchema);
