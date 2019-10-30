import * as React from 'react';
import { AppLayout } from '@layout';
import { EmpresaTableComponent } from '@pods';
import { receptoresData, Empresa } from '@core';
import Button from '@material-ui/core/Button';
import AddIcon from '@material-ui/icons/Add';
import { handleClickAdd } from '@common-app';

export const ReceptoresScene = () => {
//TBD this must be feeded with a form
    const newElement: Empresa = {
        nombre: 'NuevaEmpresa',
        NIF: '55555555',
        direccion: 'C\\ Luis Cabrera, 9, 2º C',
        CP: 28030,
        localidad: 'Madrid',
        comunidad: 'Madrid',
        pais: 'España',
    };

    const [receptoresList, setReceptoresList] = React.useState(receptoresData);
    return (
        <div>
            <h1>Receptores</h1>
            <EmpresaTableComponent data={receptoresList} />
            <Button
                onClick={e => setReceptoresList(handleClickAdd(newElement, receptoresList))}
                variant="contained"
                startIcon={<AddIcon />}
            >
                Añadir
            </Button>
        </div>
    );
};
