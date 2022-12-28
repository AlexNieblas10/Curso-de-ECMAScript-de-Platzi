const list = new Set()

for (let i = 1; i <= 10; i++) {
    list.add(`item${i}`)
}

console.log(list);

const array = [1, 1, 1, 2, 2, 3, 3, 4, 5, 6, 7, 7, 8, 8, 9, 10]
const quitarRepetidos = [...new Set(array)]
console.log(quitarRepetidos);


const ola = {...array}
console.log(ola);