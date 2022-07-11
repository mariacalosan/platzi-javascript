# curso de Javascript basico de platzi
## ¿Que es Javascript?
Es un lenguaje interpretado, orientado a objetos, débilmente tipado y dinámico.

¿Débilmente tipado?

Se pueden hacer operaciones entre tipos distintos de datos

este lenguaje nace con la necesidad de generar dinamismo en las páginas web y que a su vez los usuarios y las empresas pudieran interactuar unos con otros.

# Elementos de un Lenguaje de Programación: Variables, Funciones y Sintaxis
para este son solo dos componentes principales 
## 1) Data que guardamos en la memoria 
estos datos se convierten en tipos de datos para estos datos se pueden utilizar numeros, strings objetos, y arrays
## 2) tarea o funciones que haremos con esa data 
las tareas son las funciones que se van crear con los tipos de datos


***imagen de los tipos de datos***

<img src="https://static.platzi.com/media/user_upload/CU01112E_1-f9d2b6fc-f60c-4bf4-a61d-6bf9df36b268.jpg" width="40%">

# Variables
```son la representación de algún lugar en memoria que va a guardar información que nosotros o el usuario le va a suministrar```

Dentro de JavaScript tenemos tres formas de declarar una variable las cuales son: var, const y let.

Var: Era la forma en que se declaraban las variables hasta ECMAScript 5. Casi ya no se usa porque es de forma global y tiene las siguientes características:

o Se puede reinicializar: osea todas las variables se inicializan, por ejemplo:
Var pokemonType = ‘electric’ entonces reinicializar es:
Var pokemonType = ‘grass’ osea la misma variable con diferentes datos el último dato predomina.
o Se puede reasignar: osea la variable ya inicializada le reasignamos otro valor por ejemplo: inicializamos la variable: Var pokemonType = ‘electric’ ahora la reasignamos pokemonType = ‘grass’ ya no va var
o Su alcance es función global: osea inicializamos la variable, pero la podemos llamar desde cualquier bloque (una llave abierta y una cerrada {}) pero hay que tener mucho cuidado con ello ya que puede haber peligro, no es recomendable usar VAR.

const y let es la forma en que se declaran las variables a partir de ECMAScript 6,

const: sirve para declarar variables que nunca van a ser modificadas:
o No se puede reinicilizar: es una const única no puede haber otra inicializada con el mismo nombre. const pokemonType = ‘electric’ no puede haber:
const pokemonType = ‘grass’
o No se pude re asignar: una vez que la hayamos inicializado no la podemos reasignar solo con su nombre: const pokemonType = ‘electric’ no puede ejecutarse:
pokemonType = ‘grass’
o No es inmutable: osea no puede cambiar con objetos:

Let: Son variables que pueden ser modificadas, se pueden cambiar:
o No se puede reinicilizar: es una const única no puede haber otra inicializada con el mismo nombre. let pokemonType = ‘electric’ no puede haber:
let pokemonType = ‘grass’
o Se puede reasignar: Osea la variable ya inicializada le reasignamos otro valor por ejemplo: inicializamos la variable: let pokemonType = ‘electric’ ahora la reasignamos pokemonType = ‘grass’
o Su contexto de es bloque: Solo funciona dentro de un bloque {}, fuera de ello no.

# funciones
hay dos tipos de funciones que son las

1) ## funciones declarativas
En las funciones declarativas, utilizamos la palabra reservada function al inicio para poder declarar la función:
```function saludar(nombre) {
	console.log(`Hola ${nombre}`);
}

saludar('Maria Camila');
```

2) ## Expresión de función
En la expresión de función, la declaración se inicia con la palabra reservada var, donde se generará una variable que guardará una función anónima.

```
    var nombre = function(nombre){
    console.log(`Hola ${nombre}`)
}

nombre(Maria Camila);
```
imagen del hostin explicacion  funciones 
<img src="https://static.platzi.com/media/user_upload/Captura2-ab004c41-0f20-4404-b04f-75b9e3e474ac.jpg">