function add(num1, num2){
    if(typeof num1 !== 'number' || typeof num2 !== 'number'){
        return('Please enter the number');
    }else{

        return num1 + num2;
    }
}

let result = add(12,'32');
console.log("Your Result is = ",result);