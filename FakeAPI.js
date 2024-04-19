// const getPrice = async (url, amount) => {

//     const product = await fetch(url);
//     const productJSON = await product.json();
//     const price = productJSON.price;
//     return price * amount;
// }

// let res = 0;
// const promise1 = getPrice('https://fakestoreapi.com/products/1', 3)
// const promise2 = getPrice('https://fakestoreapi.com/products/4', 4)
// const promise3 = getPrice('https://fakestoreapi.com/products/3', 5)

// Promise.all([promise1, promise2, promise3]).then(prices => {
//     for (let price of prices) {
//         res += price
//     }
//     console.log(res)
// })


const getPrice = async (url, amount) => {

    const product = await fetch(url);
    const productJSON = await product.json();
    const price = productJSON.price;
    return price * amount;
}

let res = 0;
Promise.all(
    [getPrice('https://fakestoreapi.com/products/1', 3).then((price1) => { res += price1 }),
    getPrice('https://fakestoreapi.com/products/4', 4).then((price2) => { res += price2 }),
    getPrice('https://fakestoreapi.com/products/3', 5).then((price3) => { res += price3 })]
).then(console.log(res))

