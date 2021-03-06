/* eslint-disable prettier/prettier */
// Generated by https://quicktype.io

export interface PlantaPaginatedResponse {
    next: string;
    total:  number;
    fichas: Ficha[];
}

export interface PlantaFullInformation {
    ficha: Ficha;
}


export interface Ficha {
    datos_creacion:             DatosCreacion;
    estado_ficha:               EstadoFicha;
    _id:                        string;
    imagen:                     string;
    etiquetas:                  string[];
    nombre_comun:               string;
    nombre_cientifico:          string;
    origen_distribucion:        OrigenDistribucion[];
    descripcion:                string;
    caracteristicas_especiales: any[];
    complemento:                string;
    consumo:                    any[];
    usos_medicinales:           string[];
    fuentes:                    any[];
    polemica:                   boolean;
    comentarios:                any[];
    __v:                        number;
}

export interface SimplePlanta{
    _id:string;
    nombre_comun:string;
    etiquetas:string[];
    imagen:string;
}


// Planta Solita Path

// Generated by https://quicktype.io
// Generated by https://quicktype.io


export interface Comentario {
    fecha:             Fecha;
    id_usuario:        IDUsuario;
    comentario:        string;
    numero_reportes:   number;
    estado_comentario: boolean;
    _id:               string;
}

export interface Fecha {
    dia:  string;
    mes:  string;
    year: string;
}

export interface IDUsuario {
    _id:      string;
    username: string;
}

export interface DatosCreacion {
    fecha:        Fecha;
    usuario_creo: string;
}

export interface EstadoFicha {
    state:        boolean;
    admin_acepto: string;
}

export interface OrigenDistribucion {
    nombre:   string;
    detalles: string;
    _id:      string;
}






