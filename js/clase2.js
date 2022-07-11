alert("bienvenido a OBRADOR");

alert("Que pizza desearias comprar el dia de hoy");

alert("tenemos mixta y peperonie");

let usuario = prompt("ingresa por favor la pizza que deseas comprar");

let mixta = 8000;
let peperonie = 6000;

if (usuario == "mixta") {
    alert("tu pizza tiene un costo de : " + mixta)
}
else if (usuario == "peperonie") {
    alert("tu pizza tiene un costo de : " + peperonie)
}
else {
    alert("no has elegido una pizza")
}

