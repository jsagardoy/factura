export interface Empresa {
    nombre: string;
    NIF: string;
    direccion: string;
    CP: number;
    localidad: string;
    comunidad: string;
    pais: string;
    iban: string;
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
    cuantia: number;
    detalle?: string;
    año: number;
    fecha_emision: string;
    iban: string;
}

export const emisoresData: Empresa[] = [
           {
               nombre: 'empresa1',
               NIF: '123456789',
               direccion: 'C\\ Martín Carpena, 2, 1º C',
               CP: 20212,
               localidad: 'Algete',
               comunidad: 'Madrid',
               pais: 'España',
               iban: 'ML03D00890170001002120000447',
           },
           {
               nombre: 'empresa2',
               NIF: '987654321',
               direccion: 'Avenida de la Diputación 22, 8ºC',
               CP: 20207,
               localidad: 'Cádiz',
               comunidad: 'Cádiz',
               pais: 'España',
               iban: 'ML03D00890170001002120000447',
           },
       ];
export const receptoresData: Empresa[] = [
           {
               nombre: 'El corte inglés',
               NIF: '9999999',
               direccion: 'C\\ Princesa, 1',
               CP: 28002,
               localidad: 'Madrid',
               comunidad: 'Madrid',
               pais: 'España',
               iban: 'ML03D00890170001002120000447',
           },
           {
               nombre: 'Fnac',
               NIF: '1111111',
               direccion: 'Plaza de Callao, 20',
               CP: 28001,
               localidad: 'Madrid',
               comunidad: 'Madrid',
               pais: 'España',
               iban: 'ML03D00890170001002120000447',
           },
       ];
