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
const userDes = {
    name: 'Brenda',
    age: '22'
}

function printInfo(user){
    return '<h1>Hola '+user.name+'</h1>'
}

console.log(printInfo(userDes))

document.body.innerHTML = printInfo(userDes)

