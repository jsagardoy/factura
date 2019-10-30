import * as React from 'react';
import { EmpresaTableComponent } from '@pods';

import { emisoresData } from '@core';
import Button from '@material-ui/core/Button';
import AddIcon from '@material-ui/icons/Add';

export const EmisoresScene = () => {
    return (
        <div>
            <h1>Emisores</h1>
            <EmpresaTableComponent data={emisoresData} />
            <Button variant="contained" startIcon={<AddIcon />}>
                Añadir
            </Button>
        </div>
    );
};
