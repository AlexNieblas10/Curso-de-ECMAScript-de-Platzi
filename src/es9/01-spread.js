const user = {
    username: 'AlexNieblas10',
    age: 18,
    country: 'MX'
}

const {username, ...values} = user
console.log(username);
console.log(values);