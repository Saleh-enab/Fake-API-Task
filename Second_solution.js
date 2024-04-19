//In this solution i'm using async/await functions only

const getPrice = async (url, amount) => {

    const product = await fetch(url);
    const productJSON = await product.json();
    const price = productJSON.price;
    return price * amount;
}

let result = 0;
const promise1 = getPrice('https://fakestoreapi.com/products/1', 3)
const promise2 = getPrice('https://fakestoreapi.com/products/4', 4)
const promise3 = getPrice('https://fakestoreapi.com/products/3', 5)

const addingPrices = async () => {
    result += await promise1;
    result += await promise2;
    result += await promise3;

    console.log(result);
}

addingPrices();