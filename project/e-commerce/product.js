const params = new URLSearchParams(window.location.search)
const id = params.get("id")
console.log(id);

const productSection = document.getElementById("productSection")
const reviewSection = document.getElementById("reviewSection")
getSingleProduct(id)


async function getSingleProduct(id) {
    const response = await fetch(`https://dummyjson.com/products/${id}`)
    const product = await response.json()
    console.log(product);
    productSection.innerHTML = `
    <div>
        <img src='${product.thumbnail}' alt='${product.title}'/>
        ${getAllImages(product.images)}
        <h2><a href="product.html?id=${product.id}">${product.title}</a></h2>
        <span>${product.category}</span>
        <br>
        <span> Rs. ${product.price * 100}</span>
        <button>Buy</button>
        </div>
    `
    getReview(product.reviews)
}

async function getReview(reviews) {
    console.log(reviews);
    let clutter = ''
    reviews.forEach(function (review, index) {
        clutter += `
        <div>
        <span>${review.reviewerName}</span>
        <h4>${review.comment}</h4>
        <p>Rating : ${review.rating}<p>
        <span>${review.date}<span>
        </div>
        `
    })

    reviewSection.innerHTML = clutter
}


function getAllImages(images) {
    console.log(images);
    let clutter = ''
    images.forEach((image, index) => {
        clutter += `
        <img src="${image}" alt="image" height="100px"/>
        `
    })
    console.log(clutter);
    return clutter
}