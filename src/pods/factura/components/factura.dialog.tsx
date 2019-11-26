import * as React from 'react';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import { FacturaForm } from './factura.form';

interface FacturaFormProps {
    disabled: boolean;
    disabledOK:boolean;
    handleInputChange:<T> (fieldName: String, value: T ) => void;
    handleInputSave: () => void; 
    cleanForm:()=>void;
}

export const FacturaFormDialog: React.FC<FacturaFormProps> = props => {
    const [open, setOpen] = React.useState(false);
    const { handleInputChange, disabled, handleInputSave, disabledOK, cleanForm } = props;

    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };
        
    return (
        <div>
            <Button disabled={disabled} variant="outlined" color="primary" onClick={handleClickOpen}>
                Nueva factura
            </Button>
            <Dialog open={open} onClose={handleClose} aria-labelledby="form-dialog-title">
                <DialogTitle id="form-dialog-title">Nueva factura</DialogTitle>
                <DialogContent>
                    <DialogContentText>Introduzca una nueva factura</DialogContentText>
                    <FacturaForm handleInputChange={handleInputChange} />
                </DialogContent>
                <DialogActions>
                    <Button onClick={(e)=>{handleClose();cleanForm()}} color="primary">
                        Cancelar
                    </Button>
                    <Button disabled={disabledOK} onClick={(e)=>{handleClose();handleInputSave();cleanForm()}} color="primary">
                        OK
                    </Button>
                </DialogActions>
            </Dialog>
        </div>
    );
};
