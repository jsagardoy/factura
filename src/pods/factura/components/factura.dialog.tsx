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
    handleInputChange: (fieldName: String, value: string | number | Date) => void;
    handleInputSave: () => void; 
    disabled: boolean;
}

export const FacturaFormDialog: React.FC<FacturaFormProps> = props => {
    const [open, setOpen] = React.useState(false);
    const { handleInputChange, disabled, handleInputSave } = props;

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
                    <FacturaForm disabled={disabled} handleInputChange={handleInputChange} />
                </DialogContent>
                <DialogActions>
                    <Button onClick={handleClose} color="primary">
                        Cancelar
                    </Button>
                    <Button onClick={(e)=>{handleClose();handleInputSave()}} color="primary">
                        OK
                    </Button>
                </DialogActions>
            </Dialog>
        </div>
    );
};
