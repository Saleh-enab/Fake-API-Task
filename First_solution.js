//In this solutions i'm using Promise.all() method in addition to async/await function

const getPrice = async (url, amount) => {

    const product = await fetch(url);
    const productJSON = await product.json();
    const price = productJSON.price;
    return price * amount;
}

let res = 0;
const promise1 = getPrice('https://fakestoreapi.com/products/1', 3)
const promise2 = getPrice('https://fakestoreapi.com/products/4', 4)
const promise3 = getPrice('https://fakestoreapi.com/products/3', 5)

Promise.all([promise1, promise2, promise3]).then(prices => {
    for (let price of prices) {
        res += price
    }
    console.log(res)
})