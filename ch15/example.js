//PRIMERA FORMA
const d1 = document.getElementById("abc");
d1.addEventListener("click", (e) => {
  e.target.innerHTML = "Clicked";
  setTimeout(() => {
    e.target.innerHTML = "Presioname";
  }, 1000);
});

//SEGUNDA FORMA
const ler = document.getElementById("abc2");
ler.addEventListener(
  "click",
  function (event) {
    // presentar la cuenta de clicks realizados sobre el elemento con id "prueba"
    console.log(this === event.target);
    this.innerHTML = "Conteo de Clicks: " + event.detail;
  },
  false
);

ler.addEventListener("mouseout", function (eve) {
  if (eve) {
    console.log("its finish");
    setTimeout(() => {
      eve.target.innerHTML = "mouse sin hacer click";
    }, 1000);
  }
});

// TERCERA con jquery
$(document).ready(function () {
  alert("Bienvenido al ejemplo");
});

//device dependant events mousedown
//device independemet click
//api “waiting,” “playing,” “seeking,”
//document load STATE-CHANGE EVENT
document.addEventListener("DOMContentLoaded", () => {});
console.log("el documento se ha cargado");

//USER INTERFACE EVENT LIKE FOCUS

// event object
// event propagation
