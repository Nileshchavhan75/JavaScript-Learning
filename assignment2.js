let arr = [5,2,4,8,2,12,2,14,2];
let n = 2;
console.log(arr);

for(let i = 0; i < arr.length;i++){
    if(arr[i] == n){
        arr.splice(i,1)
    }
}
console.log(arr);
console.log("_____________________________________________");


let a = 287152;
let count = 0;
while(a > 0){
    count++;
    a = Math.floor(a / 10);
}
console.log(count);


console.log("_____________________________________________");

let d = 287152;
let sum =0;
let copy = d;
while(copy > 0){
    let digit = copy % 10;
    sum += digit;
    copy = Math.floor(copy/10);
}
console.log(sum);


console.log("_____________________________________________");


let fact = 5;
let factorial = 1;
for(let i = 1; i<=fact; i++){
    factorial *= i;
}
console.log(factorial)


console.log("_____________________________________________");
let array = [2,5,10,4,2,7,1,9];
let largest = 0;
for(let i = 0; i<array.length; i++){
    if(array[i] > largest){
        largest = array[i];
    }
}
console.log(largest);