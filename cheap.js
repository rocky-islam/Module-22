const phones = [
    {name: 'samsung', camera: 12, storage: '32gb', price: 42000, color: 'silver'},
    {name: 'iphone', camera: 12, storage: '32gb', price: 92000, color: 'silver'},
    {name: 'xaomi', camera: 12, storage: '32gb', price: 32000, color: 'silver'},
    {name: 'oppo', camera: 12, storage: '32gb', price: 28000, color: 'silver'},
    {name: 'realme', camera: 12, storage: '32gb', price: 20000, color: 'silver'},
    {name: 'nokia', camera: 12, storage: '32gb', price: 45000, color: 'silver'}
]

let cheapestPhone = phone =>{
    let cheapest = phone[0]
    for (let i = 0; i < phone.length; i++) {
        const element = phone[i];
        // console.log(element.price);
        if(element.price < cheapest.price){
            cheapest = element;
            
        }
    }
    return cheapest;
}

const myPhone = cheapestPhone(phones);
console.log(myPhone);