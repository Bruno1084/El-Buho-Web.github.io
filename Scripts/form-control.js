window.addEventListener('load', ()=> {
const form = document.querySelector('#formularioContacto')
const fName = document.getElementById('name');
const fNumber = document.getElementById('number');
const fEmail = document.getElementById('email');
const fMessage = document.getElementById('message');

form.addEventListener('click', (e) => {
    e.preventDefault();
    validaCampos();
})

function validaCampos(){
    var name = fName.value.trim();
    var number = fNumber.value.trim();
    var email = fEmail.value.trim();
    var message = fMessage.value.trim();
 

    if(!name){
        validaFalla(fName, 'Campo vacío');
    }else{
        validaOk(fName);
    }


    if(!email){
        validaFalla(fEmail, 'Campo vacío');            
    }else if(!validaEmail(email)) {
        validaFalla(fEmail, 'El e-mail no es válido');
    }else {
        validaOk(fEmail);
    }

    
     var numberEj = number.replace(/\D/g, '');         
     if (numberEj.length !== 10) {
        validaFalla(fNumber, 'Debe contener 10 numeros obligatorios');
      }
     if(!numberEj){
         validaFalla(fNumber, 'Campo vacío');
     } else {
         validaOk(fNumber);
     }

     if (message.length > 60) {
        validaFalla(fMessage, 'No puede exceder más de 60 caracteres');
        alert(s);
     }
     if(!message) {
        validaFalla(fMessage, 'Campo vacío');
    } else {
        validaOk(fMessage);
    }
    if (
        form.querySelectorAll('.controlador-form ok').length ===
        form.querySelectorAll('.controlador-form').length
      ){
        form.submit();
      }
}

const validaFalla = (input, msje) => {
    const formControl = input.parentElement
    const aviso = formControl.querySelector('p')
    aviso.innerText = msje
    formControl.className = 'controlador-form falla'
}
const validaOk = (input, msje) => {
    const formControl = input.parentElement
    formControl.className = 'controlador-form ok'
}

const validaEmail = (email) => {
    return /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(email);        
}

})