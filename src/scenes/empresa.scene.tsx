import * as React from 'react';
import { Empresa } from '@core';
import { Column } from 'material-table';
import { TableComponent } from '@pods';
import Checkbox from '@material-ui/core/Checkbox/Checkbox';

interface EmpresaTablasProps{
    title: string;
    data: Empresa[];
}

export const EmpresaTablaScene: React.FC<EmpresaTablasProps> = (props) => {
    const {data, title} = props;
    const columnsEmpresa = [
        {
            title: 'Selected',
            field: 'selected',
            render: dataRow => selectionCheckBoxColumn(dataRow),
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

    const [values, setValues] = React.useState<TableState>({
        columns: columnsEmpresa,
        data: data,
    });

    const selectionCheckBoxColumn = (dataRow: Empresa) => (
        <Checkbox
            checked={dataRow.selected}
            disabled={dataRow.disabled && !dataRow.selected}
            onChange={e => handleCheckSelectionColumn(dataRow)}
        />
    );

    const handleCheckSelectionColumn = (empresa: Empresa) => {
        const rest: Empresa[] = values.data.map((item: Empresa) => {
            if (item.NIF === empresa.NIF) {
                return { ...empresa, selected: !empresa.selected, disabled: !empresa.disabled };
            } else {
                return { ...item, disabled: !empresa.disabled };
            }
        });
        setValues({ ...values, data: rest });
    };

    interface TableState {
        columns: Column<Empresa>[];
        data: Empresa[];
    }

    return <TableComponent title={title} data={values.data} columns={values.columns} setTable={setValues} />;
};
