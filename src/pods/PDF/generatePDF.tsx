import * as React from 'react';
import * as jsPDF from 'jspdf';
import { Factura } from '@core';
import * as jsPDFAutotable from 'jspdf-autotable';

export const jsPdfGenerator = (factura: Factura) => {
    const doc = new jsPDF();
    doc.setFont('times');
    doc.setFontType('Normal');
    doc.setFontSize(10);
    doc.addImage(factura.emisor.logoEmpresa, 'JPG', 2, 2, 20, 20);
    doc.text(factura.emisor.nombre, 1, 25);
    doc.text(factura.emisor.direccion, 1, 30);
    doc.text(`(${factura.emisor.CP})`, 1, 35);
    doc.text(factura.emisor.localidad, 11, 35);
    doc.text(factura.emisor.comunidad, 1, 40);
    doc.text(factura.emisor.pais, 1, 45);
    doc.text(factura.emisor.NIF, 1, 50);
    doc.text(`IBAN: ${factura.emisor.iban}`, 1, 55);
    //cliente
    doc.setFont('times');
    doc.setFontType('bold');
    doc.setFontSize(12);
    doc.text('Cliente: ', 100, 25);
    doc.setFont('times');
    doc.setFontType('Normal');
    doc.setFontSize(10);
    doc.text(factura.receptor.nombre, 100, 30);
    doc.text(factura.receptor.direccion, 100, 35);
    doc.text(`(${factura.receptor.CP})`, 100, 40);
    doc.text(factura.receptor.localidad, 110, 40);
    doc.text(factura.receptor.comunidad, 100, 45);
    doc.text(factura.receptor.pais, 100, 50);
    doc.text(factura.receptor.NIF, 100, 55);

    //datos
    /*  var options = {
        theme: 'grid',
        columnStyles: {
            Descripción:          {columnWidth: 30, },
            Total:             {columnWidth: 50},
        },
        
        headStyles: {fillColor: 'white', textColor: 'black'},
        style: {cellWidth: 'auto'},
        margin: {top: 150, bottom: 100, horizontal: 10},
    }
     */

    doc.save('a4.pdf');
};
