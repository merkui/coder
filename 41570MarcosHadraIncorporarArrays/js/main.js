suma = 0;
//Class Producto
class Producto {
  constructor(nombre, precio) {
    this.nombre = nombre.toUpperCase();
    this.precio = parseFloat(precio);
  }
  sumaIva() {
    this.precio = this.precio * 1.21;
  }
}
//Class Carrito
/*class Carrito {
  constructor(nombre, precio) {
    this.nombre = nombre.toUpperCase();
    this.precio = parseFloat(precio);
  }
  sumaIva() {
    this.precio = this.precio * 1.21;
  }
}*/

//Decalro array de productos
const productos = [
  { id: 1, nombre: "Jabon", precio: 10 },
  { id: 2, nombre: "Shampoo", precio: 20 },
];
//console.log(productos);
alert(
  "Productos Disponibles: \n\n" +
    JSON.stringify(productos, null, 0) +
    "\n\nPara agregar al carro ingrese ID de producto"
);

//Declarar array carrito
const carrito = [];

//Mostrar productos disponibles
/*for (const producto of productos) {
  console.log(producto.id);
  console.log(producto.nombre);
  console.log(producto.precio);
}*/

// Agarrar un producto disponible y push a carrito
let pregunto = prompt("1. Agrregar producto al carro? \n Si \n No");
while (pregunto.toLowerCase() !== "no") {
  ingresarProductos();
  // alert("Adentro del while - funcion push");
  pregunto = prompt("2. Seguir comprando? \n Si \n No");
}
//alert("Afuera del while - debo mostrar compra");

//Funcion push a array carrito
function ingresarProductos() {
  agregarProducto = prompt(
    "Productos Disponibles: \n\n" +
      JSON.stringify(productos, null, 0) +
      "\n\nPara agregar al carro ingrese ID de producto"
  );

  if (agregarProducto == 1) {
    carrito.push(new Producto("Jabon", "10"));

    //agregarProducto = "Jabon por $10";
    precio = 10;
    suma = suma + precio;
  } else if (agregarProducto == 2) {
    carrito.push(new Producto("Shampoo", "20"));

    // agregarProducto = "Shampoo por $20";
    precio = 20;
    suma = suma + precio;
  }
  //console.log(agregarProducto + " Suma total del pedido $" + suma);
}

console.log(
  "Productos en tu carrito : \n" + JSON.stringify(carrito, null, 0) + "\n"
);
if (suma) {
  let totalConIva = suma * 1.21;
  console.log(
    "Total sin iva: $" + suma + "\n" + "Total con iva: $" + totalConIva
  );
}

/*
//Declaramos un array de productos para almacenar objetos
const productos = [];
productos.push(new Producto("arroz", "125"));
productos.push(new Producto("fideo", "70"));
productos.push(new Producto("pan", "50"));
//Iteramos el array con for...of para modificarlos a todos
for (const producto of productos) producto.sumaIva();
console.log(productos);*/

/*suma = 0;
let pregunto = prompt("1. Quiere comprar productos? \n Si \n No");
while (pregunto.toLowerCase() !== "no") {
  ingresarProductos();
  pregunto = prompt("2. Quiere comprar un producto mas? \n Si \n No");
}

function ingresarProductos() {
  producto = prompt("Ingerse un producto\n1. Jabon $10\n2. Shampoo $20");

  if (producto == 1) {
    producto = "Jabon por $10";
    precio = 10;
    suma = suma + precio;
  } else if (producto == 2) {
    producto = "Shampoo por $20";
    precio = 20;
    suma = suma + precio;
  }
  console.log(producto + " Suma total del pedido $" + suma);
}

if (suma) {
  let totalConIva = suma * 1.21;
  console.log("Total con iva incluido: $" + totalConIva);
}*/
