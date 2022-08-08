/*function Persona(nombre, edad, calle) {
  this.nombre = nombre;
  this.edad = edad;
  this.calle = calle;
  this.hablar = function () {
    console.log("HOLA SOY " + this.nombre);
  };
}

class Persona2 {
  constructor(nombre, edad, calle) {
    this.nombre = nombre;
    this.edad = edad;
    this.calle = calle;
  }

  hablar() {
    console.log("HOLA SOY " + this.nombre);
  }
}

const persona2 = new Persona("Homero", 39, "Av. Siempreviva 742");
persona1.hablar();*/

class Producto {
  constructor(nombre, precio, categoria, marca) {
    this.nombre = nombre;
    this.precio = precio;
    this.categoria = categoria;
    this.marca = marca;
  }

  iva() {
    return this.precio * 1.21;
  }
}

const producto1 = new Producto("jabon", 200, "limpieza", "dove");
console.log(producto1.iva());
