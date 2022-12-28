const number = null;
const validate = number ?? 5; // Si el valor de la variable que esta antes de los signos "??" es null le va asignar el valor que esta despues, en este caso 5

console.log(validate);