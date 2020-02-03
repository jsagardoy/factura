import * as React from 'react';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import TextField from '@material-ui/core/TextField';
import ListItemSecondaryAction from '@material-ui/core/ListItemSecondaryAction';
import IconButton from '@material-ui/core/IconButton';
import CancelIcon from '@material-ui/icons/Cancel';
import SaveIcon from '@material-ui/icons/Save';
import { Detalle } from '@core';
import { formValidationDetalle } from 'common-app/validations';

interface FacturaFormProps {
    detalle: Detalle;
    isDisabledOKFactura: boolean;
    handleInputChange: (id: string, value: any) => void;
    submitDetalle: (detalle: Detalle) => void;
    composeDetalleList: (detalle: Detalle) => void;
    showNewItem: () => void;
}
export const AddDetallesFacturaForm: React.FC<FacturaFormProps> = props => {
    const { handleInputChange, submitDetalle, composeDetalleList, detalle, showNewItem, isDisabledOKFactura } = props;
    const [disableOK, setDisabledOK] = React.useState(true);
    React.useEffect(() => {
        isDisabledOK();
    }, [detalle]);
    const isDisabledOK = () => {
        if (detalle) {
            formValidationDetalle.validateForm(detalle).then(validationResult => {
                setDisabledOK(!(validationResult.succeeded && isDisabledOKFactura));
            });
        } else {
            setDisabledOK(true);
        }
    };
    return (
        <List dense={true}>
            <ListItem>
                <ListItemText>
                    <TextField
                        onChange={e => handleInputChange(e.target.id, +e.target.value)}
                        autoFocus
                        required
                        margin="dense"
                        id="elemento"
                        label="Elemento"
                        type="string"
                    />
                    <TextField
                        onChange={e => handleInputChange(e.target.id, +e.target.value)}
                        required
                        margin="dense"
                        id="cantidad"
                        label="cantidad"
                        type="number"
                    />
                    <TextField
                        onChange={e => handleInputChange(e.target.id, +e.target.value)}
                        required
                        margin="dense"
                        id="precio"
                        label="Precio unidad"
                        type="number"
                    />
                </ListItemText>
                <ListItemSecondaryAction>
                    <IconButton edge="end" aria-label="Cancelar" onClick={e => showNewItem()}>
                        <CancelIcon />
                    </IconButton>
                    <IconButton
                        edge="end"
                        aria-label="Guardar"
                        disabled={disableOK}
                        onClick={e => {
                            showNewItem();
                            submitDetalle(detalle);
                            composeDetalleList(detalle);
                        }}
                    >
                        <SaveIcon />
                    </IconButton>
                </ListItemSecondaryAction>
            </ListItem>
        </List>
    );
};
