

async function getProduct() {
    // console.log("kld");
    try {
        const response = await fetch(`https://dummyjson.com/products/1`);
        // console.log("dddd");
        const data = await response.json()
        // console.log('xxxdxxxx');
        console.log(data);
        return response
    } catch (error) {
        console.log(error);
    }

}

getProduct()

// console.log("hello");