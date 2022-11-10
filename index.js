//Parametros por defecto
function add(x = 23.3, y=0){

    return x + y
}

console.log(add())

//Objetos
const user = {
    name: 'carlos',
    lastname: 'lopez',
    age: 23,
    address: {
      country: 'Mexico',
      city: 'cdmx',
      street: 'panaba'  
    },
    friends: ['brenda', 'edith'],
    active: true,
    sendMail(){
        return 'sending email....'
    }
}

console.log(user.address.city)
console.log(user.friends)
console.log(user.active)
console.log(user.sendMail())

//Shorthand property names
const pc = 'laptop'
const price = 3000

const newProduct = {
    pc,
    price

}

console.log(newProduct)

//Manipulacion del DOM (Document Object Model)
const title = document.createElement('h1')
title.innerText = 'Hola mundo desde JS'

const button = document.createElement('button')
button.innerText = 'click'


//Event Handlers
button.addEventListener('click', function(){
    title.innerText = 'Texto actualizado con JS'
    alert('se realizo un click')
})

document.body.append(title)
document.body.append(button)

//Destructuring
//Destructuring de objetos
const userDes = {
    name: 'Brenda',
    age: '22'
}

function printInfo(user){
    const {name, age} = user

    console.log(name, age);
    return '<h1>Hola '+name+'</h1>'
}

console.log(printInfo(userDes))

document.body.innerHTML = printInfo(userDes)

//Funciones anonimas
//Funcion sin nombre
console.log(function (){
    return 'Starting...'
}())

const background2 = 'red'
const color = 'white'

//return en funciones
const isAuthorized = true

const button2 = document.createElement('button')
button2.innerText = 'click me'
//String literals
button2.style = `background: ${isAuthorized ? background2 : 'blue'}; color: ${color}`



button2.addEventListener('click', () => {
    if(isAuthorized){
        return alert('esta autorizado')
    }
        
    alert('no esta autorizado')
    
})

document.body.append(button2)

//arrow functions

/*
const add = (x,y) => {
    return x + y
}
*/

//inline arrow functions
const showText = () => 'Hola mundo'
const showNumber = () => 22;
const showBoolean = () => true;
const showArray = () => [1,2,3]
const showObject = () => ({name: 'Brenda'})

console.log(showText())
console.log(showNumber())
console.log(showBoolean())
console.log(showArray())
console.log(showObject())

//array methods
const nombres = ['brenda','edith','carlos']
const newNombres = ['karim', 'juan', 'paco']

for (let index = 0; index < nombres.length; index++) {
    const element = nombres[index];
    console.log(element)
}

nombres.forEach(function(nombre){
    console.log(nombre)
})

const newNames = nombres.map(function(nombress){
    return `Hola ${nombress}`
})

const nameFound = nombres.find(function(nombresss){
    if(nombresss === 'brenda'){
        return nombresss
    }
})

const nameFilter = nombres.filter(function(nombrees){
    if(nombrees !== 'carlos'){
        return nombrees
    }
})

console.log(newNames)
console.log(nameFound)
console.log(nameFilter)
console.log(nombres.concat(newNombres))

//Spread operator
console.log([...nombres,...newNombres])

const usuario = {
    name: "Brenda",
    lastname: "Perez"
}

const direccion = {
    street: "main street 123123",
    city: "cdmx"
}

const userInfo = {
    ...usuario,
    ...direccion
}

console.log(userInfo)

//ecmascript modules
import {addFunction, multiply,active,points,titleAdd} from './add.js'

console.log(addFunction(20,12))
console.log(multiply(3,4))
console.log(active,points,title)

//optional chaining
const person = {
    name: 'Brenda',
    address: {
        city: 'cdmx'
    },
    location: {}
}

console.log(person.location?.city)

//Async / await 

const ul = document.createElement('ul')



// fetch('https://jsonplaceholder.typicode.com/posts')
//     .then(
//         function(response){
//             return response.json()
            
//         }
//     ).then(
//         function(data){
//             console.log(data)
//             data.forEach(function(post ){
//                 const li = document.createElement('li')
//                 li.innerText = post.title
//                 ul.append(li)
//             })
//             document.body.append(ul);
//         }
//     )


async function loadData(){
    const response = await fetch('https://jsonplaceholder.typicode.com/posts')
    const data = await response.json()
    data.forEach(function(post ){
        const li = document.createElement('li')
        li.innerText = post.title
        ul.append(li)
    })
    document.body.append(ul);
}


loadData()
console.log('linea 2')