/* Initialize Variables
var closePopup = document.getElementById("popupclose");
var overlay = document.getElementById("overlay");
var popup = document.getElementById("popup");
var button = document.getElementById("button");

// Close Popup Event
closePopup.onclick = function() {
  overlay.style.display = 'none';
  popup.style.display = 'none';
};

// Show Overlay and Popup
button.onclick = function() {
  overlay.style.display = 'block';
  popup.style.display = 'block';
}

// Desactivar scroll en modal
document.querySelector('button').addEventListener('click', e => {
  document.body.classList.add('no-scroll');
});

document.querySelector('popupclose').addEventListener('click', e =>{
  document.body.classList.remove('no-scroll');
})
*/
