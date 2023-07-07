let friend = ['salam', 'kamal', 'habib', 'salam', 'hamim', 'salam'];

let uniqueName = name =>{
    let unique = []
    for(let i=0; i<name.length; i++){
        let element = name[i];
        console.log(element);

        if(unique.includes(element) === false){
            unique.push(element)
        }
    }
    return unique;
}

let singleName = uniqueName(friend);
console.log(singleName);