// const square = (n)=>(n*n);
// console.log(square(5));

// let id = setInterval(()=>{
//     console.log("Hello world");
// },2000);

// setInterval(()=>{
//     clearInterval(id);
// },10000);

let arr = [10,20,30,40,50];

const arrayAverage = (arr)=>{
    let sum = 0;
    for(let i = 0; i<arr.length; i++){
        sum +=arr[i];
    }
    return sum / arr.length;
}


console.log("avarage of array: ",arrayAverage(arr));

const isEven = (n)=>{
    return n % 2 === 0;
} 
console.log("is given number is even = ",isEven(4));