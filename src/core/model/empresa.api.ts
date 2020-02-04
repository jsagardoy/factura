export interface Empresa {
    logoEmpresa?: string;
    selected: boolean;
    nombre: string;
    NIF: string;
    direccion: string;
    CP: number;
    localidad: string;
    comunidad: string;
    pais: string;
    iban: string;
    disabled: boolean;
}
export interface Factura {
    id: number;
    selected: boolean;
    concepto: string;
    porcentaje_iva: number;
    porcentaje_irpf: number;
    iva: number;
    irpf: number;
    emisor: Empresa;
    receptor: Empresa;
    cuantia: number;
    detalle?: Detalle[];
    año: number;
    fecha_emision: string;
    total: number;
}

export type Detalle = {
    elemento: string;
    precio: number;
    cantidad: number;
    iva: number;
    total: number;
};
export const emisoresData: Empresa[] = [
    {
        logoEmpresa: 'https://about.canva.com/wp-content/uploads/sites/3/2016/08/logos-1.png',
        selected: false,
        nombre: 'empresa1',
        NIF: '123456789',
        direccion: 'C\\ Martín Carpena, 2, 1º C',
        CP: 20212,
        localidad: 'Algete',
        comunidad: 'Madrid',
        pais: 'España',
        iban: 'ML03D00890170001002120000447',
        disabled: false,
    },
    {
        logoEmpresa: 'https://logomaster.ai/static/media/sample.c8bf2b04.svg',
        selected: false,
        nombre: 'empresa2',
        NIF: '987654321',
        direccion: 'Avenida de la Diputación 22, 8ºC',
        CP: 20207,
        localidad: 'Cádiz',
        comunidad: 'Cádiz',
        pais: 'España',
        iban: 'ML03D00890170001002120000447',
        disabled: false,
    },
];
export const receptoresData: Empresa[] = [
    {
        selected: false,
        nombre: 'El corte inglés',
        NIF: '9999999',
        direccion: 'C\\ Princesa, 1',
        CP: 28002,
        localidad: 'Madrid',
        comunidad: 'Madrid',
        pais: 'España',
        iban: 'ML03D00890170001002120000447',
        disabled: false,
    },
    {
        selected: false,
        nombre: 'Fnac',
        NIF: '1111111',
        direccion: 'Plaza de Callao, 20',
        CP: 28001,
        localidad: 'Madrid',
        comunidad: 'Madrid',
        pais: 'España',
        iban: 'ML03D00890170001002120000447',
        disabled: false,
    },
];
