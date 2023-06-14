const bt_Categorias= document.getElementsByName('fCategorias');

const form = document.querySelector('#form-catalogo');
form.addEventListener('change', (event) => {
  const active = form.querySelector('.active');
  if (active) active.classList.remove('active');
  event.target.parentElement.classList.add('active');
});