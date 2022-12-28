//Antes de ECMAScript 6
function newUser(name, age, country){
    var name = name || "Alex"
    var age = age || "18"
    var country = country || "Mx"
    console.log(name, age, country);
}
newUser('Adrian', 12, )

// Con  ECMAScript 6
function newAdmin(name = 'Alex', age = 18, country = 'MX') {
    console.log(name, age, country);
}
newAdmin('Leslie', 'MX')
