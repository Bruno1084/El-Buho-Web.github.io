// Obtener referencias a los elementos del formulario
var nombreCompletoInput = document.getElementById('nombre_completo');
var dniInput = document.getElementById('dni_del_titular');
var numeroTarjetaInput = document.getElementById('cc-number');
var fechaNacimientoInput = document.getElementById('cc-exp');
var codigoSeguridadInput = document.getElementById('cc-cvc');
var botonEnviar = document.getElementById('fPagar');

botonEnviar.disabled=true;

// Agregar eventos de escucha para validar los campos en tiempo real
window.addEventListener('input', (e)=> {
    botonEnviar.disabled = true;
    var verificado = validaCampos();

    if(verificado != 5){
        e.preventDefault();
    }else{
      botonEnviar.disabled = false;
      botonEnviar.addEventListener('click', formCompraEnviado);

    }
})

function validaCampos(){
    var nombreCompleto = nombreCompletoInput.value.trim();
    var dni = dniInput.value.trim();
    var numeroTarjeta = numeroTarjetaInput.value.trim();
    var fechaNacimiento = fechaNacimientoInput.value.trim();
    var fechaNacimiento = fechaNacimientoInput.value.trim();
    var codigoSeguridad = codigoSeguridadInput.value.trim();
    var verificado = 0;
    

      if (nombreCompleto.length <= 0) {
        validaFalla(nombreCompletoInput, 'Campo vacío');
      } else {
        validaOk(nombreCompletoInput);
        verificado ++;
      }
      

  
      if(dni.length > 8 || dni.length < 8){
        validaFalla(dniInput, 'El DNI debe tener 8 numeros');
      } else{
        validaOk(dniInput);
        verificado++;
      }
      
      
      if (numeroTarjeta.length <= 0) {
        validaFalla(numeroTarjetaInput, 'Campo vacío');
      } if (!/^\d{16}$/.test(numeroTarjeta)) {
        validaFalla(numeroTarjetaInput, 'El DNI no puede contar con más de 8 numeros');
      } else {
        validaOk(numeroTarjetaInput);
        verificado ++;
      }


      if (fechaNacimiento.length < 0) {
        validaFalla(fechaNacimientoInput, 'Campo vacío');
      } if (!/^(0[1-9]|1[0-2])\/(0[1-9]|[1-9][0-9])$/.test(fechaNacimiento)) {
        validaFalla(fechaNacimientoInput, 'El formato de fecha no es valido');
      } else {
        validaOk(fechaNacimientoInput);
        verificado ++;
      }


      if (codigoSeguridad.length < 0) {
        validaFalla(codigoSeguridadInput, 'Campo vacío');
      }if (!/^\d{3}$/.test(codigoSeguridad)) {
        validaFalla(codigoSeguridadInput, 'El código debe tener 3 numeros');
      } else {
        validaOk(codigoSeguridadInput);
        verificado ++;
      }



    var contenedor_forma = document.getElementById('contenido-col1');
    contenedor_forma.classList.add('form-group');
    contenedor_forma.classList.add('col-md-6');
    var contenedor_forma = document.getElementById('contenido-col2');
    contenedor_forma.classList.add('form-group');
    contenedor_forma.classList.add('col-md-6');

    


    return verificado;
}

const validaFalla = (input, msje) => {
    const formControl = input.parentElement
    const aviso = formControl.querySelector('span')
    aviso.innerText = msje
    formControl.className = 'controlador-form falla'
}
const validaOk = (input) => {
    const formControl = input.parentElement
    formControl.className = 'controlador-form ok'
    const aviso= formControl.querySelector('span');
    aviso.innerText= ''
}


