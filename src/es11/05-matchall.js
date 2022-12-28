const regex = /\b(Apple)+\b/g;

const fruit = 'Apple, Banana, Grapes, Kiwi, Orange, Apple'

for(const match of fruit.matchAll(regex)){
    console.log(match);
}
for(const match of fruit.matchAll('Kiwi')){
    console.log(match);
}

// Lo que hace match this en validar si algun objeto dentro del string coincide en este caso con el regex que es una manzana pero con un string tambien funciona