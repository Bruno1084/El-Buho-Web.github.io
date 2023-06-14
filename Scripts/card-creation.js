const bt_Categorias= document.getElementsByName('fCategorias');
const contenedor_cartas= document.getElementById("container-cards");
var  todos_los_productos= [];

const createCard=(productos)=> {
  contenedor_cartas.innerHTML= '';
    productos.forEach(producto => {
      const cardProducto = document.createElement('div');
      cardProducto.setAttribute("class", "card")
      cardProducto.innerHTML += `
        <div class="card-imageContainer">
          <img src="${producto.imagen}" alt="" id="card-img">
        </div>
        <div class="card-body border-top">
          <div class="card-heading">
            <a href="" class="text-decoration-none" id="card-tittle">${producto.nombre}</a>
          </div>
          <div class="card-text text-muted">
            ${producto.descripción}
          </div>
          <div class="card-text d-flex justify-content-around" id="card-prices">
            <p class="fs-4" id="price">$ ${producto.precio}</p>
            <p class="text-success" id="discount">${producto.descuento}</p>
          </div>
        </div>
        <a class="bg-danger text-center text-decoration-none" href="#">
          <p href="" class="card-button text-white">Comprar</p> 
        </a>`;
      contenedor_cartas.appendChild(cardProducto);
    });
}

const getCardData=()=>{
  fetch("https://bruno1084.github.io/TpMaquina-DW.github.io/Json/Productos.json")
  .then(res => res.json())
  .then(res => {
    todos_los_productos= res;
    createCard(todos_los_productos);
  })
}


getCardData();

