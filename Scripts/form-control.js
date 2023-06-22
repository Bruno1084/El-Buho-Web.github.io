
window.addEventListener('load', ()=> {
    const form = document.querySelector('#formularioContacto')
    const fName = document.getElementById('name');
    const fNumber = document.getElementById('number');
    const fEmail = document.getElementById('email');
    const fMessage = document.getElementById('message');
    
    form.addEventListener('click', (e) => {
        var verificado = validaCampos();
        if(verificado != 4){
            e.preventDefault();
        }else{
            formEnviado();
        }
  
    });

    window.addEventListener('input', ()=> {
        var verificado = validaCampos();
    })
    
    function validaCampos(){
        var name = fName.value.trim();
        var number = fNumber.value.trim();
        var email = fEmail.value.trim();
        var message = fMessage.value.trim();
        var verificado = 0;
     
    
        if(!name){
            validaFalla(fName, 'Campo vacío');
        }else{
            validaOk(fName);
            verificado ++;
        }
    
    
        if(!email){
            validaFalla(fEmail, 'Campo vacío');            
        }else if(!validaEmail(email)) {
            validaFalla(fEmail, 'El e-mail no es válido');
        }else {
            validaOk(fEmail);
            verificado ++;
        }
    
        
        var numberEj = number.replace(/\D/g, '');         
        
        if(!numberEj){
            validaFalla(fNumber, 'Campo vacío');
        }if (numberEj.length < 10 || numberEj.length >10) {
            validaFalla(fNumber, '10 numeros obligatorios');
        }else {
            validaOk(fNumber);
            verificado ++;
        }
    
        if (message.length > 60) {
            validaFalla(fMessage, 'No puede exceder más de 60 caracteres');
        }
        if(!message) {
            validaFalla(fMessage, 'Campo vacío');
        }else {
            validaOk(fMessage);
            verificado ++;
        }

        return verificado;
    }
    
    const validaFalla = (input, msje) => {
        const formControl = input.parentElement
        const aviso = formControl.querySelector('p')
        aviso.innerText = msje
        formControl.className = 'controlador-form falla'
        isValid= false;
    }
    const validaOk = (input, msje) => {
        const formControl = input.parentElement
        formControl.className = 'controlador-form ok'
        isValid= true
    }
    
    const validaEmail = (email) => {
        return /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(email);        
    }
    
    })