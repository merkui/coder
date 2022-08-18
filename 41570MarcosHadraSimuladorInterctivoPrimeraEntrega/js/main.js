suma = 0;
cantidadPedida = 0;

//Class Producto
class Producto {
  constructor(id, nombre, precio, stock, cantidadPedida) {
    this.id = Number(id);
    this.nombre = nombre.toUpperCase();
    this.precio = parseFloat(precio);
    this.stock = Number(stock);
    this.cantidadPedida = Number(cantidadPedida);
  }
  sumaIva() {
    this.precio = this.precio * 1.21;
  }
  restoStock(cantidad) {
    this.stock = this.stock - cantidad;
  }
  /* no llegue
  calculoSubtotal() {
    this.precio = this.precio * cantidad;
  }*/

  acumuloCantidad(cantidad) {
    this.cantidadPedida = this.cantidadPedida + cantidad;
  }
}

//Creo producto
let producto1 = new Producto(1, "Jabon", 10, 3, 0);
let producto2 = new Producto(2, "Shampoo", 20, 100, 0);
let producto3 = new Producto(3, "Crema Enjuague", 30, 0, 0);
let producto4 = new Producto(4, "Toalla", 40, 100, 0);

//Creo array de productos
const productos = [];
//Push
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
  //let productosDisponibles = productos.filter((el) => el.stock > 0);
  // console.log(productosDisponibles);
  ingresarProductos();

  pregunto = prompt("Quiere agregar otro producto ? \n Si \n No");
}

//Funcion push a array carrito
function ingresarProductos() {
  let productosDisponibles = productos.filter((el) => el.stock > 0);

  let agregarProducto = prompt(
    "Productos Disponibles: \n\n" +
      JSON.stringify(productosDisponibles, null, 0) +
      "\n\nPara agregar al carro ingrese ID de producto"
  );

  let cantidad = Number(prompt("Ingese cantidad"));
  // let cantidadPedida = 0;

  if (agregarProducto == 1 && producto1.stock > 0) {
    let hayExistencias = producto1.stock - cantidad;
    //alert(hayExistencias);
    if (hayExistencias < 0) {
      alert("Excede stock disponible. Solo hay: " + producto1.stock);
    } else {
      carrito.push(producto1);
      producto1.restoStock(cantidad);
      //cantidadPedida += cantidad;
      producto1.acumuloCantidad(cantidad);
      //alert(producto1.acumuloCantidad);
      // producto1.calculoSubtotal();
      // alert(producto1.calculoSubtotal);
      //alert(producto1.stock);

      // alert(cantidadPedida);
      suma += producto1.precio * cantidad;
      //alert(suma);
    }
  } else if (agregarProducto == 2 && producto2.stock > 0) {
    let hayExistencias = producto2.stock - cantidad;
    //alert(hayExistencias);
    if (hayExistencias < 0) {
      alert("Excede stock disponible. Solo hay: " + producto2.stock);
    } else {
      carrito.push(producto2);
      producto2.restoStock(cantidad);
      //alert(producto1.stock);
      producto2.acumuloCantidad(cantidad);
    }
    suma += producto2.precio * cantidad;
  } else if (agregarProducto == 3 && producto3.stock > 0) {
    let hayExistencias = producto3.stock - cantidad;
    //alert(hayExistencias);
    if (hayExistencias < 0) {
      alert("Excede stock disponible. Solo hay: " + producto3.stock);
    } else {
      carrito.push(producto3);
      producto3.restoStock(cantidad);
      producto3.acumuloCantidad(cantidad);
      //alert(producto1.stock);
    }
    suma += producto3.precio * cantidad;
  } else if (agregarProducto == 4 && producto4.stock > 0) {
    let hayExistencias = producto4.stock - cantidad;
    //alert(hayExistencias);
    if (hayExistencias < 0) {
      alert("Excede stock disponible. Solo hay: " + producto4.stock);
    } else {
      carrito.push(producto4);
      producto4.restoStock(cantidad);
      producto4.acumuloCantidad(cantidad);
      //alert(producto1.stock);
      suma += producto4.precio * cantidad;
    }
  } else {
    alert("Producto no existente o fuera de stock");
  }
  //console.log(agregarProducto + " Suma total del pedido $" + suma);
}
console.log(carrito);
//console.log("Productos en tu carrito : \n" + JSON.stringify(carrito, null, 0) + "\n"
//);

const productosComprados = carrito.map(
  (el) =>
    "Nombre: " +
    el.nombre +
    " por $" +
    el.precio +
    " Cantidad: " +
    el.cantidadPedida +
    "\n"
);
console.log("Productos comprados \n" + productosComprados);

if (suma) {
  let totalConIva = suma * 1.21;
  console.log(
    "Total sin iva: $" + suma + "\n" + "Total con iva: $" + totalConIva
  );
}
