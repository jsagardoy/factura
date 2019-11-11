import * as React from 'react';
import { receptoresData, Empresa } from '@core';
import { Column } from 'material-table';
import { TableComponent } from '@pods';
import Checkbox from '@material-ui/core/Checkbox/Checkbox';

export const ReceptoresScene = () => {
    const columnsEmpresa = [
        {
            title: 'Selected',
            field: 'selected',
            render: dataRow => <Checkbox checked={dataRow.selected} onChange={e => handleCheck(dataRow)} />,
        },
        { title: 'Nombre', field: 'nombre' },
        { title: 'NIF', field: 'NIF' },
        { title: 'Dirección', field: 'direccion' },
        { title: 'CP', field: 'CP' },
        { title: 'Localidad', field: 'localidad' },
        { title: 'Comunidad', field: 'comunidad' },
        { title: 'Pais', field: 'pais' },
        { title: 'IBAN', field: 'iban' },
    ];

    const [state, setState] = React.useState<TableState>({
        columns: columnsEmpresa,
        data: receptoresData,
    });
    const handleCheck = (empresa: Empresa) => {
        const newData = [...state.data];
        const rest = newData.map(item => {
            if (item.NIF === empresa.NIF) {
                return { ...item, selected: !empresa.selected };
            } else {
                return item;
            }
        });
        setState({ ...state, data: rest });
    };
    interface TableState {
        columns: Column<Empresa>[];
        data: Empresa[];
    }

    return <TableComponent title="Receptores" data={state.data} columns={state.columns} />;
};
