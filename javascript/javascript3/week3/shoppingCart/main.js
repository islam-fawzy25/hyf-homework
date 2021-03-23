//Shopping cart using Classes
//Get some elements to invoke function on it 
const input = document.getElementById('searchBar')
const main = document.querySelector('main')
const button = document.getElementById('button')
const section = document.querySelector('section')
const header = document.querySelector('header')

class Product {
  constructor(name, price) {
    this.name = name;
    this.price = price;
  }
}

class ShoppingCart {
  constructor() {
    this.products = [];
  }

  addProduct(product) {
    // Implement functionality here
    this.products.push(product)
  }

  removeProduct(product) {
    // Implement functionality here
    const filtresProductes = this.products.filter(item => item.name != product)
    this.products = filtresProductes
  }

  searchProduct(productName) {
    // Implement functionality here
    const searchedProduct = this.products.filter(item => { return item.name.toLowerCase() == productName.toLowerCase() }) //
    this.products = searchedProduct
    this.renderProducts()
    this.getTotal()
  }

  getTotal() {
    // Implement functionality here
    const total = this.products.map(item => item.price)
      .reduce((sum, value) => sum + value)
    const h3 = document.createElement('h3')
    section.appendChild(h3)
    h3.innerText = 'Total= ' + total + ' .Kr'
  }

  renderProducts() {
    // Implement functionality here
    this.products.forEach(item => {
      const h4 = document.createElement('h4')
      const p = document.createElement('p')
      main.appendChild(h4)
      main.appendChild(p)
      h4.innerText = item.name
      p.innerText = item.price + ' .Kr'
    })
  }

  getUser(userName) {
    // Implement functionality here
    return new Promise((resolve, reject) => {
      fetch('https://jsonplaceholder.typicode.com/users/1')
        .then(response => response.json())
        .then(data => {
          console.log(data.name);
          resolve(data.name)
          userName = data.name

          const user = document.createElement('h2')
          header.appendChild(user)
          user.innerText = 'User: ' + userName
          this.renderProducts()
          this.getTotal()
        })
    })

  }
}

const shoppingCart = new ShoppingCart();
const flatscreen = new Product("flat-screen", 5000);
shoppingCart.addProduct(flatscreen);
// Creat some products 
const car = new Product('Toyota', 50000)
const smarTv = new Product('Samsung A21', 8000)
const mobile = new Product('Iphone 11', 10000)
const leaneCart = new ShoppingCart() // Creat leanne shopping cart 
// Add some products to user shopping  cart 
leaneCart.addProduct(car)
leaneCart.addProduct(smarTv)
leaneCart.addProduct(mobile)
// leaneCart.removeProduct('Toyota')
// console.log(leaneCart);
// leaneCart.getTotal()
// leaneCart.renderProducts()
leaneCart.getUser()

//Search Bar Part 
button.addEventListener('click', function () {
  main.innerText = ''
  section.innerText = ''
  leaneCart.searchProduct(input.value)

})



