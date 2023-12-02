// this is where all products will be stored
let items = []
//object created manually
let object = {
    id : 1,
    item:"Nike",
    description:"better",
    price: 800
}
//function to create objects
function Product(id,item,description,price,url) {
    this.id = id,
    this.item = item,
    this.description= description,
    this.price = price,
    this.url = url
}
//second item created using product
let product1 = new Product(1, "nike", "lblblb", 2500, "erwerwerwer"),

let product2 = new Product(2,'adidas','better than better',700,`data:image/jpeg;base64,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`),
//pushing items into array
items.push(object,product)
//sets the array in local storage
localStorage.setItem('storage',JSON.stringify(items))
//sets the array from localstorage
items= JSON.parse(localStorage.getItem('storage'))
function remove(position) {
    items.splice(position,1)
    fav()
    window.onload()
}
let table = document.querySelector('table')
window.onload = function matthew() {
    
    let products = items.map((item,index) => {
        console.log(item);
        console.log(index);
        return `
        <tr>
        <td>${index + 1}</td>
        <td>${item.item}</td>
        <td>R${item.price}</td>
        <td><img src="${item.url}" alt=""></td>
        <td><button>Edit</button></td>
        <td><button class ='delete'>Delete</button></td>
        </tr>
        `
    })
    table.innerHTML =products.join('')
}
function favourite() {
    localStorage.setItem('storage',JSON.stringify(items))
    items= JSON.parse(localStorage.getItem('storage'))
}

table.style.backgroundColor = 'lawngreen'

let deleteButton = document.querySelector('.delete')
function remove(position,callback) {
    items.splice(position,1)
    favourite()
    callback()
}
table.addEventListener('click', function(){
    if (event.target.classList.contains('delete')) {
        remove(event.target.value,this.matthew())
        // alert(event.target.value)
    }
})

// function one() {

// }
// function two(callback) {
//     callback()
// }

// two(one())