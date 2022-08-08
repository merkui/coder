suma = 0;
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
}
