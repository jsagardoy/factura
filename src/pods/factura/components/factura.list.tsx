/* eslint-disable react/prop-types */
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
import Button from '@material-ui/core/Button';
import { Detalle } from '@core';
import { AddDetallesFacturaForm } from './factura.form.list';

interface PropsDetalle {
    detalleList: Detalle[];
    isDisabledOKFactura: boolean;
    submitDetalle: (detalle: Detalle) => void;
    composeDetalleList: (detalle: Detalle) => void;
    deleteDetalle: (index: number) => void;
}
export const ListaDetalles: React.FC<PropsDetalle> = props => {
    const { submitDetalle, detalleList, composeDetalleList, isDisabledOKFactura, deleteDetalle } = props;
    const [detalle, setDetalle] = React.useState<Detalle>();
    const [showAdd, setShowAdd] = React.useState<boolean>(false);

    const handleInputChange = (id: string, value: any): void => {
        setDetalle({ ...detalle, [id]: value });
    };
    const clearDetalle = (): void => {
        const newDetalle: Detalle = null;
        setDetalle(newDetalle);
    };
    const showNewItem = (): void => setShowAdd(!showAdd);

    const ShowList = (): any => (
        <List dense={true}>
            {detalleList.map((element, index) => (
                <ListItem key={element.elemento}>
                    <ListItemText primary={element.elemento} />
                    <ListItemText primary={element.cantidad} />
                    <ListItemText primary={element.precio} />
                    <ListItemSecondaryAction>
                        <IconButton edge="end" aria-label="Eliminar" onClick={e => deleteDetalle(index)}>
                            <DeleteIcon />
                        </IconButton>
                    </ListItemSecondaryAction>
                </ListItem>
            ))}
        </List>
    );

    return (
        <>
            <Button onClick={e => showNewItem()}>
                Añadir Elementos <AddIcon />
            </Button>
            <h4>Lista de elementos a mostrar</h4>
            {showAdd ? (
                <AddDetallesFacturaForm
                    detalle={detalle}
                    handleInputChange={handleInputChange}
                    submitDetalle={submitDetalle}
                    composeDetalleList={composeDetalleList}
                    showNewItem={showNewItem}
                    isDisabledOKFactura={isDisabledOKFactura}
                    clearDetalle={clearDetalle}
                />
            ) : (
                <p>No hay elementos añadidos</p>
            )}
            <ShowList />
        </>
    );
};
