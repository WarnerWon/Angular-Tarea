export class Persona {

    nombre: string;
    apellidos: string;
    edad: number;
    sexo: string;

    constructor(name: string, lasts: string, age: number, gender: string){
        this.nombre = name
        this.apellidos = lasts
        this.edad = age
        this.sexo = gender
    }
}
