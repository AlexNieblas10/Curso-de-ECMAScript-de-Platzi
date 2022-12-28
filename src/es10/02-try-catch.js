

try{
    hello()
}
catch(error){
    console.log(error);
}
// Al ejecutar este codigo lo que hace es que se ejecuta el error pero como ya lo conocemos ya que la funcion hello no existe

try {
    anotherFn()
} catch {
    console.log('Esto es un error')
}
// Al ejecutar este codigo lo que hace es que se ejecuta un error y devuelve el texto ya que la funcion no existe



