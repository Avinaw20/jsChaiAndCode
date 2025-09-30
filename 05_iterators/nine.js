
const myNums = [1, 2, 3]

const myTotal = myNums.reduce(function (acc, currval) {
    console.log(`acc: ${acc} and currval: ${currval}`);
    return acc + currval
}, 0)


//.reduce function two values leta hai 1st accumulator, 2nd currentValue ...
// initially accumulator ko pta nhi hota ki kya value leni hai to wo 1st time initial value hee le leta hai

//in arrow function
// const myTotal = myNums.reduce( (acc, curr) => acc+curr, 0)  // 0 is initial value

console.log(myTotal);


const shoppingCart = [
    {
        itemName: "js course",
        price: 2999
    },
    {
        itemName: "py course",
        price: 999
    },
    {
        itemName: "mobile dev course",
        price: 5999
    },
    {
        itemName: "data science course",
        price: 12999
    },
]

const priceToPay = shoppingCart.reduce((acc, item) => acc + item.price, 0)

console.log(priceToPay);
