const bt_Categorias= document.getElementsByName('fCategorias');

const filtrarCategoria=()=>{
  bt_Categorias.forEach(categoria =>{
    if(categoria.checked){
      categoria.parentElement.classList.add('active');
    }else{
      categoria.parentElement.classList.remove('active');
    }
  })

}





/*
const filtrarCategoria=(productos)=>{
  var productos_filtrados=[];

  if(bt_Categorias[1].checked){
    productos_filtrados = productos.filter(producto => producto.fCategorias === bt_Categorias[1].value)
  }
  if(bt_Categorias[2].checked){
    productos_filtrados = productos.filter(producto => producto.fCategorias === bt_Categorias[2].value)
  }
  if(bt_Categorias[3].checked){
    productos_filtrados = productos.filter(producto => producto.fCategorias === bt_Categorias[3].value)
  }
  if(bt_Categorias[4].checked){
    productos_filtrados = productos.filter(producto => producto.fCategorias === bt_Categorias[4].value)
  }
  if(bt_Categorias[5].checked){
    productos_filtrados = productos.filter(producto => producto.fCategorias === bt_Categorias[5].value)
  }
  if(bt_Categorias[6].checked){
    productos_filtrados = productos.filter(producto => producto.fCategorias === bt_Categorias[6].value)
  }
  createCard(productos_filtrados);
}
*/