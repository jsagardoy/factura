/* eslint-disable @typescript-eslint/explicit-function-return-type */
/* eslint-disable react/prop-types */
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
import { Modal } from '@material-ui/core';

interface FacturaFormProps {
    detalle: Detalle;
    isDisabledOKFactura: boolean;
    handleInputChange: (id: string, value: string | number) => void;
    submitDetalle: (detalle: Detalle) => void;
    composeDetalleList: (detalle: Detalle) => void;
    showNewItem: () => void;
    clearDetalle: () => void;
}
export const AddDetallesFacturaForm: React.FC<FacturaFormProps> = props => {
    const { handleInputChange, submitDetalle, composeDetalleList, detalle, showNewItem, clearDetalle } = props;
    const [disableOK, setDisabledOK] = React.useState(true);

    const isDisabledOK = (): void => {
        if (detalle) {
            formValidationDetalle.validateForm(detalle).then(validationResult => {
                setDisabledOK(!validationResult.succeeded);
            });
        } else {
            setDisabledOK(true);
        }
    };

    React.useEffect(() => {
        isDisabledOK();
    }, [detalle]);
    return (
        <List dense={true}>
            <ListItem>
                <ListItemText>
                    <TextField
                        onChange={e => handleInputChange(e.target.id, e.target.value)}
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
                            clearDetalle();
                        }}
                    >
                        <SaveIcon />
                    </IconButton>
                </ListItemSecondaryAction>
            </ListItem>
        </List>
    );
};
