import * as React from 'react';
import MaterialTable, { Column } from 'material-table';
import { positions } from '@material-ui/system';
import { Tooltip } from '@material-ui/core';
interface TableProps {
    columns: Array<Column<any>>;
    data: any[];
    title: string;
    setTable: (value) => void;
}
export const TableComponent: React.FC<TableProps> = props => {
    const { columns, data, title, setTable } = props;
    return (
        <MaterialTable
            localization={{
                header: {
                    actions: 'Acciones',
                },
                body: {
                    emptyDataSourceMessage: 'No hay elementos para',
                    addTooltip: 'Añadir',
                    deleteTooltip: 'Eliminar',
                    editTooltip: 'Editar',
                    editRow: {
                        deleteText: '¿Está segudo de que quiere eliminar esta fila?',
                        cancelTooltip: 'Cancelar',
                        saveTooltip: 'Guardar',
                    },
                },
                pagination: {
                    labelDisplayedRows: '{from}-{to} de {count}',
                    labelRowsSelect: 'Registros',
                    labelRowsPerPage: 'Registros por página',
                    firstAriaLabel: 'Primera página',
                    firstTooltip: 'Primera página',
                    previousAriaLabel: 'Anterior',
                    previousTooltip: 'Página anterior',
                    nextAriaLabel: 'Siguiente',
                    nextTooltip: 'Página siguiente',
                    lastAriaLabel: 'Última',
                    lastTooltip: 'Última siguiente',
                },
                toolbar: {
                    searchPlaceholder: 'Buscar',
                    searchTooltip: 'Buscar',
                },
            }}
            options={{
                actionsColumnIndex: -1,
            }}
            title={title}
            columns={columns}
            data={data}
            editable={{
                onRowAdd: newData =>
                    new Promise(resolve => {
                        setTimeout(() => {
                            resolve();
                            setTable(prevState => {
                                const oldData = [...prevState.data];
                                oldData.push(newData);
                                return { ...prevState, oldData };
                            });
                        }, 600);
                    }),
                onRowUpdate: (newData, oldData) =>
                    new Promise(resolve => {
                        setTimeout(() => {
                            resolve();
                            if (oldData) {
                                setTable(prevState => {
                                    const pos = prevState.data.map((item, i) => (item.NIF === oldData.NIF ? i : -1))[0];
                                    const newArray = [...prevState.data];
                                    data.splice(pos, 1, newData);
                                    return { ...prevState, newArray };
                                });
                            }
                        }, 600);
                    }),
                onRowDelete: oldData =>
                    new Promise(resolve => {
                        setTimeout(() => {
                            resolve();
                            setTable(prevState => {
                                const pos = prevState.data.map((item, i) => (item.NIF === oldData.NIF ? i : -1))[0];
                                const newArray = [...prevState.data];
                                data.splice(pos, 1);
                                return { ...prevState, newArray };
                            });
                        }, 600);
                    }),
            }}
        />
    );
};
