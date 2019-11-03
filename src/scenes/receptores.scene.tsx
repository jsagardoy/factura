import * as React from 'react';
import { receptoresData, Empresa } from '@core';
import { Column } from 'material-table';
import { TableComponent } from '@pods';
import { columnsEmpresa } from '@common-app';


export const ReceptoresScene = () => {
    interface TableState {
        columns: Array<Column<Empresa>>;
        data: Empresa[];
    }
    const [state, setState] = React.useState<TableState>({
        columns: columnsEmpresa,
        data: receptoresData,
    });
    return <TableComponent title="Receptores" data={state.data} columns={state.columns} />;
};