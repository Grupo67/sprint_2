var arreglo =[];

function enviar(nombre, documento,edad,genero,grado,telefono){
    nombre    = document.getElementById('nombre')
    documento = document.getElementById('documento')
    edad      = document.getElementById('edad')
    genero    = document.getElementById('genero')
    grado     = document.getElementById('grado')
    telefono  = document.getElementById('tel')

    var persona ={
        Nombre: nombre.value,
        Documento: documento.value,
        Edad: edad.value,
        Genero: genero.value,
        Grado: grado.value,
        Tel: telefono.value
    }

    arreglo.push(persona)
    console.log(arreglo);

}

function guardar(){
    localStorage.setItem('dato', JSON.stringify(arreglo))
}

// function buscar(){
//     var cadena= 'hola como estan '
//     var palabra= 'todos'

//     var busq = cadena.indexOf(palabra)

//     if(busq >= 0){
//         console.log("la palabra existe dentro de la cadena" + busq);
//     }else{
//         console.log("la palabra no existe" + busq);
//     }
// }

function buscar(){
    var cadena= 'hola como estan todos'
    var palabra= /todos/

    var busq = cadena.search(palabra)

    if(busq >= 0){
        console.log("la palabra existe dentro de la cadena" + busq);
    }else{
        console.log("la palabra no existe" + busq);
    }
}

buscar()