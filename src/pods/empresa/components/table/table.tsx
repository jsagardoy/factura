import * as React from 'react';
import MaterialTable, { Column } from 'material-table';
interface TableProps {
    columns: Array<Column<any>>;
    data: any[];
    title: string;
}
export const TableComponent: React.FC<TableProps> = props => {
    const { columns, data, title } = props;
    /*
    interface TableState {
        columns: Array<Column<any>>;
        data: any[];
    } */
    const [state, setState] = React.useState({
        columns,
        data,
    });
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
            title={title}
            columns={state.columns}
            data={state.data}
            editable={{
                onRowAdd: newData =>
                    new Promise(resolve => {
                        setTimeout(() => {
                            resolve();
                            setState(prevState => {
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
                                setState(prevState => {
                                    const oldData = [...prevState.data];
                                    oldData.splice(prevState.data.indexOf(oldData), 1, newData);
                                    return { ...prevState, data };
                                });
                            }
                        }, 600);
                    }),
                onRowDelete: oldData =>
                    new Promise(resolve => {
                        setTimeout(() => {
                            resolve();
                            setState(prevState => {
                                const oldData = [...prevState.data];
                                oldData.splice(prevState.data.indexOf(oldData), 1);
                                return { ...prevState, data };
                            });
                        }, 600);
                    }),
            }}
        />
    );
};
