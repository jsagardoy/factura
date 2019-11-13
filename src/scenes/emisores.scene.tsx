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
            render: ((dataRow)=>selection(dataRow))
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

    React.useEffect(() => console.log(`aaaa` + JSON.stringify(emisores.data)), [emisores]);

    const selection = (dataRow: Empresa) => (
        <Checkbox
            checked={dataRow.selected}
            //disabled={dataRow.selected && isDisabled()}
            onChange={e => handleCheck(dataRow)}
        />
    );

    /* const isChecked = (NIF: string, data:Empresa[]) => {
        const newData = [...data];
        const value: Empresa = newData.find((item: Empresa) => item.NIF === NIF && item.selected === true);

        return value ? true : false;
    };
 */
    const isDisabled = (): boolean => {
        const newArray = [...emisores.data];
        const res = newArray.find(item => item.selected === true);
        return res ? true : false;
    };

    const handleCheck = (empresa: Empresa) => {
        const rest: Empresa[] = emisores.data.map((item: Empresa) => {
            if (item.NIF === empresa.NIF) {
                const newItem = { ...empresa, selected: !empresa.selected };
                return newItem;
            } else {
                return item;
            }
        });
        setEmisores({ ...emisores, data: rest }); 
    };

    interface TableState {
        columns: Column<Empresa>[];
        data: Empresa[];
    }

    return <TableComponent title="Emisores" data={emisores.data} columns={emisores.columns} setTable={setEmisores}/>;
};
