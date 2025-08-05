const main = document.getElementById("main")
let productsArray = []

async function getProducts() {
    const response = await fetch('https://dummyjson.com/products')
    const data = await response.json()
    // console.log(data);
    productsArray = data.products
    // console.log(productsArray);
    renderProducts(productsArray)
}

getProducts()

function renderProducts(productsArray) {
    // console.log(productsArray);
    productsArray.forEach(function (product, index) {
        console.log(product);
        main.innerHTML = main.innerHTML + `
        <div>
        <img src='${product.thumbnail}' alt='${product.title}'/>
        <h2><a href="product.html?id=${product.id}">${product.title}</a></h2>
        <span>${product.category}</span>
        <br>
        <span> Rs. ${product.price * 100}</span>
        <button>Buy</button>
        </div>
        `
    })
}

