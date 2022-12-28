const entries = new Map([['name'], ['age', 18]])
console.log(entries);
console.log(Object.fromEntries(entries));

//Este metodo te convierte un array de arrays a un objeto, si un array dentro del array solo tiene un valo va poner el segundo valor como undefined