import * as React from 'react';

import { EmpresaTableBodyComponent } from './empresaTableBody';
import { EmpresaTableHeaderComponent } from './empresaTableHeader';
import Table from '@material-ui/core/Table';
import Paper from '@material-ui/core/Paper';
import { Empresa } from '@core';

interface TableProps {
    data: Empresa[];
}

export const EmpresaTableComponent: React.FC<TableProps> = props => {
    const { data } = props;
    return (
        <Paper>
            <Table size="small" aria-label="a dense table">
                <EmpresaTableHeaderComponent />
                <EmpresaTableBodyComponent data={data} />
            </Table>
        </Paper>
    );
};
