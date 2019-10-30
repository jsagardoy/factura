import * as React from 'react';
import TableRow from '@material-ui/core/TableRow/TableRow';
import TableCell from '@material-ui/core/TableCell/TableCell';
import { TableHeaderComponent } from '@common-app';

// tslint:disable-next-line: no-empty-interface
interface EmpresaTableHeaderProps {}

export const EmpresaTableHeaderComponent: React.FC<EmpresaTableHeaderProps> = props => (
    <TableHeaderComponent>
        <TableRow>
            <TableCell align="center">Nombre</TableCell>
            <TableCell align="center">NIF</TableCell>
            <TableCell align="right">Dirección</TableCell>
            <TableCell align="right">CP</TableCell>
            <TableCell align="center">Localidad</TableCell>
            <TableCell align="center">Comunidad</TableCell>
            <TableCell align="center">Pais</TableCell>
            <TableCell align="center">Acciones</TableCell>
        </TableRow>
    </TableHeaderComponent>
);
