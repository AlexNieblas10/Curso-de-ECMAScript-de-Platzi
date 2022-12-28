// enahced object literals

function newUser(user, age, country) {
    /* Antes
    return{
        user: user,
        age: age,
        country: country
    } */

    // Ahora
    return {
        user,
        age,
        country,
    }
}
console.log(newUser('Alex', 18, 'MX'))