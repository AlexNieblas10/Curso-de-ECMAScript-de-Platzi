const datos = [
    {
        id: 1,
        title: 'Iron Man',
        year: 2008
    },
    {
        id: 2,
        title: 'Spiderman: Homecoming',
        year: 2017
    }, 
    {
        id: 3,
        title: 'Avengers: Endgame',
        year: 2019
    }
];

const obtenerLosDatos = (datos1) => {
    return new Promise((resolve, reject) => {
        if (datos1) {
            setTimeout(()=>{
                resolve(datos1)
            }, 2000)
        }
        else{
            setTimeout(()=>{
                reject('Algo salio mal')
            }, 2000)
        } 
    })
}

obtenerLosDatos(datos)
.then(datos => console.log(datos))
.catch(err => console.log(err))