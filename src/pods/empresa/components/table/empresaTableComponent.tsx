import * as React from 'react';

import { EmpresaTableBodyComponent } from './empresaTableBody';
import { EmpresaTableHeaderComponent } from './empresaTableHeader';
import Table from '@material-ui/core/Table';
import Paper from '@material-ui/core/Paper';
import { Empresa } from '@core';

interface TableProps {
    data: Empresa[];
    updateState: (type: string, state: Empresa[], element: Empresa) => void;
}

export const EmpresaTableComponent: React.FC<TableProps> = props => {
    const { data, updateState } = props;
    return (
        <Paper>
            <Table size="small" aria-label="a dense table">
                <EmpresaTableHeaderComponent />
                <EmpresaTableBodyComponent data={data} updateState={updateState} />
            </Table>
        </Paper>
    );
};
