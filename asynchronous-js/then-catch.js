fetch(`https://dummyjson.com/products/1`)
    .then(function (res) {
        // console.log(res);
        return res.json()
    }).then((data) => {
        console.log(data);
    })