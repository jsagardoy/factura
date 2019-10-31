import * as React from 'react';
import { EmpresaTableComponent } from '@pods';
import { emisoresData, Empresa } from '@core';
import Button from '@material-ui/core/Button';
import AddIcon from '@material-ui/icons/Add';
import { handleClickAdd, handleClickModify } from '@common-app';

export const EmisoresScene = () => {
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

    const [emisoresList, setEmisoresList] = React.useState([...emisoresData]);
    const updateState = (type: string, state: Empresa[], element: Empresa) => {
        switch (type) {
            case 'edit':
                    setEmisoresList(handleClickModify(element, editElement, emisoresList ));

                    break;
                case 'delete':


                    break;
        }
    };
    return (
        <div>
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
        </div>
    );
};
