/* eslint-disable react/prop-types */
import * as React from 'react';
import { Factura } from '@core';
import { Column } from 'material-table';
import { TableComponent } from '@pods';
import Checkbox from '@material-ui/core/Checkbox';

interface FacturaTablasProps {
    title: string;
    data: Factura[];
    selectedRow: (dataRow: Factura, actionType: string) => void;
}

export const FacturaTable: React.FC<FacturaTablasProps> = props => {
    const { data, title, selectedRow } = props;
    const columnsFactura = [
        {
            title: 'Selected',
            field: 'selected',
            render: dataRow => selectionCheckBoxColumn(dataRow),
        },
        { title: 'Numero Factura', field: 'id' },
        { title: 'Fecha de Emisión', field: 'fecha_emision' },
        { title: 'Concepto', field: 'concepto' },
        { title: 'Cuantía', field: 'cuantia' },
        { title: 'Emisor', field: 'emisor.nombre' },
        { title: 'Receptor', field: 'receptor.nombre' },
        { title: 'IVA', field: 'iva' },
        { title: 'IRPF', field: 'irpf' },
        { title: 'Total', field: 'total' },
    ];

    const [values, setValues] = React.useState<TableState>({
        columns: columnsFactura,
        data: data,
    });

    const handleCheckSelectionColumn = (factura: Factura): void => {
        const rest: Factura[] = values.data.map(fact => {
            if (fact.id === factura.id && fact.año === factura.año) {
                return { ...factura, selected: !factura.selected };
            }
        });
        setValues({ ...values, data: rest });
        selectedRow(rest.find((item: Factura) => item.selected === true), title);
    };

    const selectionCheckBoxColumn = (dataRow: Factura) => (
        <Checkbox checked={dataRow.selected} onChange={e => handleCheckSelectionColumn(dataRow)} />
    );

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
