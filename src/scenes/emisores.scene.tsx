import * as React from 'react';
import { EmpresaTableComponent } from '@pods';
import { emisoresData, Empresa } from '@core';

import { handleClickAdd, handleClickModify, handleClickRemove } from '@common-app';
import MaterialTable, { Column } from 'material-table';
import { FormLabel } from '@material-ui/core';

interface EmisoresProps {
    handleShowReceptores: () => void;
}

export const EmisoresScene = () => {
    // TBD this must be feeded with a form

    const [emisoresList, setEmisoresList] = React.useState(emisoresData);

    // new
    interface TableState {
        columns: Array<Column<Empresa>>;
        data: Empresa[];
    }
    const [state, setState] = React.useState<TableState>({
        columns: [
            { title: 'Nombre', field: 'nombre' },
            { title: 'NIF', field: 'NIF' },
            { title: 'Dirección', field: 'direccion' },
            { title: 'CP', field: 'CP' },
            { title: 'Localidad', field: 'localidad' },
            { title: 'Comunidad', field: 'comunidad' },
            { title: 'Pais', field: 'pais' },
            { title: 'IBAN', field: 'iban' },
        ],
        data: emisoresList,
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
                toolbar:{
                    searchPlaceholder: 'Buscar',
                    searchTooltip: 'Buscar'
                }
            }}
            title="Emisores"
            columns={state.columns}
            data={state.data}
            editable={{
                onRowAdd: newData =>
                    new Promise(resolve => {
                        setTimeout(() => {
                            resolve();
                            setState(prevState => {
                                const data = [...prevState.data];
                                data.push(newData);
                                return { ...prevState, data };
                            });
                        }, 600);
                    }),
                onRowUpdate: (newData, oldData) =>
                    new Promise(resolve => {
                        setTimeout(() => {
                            resolve();
                            if (oldData) {
                                setState(prevState => {
                                    const data = [...prevState.data];
                                    data.splice(prevState.data.indexOf(oldData), 1, newData);
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
                                const data = [...prevState.data];
                                data.splice(prevState.data.indexOf(oldData), 1);
                                return { ...prevState, data };
                            });
                        }, 600);
                    }),
            }}
        />
    );
};

{
    /* <div>
        <h1>Emisores</h1>
        <EmpresaTableComponent data={emisoresList} updateState={updateState} />
        <Button
            onClick={e => {
                setEmisoresList([...handleClickAdd(newElement, emisoresList)]);
            }}
            variant="contained"
            startIcon={<AddIcon />}
        >
            Añadir
        </Button>
    </div> */
}
