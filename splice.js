let friend = [12, 23, 25, 35, 65, 96,95,12,75,85];
let item = [30, 20, 10]
let cut = friend.splice(2, 5, ...item);
console.log(cut);
console.log(friend);