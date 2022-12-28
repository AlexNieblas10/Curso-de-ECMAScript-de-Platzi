class user{
    constructor(nombre, edad, ciudad){
        this._nombre = nombre,
        this._edad = edad,
        this._ciudad = ciudad
    }

    saludo(){
        return `Hola ${this._nombre}, que hermoso esta hoy ${this._ciudad}`;
    }

    get nombre(){
        return this._nombre
    }
    set nombre(nuevoNombre){
        this._nombre = nuevoNombre
    }
}

let user1 =  new user('Alex', 18, 'Obregon')
console.log(user1);
console.log(user1.saludo());

// GET
console.log(user1.nombre);

// SET
user1.nombre = 'Adrian'
console.log(user1.nombre);
