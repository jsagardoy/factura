import * as React from 'react';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import TextField from '@material-ui/core/TextField';
import ListItemSecondaryAction from '@material-ui/core/ListItemSecondaryAction';
import IconButton from '@material-ui/core/IconButton';
import DeleteIcon from '@material-ui/icons/Delete';
import AddIcon from '@material-ui/icons/Add';
import SaveIcon from '@material-ui/icons/Save';
import { Detalle } from '@core';

interface FacturaFormProps{
    detalle:Detalle;
    handleInputChange:(id:string, value:any)=>void;
    submitDetalle: (detalle: Detalle) => void;
    composeDetalleList: (detalle: Detalle) => void;
    showNewItem:()=>void
}
export const AddDetallesFacturaForm:React.FC<FacturaFormProps> = (props) => {
    const {handleInputChange, submitDetalle, composeDetalleList, detalle, showNewItem} = props;
return(
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
                <IconButton edge="end" aria-label="Eliminar">
                    <DeleteIcon />
                </IconButton>
                <IconButton
                    edge="end"
                    aria-label="Guardar"
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
)}