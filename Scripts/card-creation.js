const container_cards= document.getElementsByClassName('container-cards');
const card= document.getElementsByClassName('card');

const card_Producto= document.createElement('div');
card_Producto.setAttribute('class', 'card card-1');
card_Producto.innerHTML = 
`
<div class="card-imageContainer">
    <img src="./Imgs/Shirt-removebg.png" alt="" id="card-img">
</div>
<div class="card-body border-top">
    <div class="card-heading">
        <a href="" class="text-decoration-none" id="card-tittle">Remera Goddam Saint</a>
    </div>
    <div class="card-text text-muted">
        Lorem ipsum dolor sit amet consectetur.
    </div>
    <div class="card-text d-flex justify-content-around" id="card-prices">
        <p class="fs-4" id="price">$ 13.000</p>
        <p class="text-success" id="discount">15% off</p>
    </div>
</div>
<a class="bg-danger text-center text-decoration-none" href="#">
    <p href="" class="card-button text-white">Comprar</p> 
</a>
`

