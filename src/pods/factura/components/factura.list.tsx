import * as React from 'react';
import TextField from '@material-ui/core/TextField';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import ListItemSecondaryAction from '@material-ui/core/ListItemSecondaryAction';
import IconButton from '@material-ui/core/IconButton';
import DeleteIcon from '@material-ui/icons/Delete';
import AddIcon from '@material-ui/icons/Add';
import SaveIcon from '@material-ui/icons/Save';


interface PropsDetalle{
    submitDetalle:(detalle)=>void;
}
export const ListaDetalles: React.FC<PropsDetalle> = (props) => {
    const {submitDetalle} = props;
    const [detalle, setDetalle] = React.useState([]);
    const handleInputChange = (id: string, value: any) => {
        setDetalle({ ...detalle, [id]: value });
    };
    return (
        <List dense={true}>
            <ListItem>
                <ListItemText>
                    <TextField
                        onChange={e => handleInputChange(e.target.id, +e.target.value)}
                        required
                        autoFocus
                        margin="dense"
                        id="elemento"
                        label="Elemento"
                        type="string"
                    />
                    <TextField
                        onChange={e => handleInputChange(e.target.id, +e.target.value)}
                        required
                        autoFocus
                        margin="dense"
                        id="cantidad"
                        label="cantidad"
                        type="number"
                    />
                    <TextField
                        onChange={e => handleInputChange(e.target.id, +e.target.value)}
                        required
                        autoFocus
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
                    <IconButton edge="end" aria-label="Añadir" onClick={(e)=>submitDetalle(detalle)}>
                        <SaveIcon />
                    </IconButton>
                </ListItemSecondaryAction>
            </ListItem>
        </List>
    );
};
