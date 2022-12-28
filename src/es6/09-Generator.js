function* iterate(array){
    for (let value of array) {
        yield value
    }
}

const it = iterate(['Alex', 'Adrian', 'Leslie', 'Zahian'])
console.log(it.next().value);
console.log(it.next().value);
console.log(it.next().value);
console.log(it.next().value);
console.log(it.next().value);
console.log(it.next().value);
console.log(it.next().value);


