suma = 0;
cantidadPedida = 0;

//Class Producto
class Producto {
  constructor(id, nombre, precio, stock, imagen, cantidadPedida) {
    this.id = Number(id);
    this.nombre = nombre.toUpperCase();
    this.precio = parseFloat(precio);
    this.stock = Number(stock);
    this.imagen = imagen;
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

let producto1 = new Producto(1, "Jabon", 10, 1, "img/no-image.jpg");
let producto2 = new Producto(2, "Shampoo", 20, 100, "img/no-image.jpg");
let producto3 = new Producto(3, "Crema Enjuague", 30, 0, "img/no-image.jpg");
let producto4 = new Producto(4, "Toalla", 40, 100, "img/no-image.jpg");

const productos = [producto1, producto2, producto3, producto4];

function mostrarProductos() {
  let html = "";
  for (let i = 0; i < productos.length; i++) {
    html =
      html +
      `<div class="tarjeta">
        <div><img class="imagen" src=${productos[i].imagen} /></div>
        <h2> ${productos[i].nombre}</h2>
        <p>Precio: ${productos[i].precio}</p>
        <div><small>Stock: ${productos[i].stock}</small>
        <small>Id: ${productos[i].id}</small> </div>
        <button id="btnAgregar">Agregar al Carro</button> 
        </div>`;

    document.getElementById("contenedor").innerHTML = html;
  }
}

mostrarProductos();
