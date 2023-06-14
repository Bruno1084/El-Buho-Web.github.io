const container_cards= document.getElementsByClassName('container-cards');
const card= document.getElementsByClassName('card');

let todos_los_ProductosCarousel= [];

const mostarProductos=(producto)=>{
    container_cards[0].innerHTML=""
    if(producto.length > 0){
        producto.forEach(producto => {
            const card_Producto= document.createElement('div');
            card_Producto.setAttribute('class', 'card card-1');
            card_Producto.innerHTML +=
            `
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
                    <p class="fs-4" id="price">${producto.precio}</p>
                    <p class="text-success" id="discount">${producto.descuento}</p>
                </div>
            </div>
            <a class="bg-danger text-center text-decoration-none" href="#">
            <p href="" class="card-button text-white">Comprar</p> 
            </a>
            `
            card_Producto.appendChild()



        });
    }

}




getCartaProductos=()=>{
    fetch("https://bruno1084.github.io/TpMaquina-DW.github.io/Json/Productos-Carousel.json")
    .then(res => res.json())
    .then(res => {
        todos_los_ProductosCarousel= res;
    })
}

getCartaProductos();