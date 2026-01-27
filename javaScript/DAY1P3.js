function largest(arr){
let a=arr[0]//4
for(let i=1;i<arr.length;i++){
if(a<arr[i]){
    a=arr[i]
}
}
return a
}
console.log(largest([4,5,6,77,65]));

