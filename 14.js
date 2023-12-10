const myPrice = [
    {
        courseName: "SRE",
        price: 500
    },
    {
        courseName: "SDA",
        price: 100
    },
    {
        courseName: "Cal",
        price: 200
    },
    {
        courseName: "IS",
        price: 700
    },
    {
        courseName: "Web",
        price: 800
    },
]


const priceToPay = myPrice.reduce((acc, myPrice) => {
    console.log(`Accumulate: ${acc} and current Value: ${myPrice.price}`)
    return acc + myPrice.price
}, 0)

console.log(`You have to pay: ${priceToPay}`)