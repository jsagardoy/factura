import * as React from 'react';
import { emisoresData, Empresa } from '@core';
import { Column } from 'material-table';
import { TableComponent } from '@pods';
import Checkbox from '@material-ui/core/Checkbox/Checkbox';

export const EmisoresScene = () => {
    const columnsEmpresa = [
        {
            title: 'Selected',
            field: 'selected',
            render: dataRow => <Checkbox checked={dataRow.selected} disabled={dataRow.selected && isDisabled()} onChange={e => handleCheck(dataRow)} />,
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
        data: emisoresData,
    });

    const  isDisabled = ():boolean => {
        const newArray =  [...state.data];
        const res = newArray.find((item)=>item.selected===true);
        return res?true:false;
    }

    const handleCheck = (empresa: Empresa) => {
        const newData = [...state.data];
        const rest = newData.map(item => {
            if (item.NIF === empresa.NIF) {
                const newItem = {...item, selected: !empresa.selected}
                return newItem;
            } else {
                return item;
            }
        });
        const newState = {...state, data:rest}
        setState(
            newState
        );
        console.log(state.data);
    };
    interface TableState {
        columns: Column<Empresa>[];
        data: Empresa[];
    }

    return <TableComponent title="Emisores" data={state.data} columns={state.columns} />;
};
