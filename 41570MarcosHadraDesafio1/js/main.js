let entrada = prompt(
  "Ingrese numero de producto\n1. Jabon $10\n2. Shampoo $20\n3. Crema $30\n4. Toalla $40\n\n Escriba Listo para terminar el pedido."
);
let ingresados = "";
let suma = 0;
while (entrada != "Listo") {
  switch (entrada) {
    case "1":
      entrada = "Jabon por 10";
      alert("Jabon $10 Agregado");
      ingresados += entrada + "\n";
      precio = 10;
      suma = suma + precio;
      break;
    case "2":
      entrada = "Shampoo  por 20";
      alert("Shampoo $20 Agregado");
      ingresados += entrada + "\n";
      precio = 20;
      suma = suma + precio;
      break;
    case "3":
      entrada = "Crema por 30";
      alert("Crema $30 Agregado");
      ingresados += entrada + "\n";
      precio = 30;
      suma = suma + precio;
      break;
    case "4":
      entrada = "Toalla por 40";
      alert("Toalla $40 Agregado");
      ingresados += entrada + "\n";
      precio = 40;
      suma = suma + precio;
      break;
    default:
      alert("Debes indicar un numero del 1 al 4");
  }

  //ingresados += entrada + "\n";
  entrada = prompt(
    "Ingrese numero de producto\n1. Jabon $10\n2. Shampoo $20\n3. Crema $30\n4. Toalla $40\n\n Escriba Listo para terminar el pedido."
  );
}
console.log("Su pedido\n" + ingresados + "\n Total :" + suma);
