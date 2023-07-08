const shoppingCart = [
    {name: 'shoe', price: 3200},
    {name: 'shirt', price: 2000},
    {name: 'pant', price: 1500},
    {name: 'belt', price: 900}
]

const totalCost = products =>{
    let sum = 0;
    for( let i = 0; i < products.length; i++){
        let product = products[i];
        console.log(product.price);
        sum = sum + product.price
    }
    return sum;
}

const expense = totalCost(shoppingCart)
console.log('Total sum is = ', expense);