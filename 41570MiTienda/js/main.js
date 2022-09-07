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
  /*
  calculoSubtotal() {
    this.precio = this.precio * cantidad;
  }*/

  acumuloCantidad(cantidad) {
    this.cantidadPedida = this.cantidadPedida + cantidad;
  }
}

let producto1 = new Producto(1, "Jabon", 10, 1, "img/no-image.jpg", 0);
let producto2 = new Producto(2, "Shampoo", 20, 100, "img/no-image.jpg", 0);
let producto3 = new Producto(3, "Crema Enjuague", 30, 0, "img/no-image.jpg", 0);
let producto4 = new Producto(4, "Toalla", 40, 100, "img/no-image.jpg", 0);
let producto5 = new Producto(5, "Combo Toallon", 50, 150, "img/no-image.jpg", 0);
let producto6 = new Producto(6, "Combo Shampoo", 60, 100, "img/no-image.jpg", 0);

const productos = [producto1, producto2, producto3, producto4, producto5, producto6];
const carro = [];

function mostrarProductos() {
  let html = "";
  for (let i = 0; i < productos.length; i++) {
    html =
      html +
      `<div class="col">
          <div class="card mb-4 rounded-3 shadow-sm">
            <div class="card-header py-3">
              <h4 class="my-0 fw-normal">${productos[i].nombre}</h4>
            </div>
            <div class="card-body">
              <h1 class="card-title pricing-card-title">$${productos[i].precio}</h1>
                <img style="width:200px;height:200px;" src="${productos[i].imagen}" />
                  <ul class="list-unstyled mt-3 mb-4">
                    <li><small class="text-muted fw-light">stock: ${productos[i].stock}</small></li>
                    <li><small class="text-muted fw-light">sku: ${productos[i].id}</small></li>
                  </ul>
                  <span class="text-muted fw-light" >Cantidad: <input style="margin: 6px;width: 50px;" class="text-muted fw-light" type="number" id="cantidad" value></span>
                <button onclick="agregarAlCarro(${productos[i].id});" type="button" class="w-100 btn btn-lg btn-outline-primary">Comprar</button>
            </div>
          </div>
      </div>`;

  }
    
  document.getElementById("mis_cards").innerHTML = html;
}



function renderCarro() {
  if (carro.length == 0) {
    document.getElementById("carro").innerHTML =
      "<h3>NO HAY NADA EN EL CARRO</h3>";
  } else {
    //let cantidad = document.getElementById("cantidad").value;
    //alert("cantidad")
    let html = "";
    for (let i = 0; i < carro.length; i++) {
      html =
        html +
        `
      <div style="border: 1px solid green;margin: 10px;">
      <p>id: ${carro[i].id}</p>
      <p>nombre: ${carro[i].nombre}</p>
      <p>precio: ${carro[i].precio}</p>
     
      <p>
      <img style="width:200px;height:200px;" src="${carro[i].imagen}" />
      </p>
      <span style="cursor:pointer;" onclick="removeFromCart(${i});">🛒</span>
      </div>
      `;
    }
    document.getElementById("carro").innerHTML = html;
   
    if (carro.length > 0) {
      document.getElementById("hayCarro").innerHTML = "Mostrar carro";
    }
  }
}

mostrarProductos();
renderCarro();



function agregarAlCarro(id) {
  const foundProduct = productos.find((item) => item.id == id);

  

  //alert(JSON.stringify(foundProduct, null, 0));
  carro.push(foundProduct);
  //producto[id].restoStock();
  renderCarro();
}
