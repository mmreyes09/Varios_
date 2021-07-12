//funciones

function sumar (num) {
    console.log(num)
}
sumar(10)

const sumarDos = (num1 , num2) => (num1 + num2)
const resultado = sumarDos(20, 30)
console.log(resultado)

const mensaje = ()=> 'hola soy ' + nombre

const resultadoDos = mensaje('juanito')
console.log(resultado)

//objetos
const mascota =  {
    nombre:'tom',
    edad:10,
    vivo:true,
    razas:['peludo', 'negro']
}
console.log(mascota)
console.log(mascota.nombre)


//destructuing objeto

const mascota =  {
    nombre:'tom',
    edad:10,
    vivo:true,
    razas:['peludo', 'negro']
}

const nombreMascota = mascota.nombre
const {edad} = mascota
console.log(edad)


//objetos dentro de objetos
const web ={
    nombre:'blueweb',
    link:{
        enlace:'www.blueweb.cl'
    },
    redesSociales:{
        youtube:{
            enlace: 'youtube.com',
            nombre: 'blueweb'
        }
    }
}
console.log(web.redesSociales.youtube.enlace)


const{enlace, nombre}= web.redesSociales.youtube
console.log(enlace)
console.log(nombre)