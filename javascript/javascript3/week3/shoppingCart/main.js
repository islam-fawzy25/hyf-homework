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
     const filtresProductes= this.products.filter(item=>item.name != product)
    this.products = filtresProductes
    }
  
    searchProduct(productName) {
      // Implement functionality here
  
    }
  
    getTotal() {
      // Implement functionality here
    const total= this.products.map(item=>item.price).reduce((sum,value)=>sum+value)
    console.log(total);
    }
  
    renderProducts() {
      // Implement functionality here
      this.products.forEach(item=>{
        const body= document.querySelector('body')
        const h4= document.createElement('h4')
        const p= document.createElement('p')
        body.appendChild(h4)
        body.appendChild(p)
        h4.innerText=item.name
        p.innerText=item.price
      })

    }
  
    getUser() {
      // Implement functionality here
    }
  }
  
  const shoppingCart = new ShoppingCart();
  const flatscreen = new Product("flat-screen", 5000);
  shoppingCart.addProduct(flatscreen);

                const car =new Product('Toyota',50000)
  const smarTv = new Product('Samsung A21',8000)
  const mobile = new Product('Iphone 11',10000)

  const islamCart = new ShoppingCart()
  islamCart.addProduct(car)
islamCart.addProduct(smarTv)
islamCart.addProduct(mobile)
islamCart.removeProduct('Toyota')
  console.log(islamCart);
  islamCart.getTotal()
islamCart.renderProducts()  
  /*
  
  Part 1
Create the functionality for the ShoppingCart class.

addProduct should add a product to the products array.
removeProduct should remove a product from the products array.
getTotal should get the total price of the products in the shoppingcart.
renderProducts should render the products to html. You decide what to show and how.
searchProduct should return an array of product that match the productName parameter
getUser should return a promise with the data from this api:
 https://jsonplaceholder.typicode.com/users/1
  */