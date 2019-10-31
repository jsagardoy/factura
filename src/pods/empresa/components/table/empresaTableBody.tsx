import * as React from 'react';
import TableRow from '@material-ui/core/TableRow/TableRow';
import TableCell from '@material-ui/core/TableCell/TableCell';

import { Empresa } from '@core';
import { TableBodyComponent } from '@common-app';
import IconButton from '@material-ui/core/IconButton';
import DeleteIcon from '@material-ui/icons/Delete';
import EditIcon from '@material-ui/icons/Edit';
// tslint:disable-next-line: no-empty-interface
interface EmpresaTableBodyProps {
    data: Empresa[];
    updateState: (type: string, state: Empresa[], element: Empresa) => void;
}
//TBD this must be feeded with a form

export const EmpresaTableBodyComponent: React.FC<EmpresaTableBodyProps> = (props: EmpresaTableBodyProps) => {
    const { data, updateState } = props;
    //const [list, setList] = React.useState<Empresa[]>(data);

    return (
        <TableBodyComponent>
            {data.map((item: Empresa) => (
                <TableRow  hover selected key={item.NIF}>
                    <TableCell align="center">{item.nombre}</TableCell>
                    <TableCell align="center">{item.NIF}</TableCell>
                    <TableCell align="center">{item.direccion}</TableCell>
                    <TableCell align="center">{item.CP}</TableCell>
                    <TableCell align="center">{item.localidad}</TableCell>
                    <TableCell align="center">{item.comunidad}</TableCell>
                    <TableCell align="center">{item.pais}</TableCell>
                    <TableCell align="center">{item.iban}</TableCell>
                    <TableCell align="center">
                        <IconButton
                            onClick={e => {
                                /*   const newState: Empresa[] = handleClickModify(item, newElement, list);
                                setList(newState); */
                                updateState('edit', data, item);
                            }}
                        >
                            <EditIcon />
                        </IconButton>
                        <IconButton
                            onClick={e => {
                                /* const newState: Empresa[(item, list);
                                setList(newState); */
                                updateState('delete', data, item);
                            }}
                        >
                            <DeleteIcon />
                        </IconButton>
                    </TableCell>
                </TableRow>
            ))}
        </TableBodyComponent>
    );
};
