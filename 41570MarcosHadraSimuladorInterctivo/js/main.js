suma = 0;
let pregunto = prompt("1. Quiere comprar productos? \n Si \n No");
while (pregunto.toLowerCase() !== "no") {
  ingresarProductos();
  pregunto = prompt("2. Quiere comprar un producto mas? \n Si \n No");
}

function ingresarProductos() {
  producto = parseInt( //Usamos el metodo parseInt para trasformar String a Number y que funcione la comparacion de abajo
    prompt("Ingerse un producto\n1. Jabon $10\n2. Shampoo $20")
  );

  if (producto === 1) {
    //Mejor usar "==="
    producto = "Jabon por $10";
    precio = 10;
    suma += precio; //De esta manera es mas corto y hace lo mismo!
  } else if (producto === 2) {
    producto = "Shampoo por $20";
    precio = 20;
    suma += precio;
  }
}

if (suma) {
  let totalConIva = suma * 1.21;
  alert(
    `Suma total del pedido: $${suma} \n Total con iva incluido: $${totalConIva}` //Usando "``" podemos interpolar variables con strings de esta manera!
  );
}
