export interface EmpresaS {
  nombre: string;
  NIF: string;
  direccion: string;
  CP: number;
  localidad: string;
  comunidad: string;
  pais: string;
}
export interface Factura {
  id: string;
  concepto: string;
  porcentaje_iva: number;
  porcentaje_irpf: number;
  iva: number;
  irpf: number;
  emisor: string;
  receptor: string;
  cuantía: number;
  detalle?: string;
}

