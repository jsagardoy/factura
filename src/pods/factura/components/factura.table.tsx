import * as React from 'react';
import { Factura } from '@core';
import { Column } from 'material-table';
import { TableComponent } from '@pods';

interface FacturaTablasProps {
    title: string;
    data: Factura[];
}

export const FacturaTable: React.FC<FacturaTablasProps> = props => {
    const { data, title } = props;
    const columnsFactura = [
        { title: 'Numero Factura', field: 'id' },
        { title: 'Fecha de Emisión', field: 'fecha_emision' },
        { title: 'Concepto', field: 'concepto' },
        { title: 'Cuantía', field: 'cuantia' },
        { title: 'Detalle', field: 'detalle' },
        { title: 'Emisor', field: 'emisor.nombre' },
        { title: 'Receptor', field: 'receptor.nombre' },
       /*  { title: '% IVA', field: 'porcentaje_iva' },
        { title: '% IRPF', field: 'porcentaje_irpf' }, */
        { title: 'IVA', field: 'iva' },
        { title: 'IRPF', field: 'irpf' },
        /* { title: 'Año', field: 'año' }, */
        { title: 'Total', field: 'total' },
    ];

    const [values, setValues] = React.useState<TableState>({
        columns: columnsFactura,
        data: data,
    });

    interface TableState {
        columns: Column<Factura>[];
        data: Factura[];
    }

    return values.data.length > 0 ? (
        <TableComponent title={title} data={data} columns={values.columns} setTable={setValues} />
    ) : (
        <h3>No hay facturas para mostrar</h3>
    );
};
