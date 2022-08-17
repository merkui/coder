

class libro{
    constructor(nombre,categoria,autor,precio,disponibilidad,anio){
        this.nombre=nombre
        this.categoria=categoria
        this.autor=autor
        this.precio=precio
        this.disponibilidad=disponibilidad
        this.anio=anio
    }
    habilitar(){
        let error = "libro disponible"
        if( this.disponibilidad==false){
            this.disponibilidad = true
        }else{
            console.log(error)
        }
    }
    desabilitar(){
        let error = "libro no disponible"
        if(this.disponibilidad==true){
            this.disponibilidad = false
        }else{
            console.log(error)
        }
    }
}

let libro1 = new libro("harry","ciencia ficcion","jk",3000,true,1990)
let libro2 = new libro("Señor de los Anillos", "Ciencia Ficcion", "Tolkien", 2000, false,2010)
let libro3 = new libro("50", "Drama", "desconocido", 1500, true,1888)
let libro4 = new libro("Titanic", "Drama", "desconocido", 3500, false,2035)
let libro5 = new libro("Shrek", "Comedia", "asd", 4500, true,1580)
let libro6 = new libro("Martin Fierro", "Drama", "jl", 3000, true,1990)

const libreria = []

//pusheamos los objetos libros al array libreria

//libreria.push(libro1,libro2,libro3,libro4,libro5,libro6)

libreria.push(libro1)
libreria.push(libro2)
libreria.push(libro3)
libreria.push(libro4)
libreria.push(libro5)
libreria.push(libro6)
//pantalla de inicio que muestra todos los libros

//console.log(libreria)

//libro2.habilitar()

//console.log(libro2)

//libro1.habilitar()

//console.log(libro1)

//libro1.desabilitar()

//console.log(libro1)

//libro4.desabilitar()

//console.log(libro4)

//.filter crea un nuevo array con todos los elementos que cumplen con la condicion

//imprimir libros segun disponibilidad true

//let disponibles = libreria.filter(libro=>libro.disponibilidad == true)


//console.log(disponibles)

//filtrar los libros por precio

//let preciomenor3000 = libreria.filter(libro=>libro.precio <= 3000 )

//console.log(preciomenor3000)

//find devuelve un único elemento, el primero que cumpla con la condición

// filtrar por autor jk

//let autor = libreria.find(libro => libro.autor == "jk")

//console.log(autor)

// imprimir libros por precio
//Number()
//let ingreso = Number(prompt("ingresa el precio del libro"))

//let precio = libreria.filter(libro=>libro.precio == ingreso )

//console.log(precio)

function agregarlibro(){
    let nombrelibronuevo = prompt("ingrese nombre")
    let categorianueva = prompt("ingrese categoria")
    let autornuevo =prompt("Ingrese el autor")
    let precionuevo =Number(prompt("Ingrese el precio"))
    let disponibilidadnuevo=confirm("ingrese si esta disponible")
    let anionuevo=Number(prompt("ingrese año"))
    let libronuevo = new libro(nombrelibronuevo,categorianueva, autornuevo,precionuevo,disponibilidadnuevo,anionuevo) 
    //console.log(libronuevo)
    //libreria.push(libronuevo)
    console.log(libreria)
}
let cargarlibro = prompt("desea agragar un libro?").toLocaleUpperCase()

while(cargarlibro=="SI"){
    agregarlibro()
    cargarlibro = prompt("desea agragar un libro?").toLocaleUpperCase()
}
























