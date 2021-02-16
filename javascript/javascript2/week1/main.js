console.log("Script loaded");

const products = getAvailableProducts();

function renderProducts(products) {
    
    for (i = 0; i < products.length; i++) {
        const li = document.createElement('li');
        const getUl = document.getElementById('filterList');
        getUl.appendChild(li);
    
        const hedder = document.createElement('h3');
        const price = document.createElement('p');
        const rate = document.createElement('p');
        hedder.innerText = products[i].name;
        price.innerText = 'Price: ' + products[i].price;
        rate.innerText = 'Rating: ' + products[i].rating;

        li.appendChild(hedder);
        li.appendChild(price);
        li.appendChild(rate);
    }
};

renderProducts(products);
