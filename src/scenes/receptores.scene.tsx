import * as React from 'react';
import { EmpresaTableComponent } from '@pods';
import { receptoresData, Empresa } from '@core';
import Button from '@material-ui/core/Button';
import AddIcon from '@material-ui/icons/Add';
import { handleClickAdd, handleClickModify, handleClickRemove } from '@common-app';

export const ReceptoresScene = () => {
    // TBD this must be feeded with a form
    const newElement: Empresa = {
        nombre: 'NuevaEmpresa',
        NIF: '55555555',
        direccion: 'C\\ Luis Cabrera, 9, 2º C',
        CP: 28030,
        localidad: 'Madrid',
        comunidad: 'Madrid',
        pais: 'España',
        iban: 'ML03D00890170001002120000447',
    };
    const editElement: Empresa = {
        nombre: 'Empresa reemplazada',
        NIF: '55555555',
        direccion: 'C\\ Luis Cabrera, 9, 2º C',
        CP: 28030,
        localidad: 'Madrid',
        comunidad: 'Madrid',
        pais: 'España',
        iban: 'ML03D00890170001002120000447',
    };

    const [receptoresList, setReceptoresList] = React.useState(receptoresData);
    const updateState = (type: string, state: Empresa[], element: Empresa) => {
        switch (type) {
            case 'edit':
                setReceptoresList(handleClickModify(element, editElement, receptoresList));
                break;
            case 'delete':
                setReceptoresList(handleClickRemove(element, receptoresList));
                break;
        }
    };

    return (
        <div>
            <h1>Receptores</h1>
            <EmpresaTableComponent data={receptoresList} updateState={updateState} />
            <Button
                onClick={e => {
                    setReceptoresList([...handleClickAdd(newElement, receptoresList)]);
                }}
                variant="contained"
                startIcon={<AddIcon />}
            >
                Añadir
            </Button>
        </div>
    );
};
