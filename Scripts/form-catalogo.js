const bt_Categorias= document.getElementsByName('fCategorias');

const filtrarCategoria=()=>{
  var productos = Array.from(document.getElementsByClassName('card'));
  bt_Categorias.forEach(categoria =>{
    if(categoria.checked){
      categoria.parentElement.classList.add('active');
    }else{
      categoria.parentElement.classList.remove('active');
    }
  })
  filtarProductos(productos);
}

const filtarProductos=(productos) =>{
  if(bt_Categorias[1].checked){
    productos_filtrados= todos_los_productos.filter(productos => productos.categoria === bt_Categorias[1].getAttribute("data-filter"));
  }
  if(bt_Categorias[2].checked){
    productos_filtrados= todos_los_productos.filter(productos => productos.categoria === bt_Categorias[2].getAttribute("data-filter"));
  }
  if(bt_Categorias[3].checked){
    productos_filtrados= todos_los_productos.filter(productos => productos.categoria === bt_Categorias[3].getAttribute("data-filter"));
  }
  if(bt_Categorias[4].checked){
    productos_filtrados= todos_los_productos.filter(productos => productos.categoria === bt_Categorias[4].getAttribute("data-filter"));
  }
  if(bt_Categorias[5].checked){
    productos_filtrados= todos_los_productos.filter(productos => productos.categoria === bt_Categorias[5].getAttribute("data-filter"));
  }
  if(bt_Categorias[6].checked){
    productos_filtrados= todos_los_productos.filter(productos => productos.categoria === bt_Categorias[6].getAttribute("data-filter"));
  }
  createCard(productos_filtrados);
}

bt_Categorias[0].addEventListener("click", ()=> {
  if(bt_Categorias[0].checked){
    createCard(todos_los_productos);
  }
})

