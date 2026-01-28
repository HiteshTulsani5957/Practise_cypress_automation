// r[i]
// }
// }
// return a
// }
// console.log(largest([4,5,6,77,65]));
// function largest(arr){
// let a=arr[0]//4
// for(let i=1;i<arr.length;i++){
// if(a<arr[i]){
//     a=ar
// function rev(str){
//     return str.split("").reverse().join("")
// }
// console.log(rev("hitesh"));

// function rev(str){
//     let a= str.split("").reverse().join("")
//     return a===str
// }
// console.log(rev("GFG"));


 function lar(arr){
    let a=arr[0]
    for(let i=1;i<arr.length;i++){
        if(a<arr[i]){
            a=arr[i]
        }
    }
    return a;
 }
 console.log(lar([2,3,4,55,66]));
 