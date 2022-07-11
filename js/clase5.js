// Crear objeto con 3 propiedades
const mascota ={
  nombre: "tyrone",
  raza: "pitbull",
  edad: "5 años perrunos",
}

// hacen console.log de esas 3 propiedades
alert(mascota);
alert(mascota.nombre);
alert(mascota.raza);
alert(mascota.edad);

// crean una funcion constructora para otro objeto

function jerbos (nombre,papasHumanos,estado){
  this.nombre=nombre;
  this.papasHumanos=papasHumanos;
  this.estado=estado;
}
// crean una instancia de esa función constructora
const jerbo = new jerbos ("test","maria camila","muy feliz y pachoncito");
alert(jerbo)

class Mascota{
  constructor(nombre,raza,edad,estado,papasHumanos,adoptado){
    this.nombre=nombre;
    this.raza=raza;
    this.edad=edad;
    this.estado=estado;
    this.papasHumanos=papasHumanos;
    this.adoptado=adoptado;
  }
  presentar (){
    alert("mi mascota es "+this.nombre);
  }
}

const mascotas1 = new Mascota("jest","jerbil",2,"muy intenso y mimado","maria camila y carlos","ya esta adoptado");
mascotas1.presentar();

const mascotas2 = new Mascota("rest","jerbil",2,"muy intenso y mimado","","no esta adoptado");
mascotas2.presentar();

if (mascotas1.adoptado == "ya esta adoptado"){
  alert(mascotas1.adoptado);
}
else{
  alert("hola mi nombre es"+ mascotas1.nombre,"y estoy en adopcion");
}

if (mascotas2.adoptado == "ya esta adoptado"){
  alert(mascotas2.adoptado);
}
else{
  alert("hola mi nombre es"+ mascotas2.nombre,"y estoy en adopcion");
}
