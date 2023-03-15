export class Movie {
    _id?: number;
    nombre: String;
    categoria: String;
    duracion: String;
    director: String;
    fecha_lanzamiento: String;
    descripcion: String;

    constructor(nombre: string, categoria: string, duracion: string, director: string, fecha_lanzamiento: string, descripcion: string){
        this.nombre = nombre;
        this.categoria = categoria;
        this.duracion = duracion;
        this.director = director;
        this.fecha_lanzamiento = fecha_lanzamiento;
        this.descripcion = descripcion;
    }
}