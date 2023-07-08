const shoppingCart = [
    {name: 'shoe', price: 3200, quantity: 5},
    {name: 'shirt', price: 2000, quantity: 3},
    {name: 'pant', price: 1500, quantity: 2},
    {name: 'belt', price: 900, quantity: 4}
]

const totalCost = products =>{
    let sum = 0;
    for( let i = 0; i < products.length; i++){
        let product = products[i];
        console.log(product.price, product.quantity);
        let total = product.price * product.quantity;
        // console.log(total);
        sum = sum + total
    }
    return sum;
}

const expense = totalCost(shoppingCart)
console.log('Total sum is = ', expense);