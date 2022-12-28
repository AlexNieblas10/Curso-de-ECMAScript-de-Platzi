//Antes de ECMAScript 6
var lastName = 'Adrian'
lastName = 'Alex'
console.log(lastName);


// Con  ECMAScript 6
let fruit = 'Apple'
fruit = 'Kiwi'
console.log(fruit);

const animal = 'Dog'
animal = 'Cat'
console.log(animal);


// Ejemplo
const fruits = () => {
    if (true) {
        var fruit1 = 'Apple'    //function scope
        let fruit2 = 'Kiwi'     //block scope
        const fruit3 = 'Banana' //block scope
    }
    console.log(fruit1);
    console.log(fruit2);
    console.log(fruit3);
}

fruits()