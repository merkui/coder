//Metodos--------------------
class Producto {
  constructor(nombre, codigo, precio) {
    this.nombre = nombre;
    this.codigo = codigo;
    this.precio = precio;
  }
  aplicarIva(precio) {
    return precio * 1.21;
  }
}

let nombre1 = prompt("Ingrese el nombre del producto: ");
let codigo1 = prompt("Ingrese el codigo del producto: ");
let precio1 = prompt("Ingrese el precio: ");

const producto1 = new Producto(nombre1, codigo1, precio1);
precio_con_iva1 = producto1.aplicarIva(precio1);

alert(
  `Producto ingresado: ${producto1.nombre}- Codigo: ${
    producto1.codigo
  }- Precio: ${producto1.precio}- Precio con iva: ${producto1.aplicarIva(
    precio1
  )} `
);
