import * as React from 'react';
import { emisoresData, Empresa } from '@core';
import { Column } from 'material-table';
import { TableComponent } from '@pods';
import Checkbox from '@material-ui/core/Checkbox/Checkbox';

export const EmisoresScene: React.FC = () => {
    const columnsEmpresa = [
        {
            title: 'Selected',
            field: 'selected',
            render: dataRow => selectionCheckBox(dataRow),
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

    const [emisores, setEmisores] = React.useState<TableState>({
        columns: columnsEmpresa,
        data: emisoresData,
    });

    const selectionCheckBox = (dataRow: Empresa) => (
        <Checkbox
            checked={dataRow.selected}
            disabled={dataRow.disabled && !dataRow.selected}
            onChange={e => handleCheck(dataRow)}
        />
    );

    const handleCheck = (empresa: Empresa) => {
        const rest: Empresa[] = emisores.data.map((item: Empresa) => {
            if (item.NIF === empresa.NIF) {
                return { ...empresa, selected: !empresa.selected, disabled: !empresa.disabled };
            } else {
                return { ...item, disabled: !empresa.disabled };
            }
        });
        setEmisores({ ...emisores, data: rest });
    };

    interface TableState {
        columns: Column<Empresa>[];
        data: Empresa[];
    }

    return <TableComponent title="Emisores" data={emisores.data} columns={emisores.columns} setTable={setEmisores} />;
};
