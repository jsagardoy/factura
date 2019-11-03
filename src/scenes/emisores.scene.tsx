import * as React from 'react';
import { emisoresData, Empresa } from '@core';
import { Column } from 'material-table';
import { TableComponent } from '@pods';
import { columnsEmpresa } from '@common-app';

export const EmisoresScene = () => {
    interface TableState {
        columns: Array<Column<Empresa>>;
        data: Empresa[];
    }
    const [state, setState] = React.useState<TableState>({
        columns: columnsEmpresa,
        data: emisoresData,
    });
    return <TableComponent title="Emisores" data={state.data} columns={state.columns} />;
};
