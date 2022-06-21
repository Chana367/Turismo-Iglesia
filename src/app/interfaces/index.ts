export interface Welcome {
    turismo:     Hospedaje[];
    restaurante: Hospedaje[];
    hospedaje:   Hospedaje[];
}

export interface Hospedaje {
    nombre:      string;
    img:         string;
    telefono:    string;
    email:       string;
    descripcion: string;
    facebook:    string;
    instagram:   string;
    id:          string;
}
