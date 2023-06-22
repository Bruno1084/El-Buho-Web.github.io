function formEnviado(){
    Swal.fire({
        title: "¡Mensaje Enviado!",
        icon:"success"

    })

}

function formCompraEnviado(){
    var ticketCompra = generarTicket();
    Swal.fire({
        title: "Tu compra fue realizada",
        icon:"success",
        text:"Tú Ticket de compra es: "+ ticketCompra
    })
}

function carritoAlert(){
    Swal.fire({
        title:"Este producto fue agregado al carrito",
        icon:"success"
    })
}

function generarTicket() {
    let ticket = Math.floor(Math.random() * 1000000);
    return ticket;
  }