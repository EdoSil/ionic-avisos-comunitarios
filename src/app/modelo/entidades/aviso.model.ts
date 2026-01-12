
// Modelo de datos para un aviso
// inicializa más adelante con los datos recibidos de la API
export class Aviso {

    id!: number;
    titulo!: string;
    descripcion!: string;
    fechaCreacion!: Date;
    imagen?: string;

}