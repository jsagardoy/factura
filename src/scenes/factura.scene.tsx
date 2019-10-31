import * as React from 'react';

interface FacturaProps {
    show: boolean;
}
export const FacturaScene: React.FC<FacturaProps> = props => {
    const { show } = props;

    return (
        <div hidden={!show}>
            <h1>Factura</h1>
        </div>
    );
};
