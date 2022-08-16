suma = 0;
//Class Producto
class Producto {
  constructor(id, nombre, precio, stock) {
    this.id = Number(id);
    this.nombre = nombre.toUpperCase();
    this.precio = parseFloat(precio);
    this.stock = Number(stock);
  }
  sumaIva() {
    this.precio = this.precio * 1.21;
  }
  restoStock() {
    this.stock = this.stock - 1;
  }
  //no me sale
  calculoSubtotal(cantidad) {
    this.precio = this.precio * cantidad;
  }
}

//Creo producto
let producto1 = new Producto(1, "Jabon", 10, 1);
let producto2 = new Producto(2, "Shampoo", 20, 100);
let producto3 = new Producto(3, "Crema Enjuague", 30, 0);
let producto4 = new Producto(4, "Toalla", 40, 100);

//Creo array de productos
const productos = [];
productos.push(producto1, producto2, producto3, producto4);

//Primer alert de todos lo productos
//Googlee como mostrar array por alert
alert(
  "Lista de Productos (todos): \n\n" +
    JSON.stringify(productos, null, 0) +
    "\n\nPara agregar al carro ingrese ID de producto"
);

//Declaro array carrito vacio
const carrito = [];

// Mostrar productos disponibles para comprar
let pregunto = "si";
while (pregunto.toLowerCase() !== "no") {
  let productosDisponibles = productos.filter((el) => el.stock > 0);
  console.log(productosDisponibles);
  ingresarProductos();

  pregunto = prompt("2. Agregar otro producto ? \n Si \n No");
}

//Funcion push a array carrito
function ingresarProductos() {
  let productosDisponibles = productos.filter((el) => el.stock > 0);

  agregarProducto = prompt(
    "Productos Disponibles: \n\n" +
      JSON.stringify(productosDisponibles, null, 0) +
      "\n\nPara agregar al carro ingrese ID de producto"
  );

  // agregarCanitdad = prompt("Ingese cantidad");

  if (agregarProducto == 1 && producto1.stock > 0) {
    carrito.push(producto1);
    producto1.restoStock();
    // producto1.calculoSubtotal();
    // alert(producto1.calculoSubtotal);
    //alert(producto1.stock);
    suma += producto1.precio;
    //alert(suma);
  } else if (agregarProducto == 2 && producto2.stock > 0) {
    carrito.push(producto2);
    producto2.restoStock();
    //alert(producto1.stock);
    suma += producto2.precio;
  } else if (agregarProducto == 3 && producto3.stock > 0) {
    carrito.push(producto3);
    producto3.restoStock();
    //alert(producto1.stock);
    suma += producto3.precio;
  } else if (agregarProducto == 4 && producto4.stock > 0) {
    carrito.push(producto4);
    producto4.restoStock();
    //alert(producto1.stock);
    suma += producto4.precio;
  } else {
    alert("Producto no existente o fuera de stock");
  }
  //console.log(agregarProducto + " Suma total del pedido $" + suma);
}

console.log(
  "Productos en tu carrito : \n" + JSON.stringify(carrito, null, 0) + "\n"
);

const productosComprados = carrito.map(
  (el) => "Nombre: " + el.nombre + " por $" + el.precio
);
console.log("Productos comprados \n" + productosComprados);

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
