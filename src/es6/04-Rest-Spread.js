// arrays destructuring
let fruits = ['Apple', 'Banana'];
let [a, b] = fruits
console.log(a, b);
//OR
console.log(fruits[0], fruits[1]);


// object destructuring
let user = { username: 'Alex', age: 18};
let {username, age} = user;
console.log(username, age);
//OR
console.log(user.username, user.age);


// spread operator extrae los valores de un array u objeto
let person = { name: 'Alex', age: 18}
let country = 'MX'
let data = {id: 1, ...person, country}
console.log(data);


// rest
function sum(num, ...values){
    console.log(values)
    console.log(num + values[0])
    return num + values[0]
}

sum(10, 1, 2, 5, 7, 10)

