// let arr = [7,9,0,-2];
// let n = 3;
// let ans = arr.slice(0,n);
// console.log(ans);

// let ans = arr.slice(arr.length-3);
// console.log(ans)

// let s = "";

// if(s.length == 0){
//     console.log("String is empty");
// }else{
//     console.log("String is not empty");
// }

let s = "   sakshi   ";
// let n = 3
// if(s[n] == s[n].toLowerCase()){
//     console.log("lower case");
// }else{
//     console.log("not lowerCase")
// }

console.log(`Original String ${s}`);
console.log(`String without space ${s.trim()}`);


let arr = [5,8,12,14,44];
let a = 55;

if(arr.indexOf(a) != -1){
    console.log("Element exits in the array");
}else{
    console.log("element doesn't exits in the array");
}