const  anotherFunction = () => {
    return new Promise((resolve, reject) =>{
        if(false){
            resolve('Hey')
        }
        else {
            reject('Ups')
        }
    })
}

anotherFunction()
.then(respuesta => console.log(respuesta))  // Cuando la promesa se resuelva
.catch(err => console.log(err))             // Cuando haya algun error
.finally(() => console.log('Finally'));     // Cuando mi promesa termine ya sea en resolve o reject se va ejecutar el finally
