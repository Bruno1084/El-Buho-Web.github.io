const sec_product= document.getElementById('product-page');
const producto= JSON.parse(localStorage.getItem("producto"));


function createPageCard(){
    var prod_container= document.createElement('div');
    prod_container.setAttribute('id', 'prod-container');
    prod_container.setAttribute('class', 'container row');
    prod_container.innerHTML=
    `
        <div class="prod-img col-md-7">
            <div class="prod-img-container">
            <img src="${producto.imagen}" alt="productoImagen" class="img-fluid">
                
            </div>
        </div>
        <div class="prod-text col-md-5">
            <h3>${producto.nombre}</h3>
            <h2 class="price">$${producto.precio}</h2>
            <form action="./Scripts/form-control.js">
                <div class="formGroup">
                    <select name="fTalla" id="fTalla">
                        <option value="">Talla</option>
                        <option value="S">S</option>
                        <option value="M">M</option>
                        <option value="L">L</option>
                        <option value="XL">XL</option>
                    </select>
                    <select name="fCantidad" id="fCantidad">
                        <option value="">Cantidad</option>
                        <option value="1">1</option>
                        <option value="2">2</option>
                        <option value="3">3</option>
                        <option value="4">4</option>
                        <option value="5">5</option>
                    </select>
                </div>
                <div class="container-descripcion">
                    <h6>Descripción del producto</h6>
                    <p>${producto.descripción}</p>
                </div>
                <div id="container-buttons" class="formGroup row">
                    <button type="button" id="btnCompra" class="col-sm-3" onclick="showModal()">Comprar</button>
                    <button type="button" id="btnCarrito" class="col-sm-3">Añadir al Carrito</button>                        
                </div>
            </form>
        </div>
    `
    sec_product.appendChild(prod_container);
}

function showModal(){
    const modal= document.getElementById('modal');
    modal.style.display= 'flex';
}

createPageCard();
