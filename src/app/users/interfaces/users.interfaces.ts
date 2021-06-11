export interface Persona {
    id:        number;
    nombre:    string;
    apellido:  string;
    telefono:  number;
    rut:       string;
    direccion: Direccion;
    activo:    number;
}

export interface Direccion {
    calle:  string;
    numero: number;
    comuna: Comuna;
}

export interface Comuna {
    id:     number;
    nombre: string;
}
export interface Region {
    id:      number;
    nombre:  string;
    comunas: Comuna[];
}

