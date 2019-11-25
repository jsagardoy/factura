import {Validators, createFormValidation}  from '@lemoncode/fonk';

const validationSchema = {
    field:{
        concepto:[Validators.required.validator],
        porcentaje_iva:[Validators.required.validator],
        porcentaje_irpf:[Validators.required.validator],
        cuantia:[Validators.required.validator],
        detalle:[Validators.required.validator],
        año:[Validators.required.validator],
        fecha_emision:[Validators.required.validator],
    }
}

export const formValidation =  createFormValidation (validationSchema);
