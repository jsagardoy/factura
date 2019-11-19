import * as React from 'react';
import { AppLayout } from '@layout';
import { EmpresaTablaScene, ReceptoresScene, FacturaScene } from '@scenes';
import { emisoresData, receptoresData } from '@core';

interface MainContainerProps {}

export const MainContainer: React.FC<MainContainerProps> = props => {
    return (
        <AppLayout>
            <EmpresaTablaScene title="Emisor" data={emisoresData} />
            <EmpresaTablaScene title="Receptor" data={receptoresData} />
            <FacturaScene/>
        </AppLayout>
    );
};
