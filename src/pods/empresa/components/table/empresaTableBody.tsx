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
}

export const EmpresaTableBodyComponent: React.FC<EmpresaTableBodyProps> = (props: EmpresaTableBodyProps) => {
    const { data } = props;
    return (
        <TableBodyComponent>
            {data.map((item: Empresa) => (
                <TableRow key={item.NIF}>
                    <TableCell align="center">{item.nombre}</TableCell>
                    <TableCell align="center">{item.NIF}</TableCell>
                    <TableCell align="center">{item.direccion}</TableCell>
                    <TableCell align="center">{item.CP}</TableCell>
                    <TableCell align="center">{item.localidad}</TableCell>
                    <TableCell align="center">{item.comunidad}</TableCell>
                    <TableCell align="center">{item.pais}</TableCell>
                    <TableCell align="center">
                        <IconButton ><DeleteIcon/></IconButton>
                        <IconButton ><EditIcon/></IconButton>
                    </TableCell>
                </TableRow>
            ))}
        </TableBodyComponent>
    );
};
{
    /* <TableCell align="center">Nombre</TableCell>
        <TableCell align="center">NIF</TableCell>
        <TableCell align="right">Dirección</TableCell>
        <TableCell align="right">CP</TableCell>
        <TableCell align="center">Localidad</TableCell>
        <TableCell align="center">Comunidad</TableCell>
        <TableCell align="center">Pais</TableCell> */
}
