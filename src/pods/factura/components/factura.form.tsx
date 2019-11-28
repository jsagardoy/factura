import * as React from 'react';
import TextField from '@material-ui/core/TextField';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import ListItemSecondaryAction from '@material-ui/core/ListItemSecondaryAction';
import IconButton from '@material-ui/core/IconButton';
import DeleteIcon from '@material-ui/icons/Delete';

interface FacturaFormProps {
    handleInputChange: <T>(fieldName: String, value: T) => void;
}
export const FacturaForm: React.FC<FacturaFormProps> = props => {
    const { handleInputChange } = props;
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
            <List dense={true}>
                <ListItem>
                    <ListItemText>
                        <TextField
                            onChange={e => handleInputChange(e.target.id, +e.target.value)}
                            required
                            autoFocus
                            margin="dense"
                            id="detalle.elemento"
                            label="Elemento"
                            type="string"
                        />
                        <TextField
                            onChange={e => handleInputChange(e.target.id, +e.target.value)}
                            required
                            autoFocus
                            margin="dense"
                            id="detalle.cantidad"
                            label="cantidad"
                            type="number"
                        />
                        <TextField
                            onChange={e => handleInputChange(e.target.id, +e.target.value)}
                            required
                            autoFocus
                            margin="dense"
                            id="detalle.precio"
                            label="Precio unidad"
                            type="number"
                        />
                    </ListItemText>
                    <ListItemSecondaryAction>
                        <IconButton edge="end" aria-label="delete">
                            <DeleteIcon />
                        </IconButton>
                    </ListItemSecondaryAction>
                </ListItem>
            </List>
        </>
    );
};
