import * as React from 'react';
import { AppLayout } from '@layout';
import { EmisoresScene, ReceptoresScene, FacturaScene } from '@scenes';

interface MainContainerProps {

}

export const MainContainer: React.FC<MainContainerProps> = (props) => {
    const [showReceptores, setShowReceptores] = React.useState(false);
    const [showFactura, setShowFactura] = React.useState(false);
    return (
        <AppLayout>
            <EmisoresScene />
            <ReceptoresScene show={showReceptores}/>
            <FacturaScene show = {showFactura} />
        </AppLayout>
    );
};
