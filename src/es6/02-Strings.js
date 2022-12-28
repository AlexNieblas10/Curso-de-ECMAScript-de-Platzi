//Antes de ECMAScript 6
let hello = 'Hello'
let world = 'World'
let epicPhrase = hello + ' ' + world + '!'
console.log(epicPhrase);
let lorem = 'esto es un string \n' + 'Otra linea'
console.log(lorem);


// Con  ECMAScript 6
// Template literals
let epicPhrase2 = `${hello} ${world}!`
console.log(epicPhrase2);

// multi-line strings
let lorem2 = `Esta es una frase epica 
continuacion de la frase`
console.log(lorem2);