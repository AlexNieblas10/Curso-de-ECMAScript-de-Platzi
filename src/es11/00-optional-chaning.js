const users = {
    Alex:{
        country: 'Mx'
    },
    Leslie:{
        country: 'Mx'
    }
}

console.log(users.Adrian?.country)
// Con el signo ? lo que hace es que pregunta a ver si existe ese valor dentro de esa capa, si no la encuentra retorna undefined