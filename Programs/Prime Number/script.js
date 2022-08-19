// 16. To find wheather the number is prime or not 

let n=parseInt(prompt("Enter the number to find whether it is prime or not")),w;
let a=0;
for (let i = 2; i <=n/2 ; i++) {
    if (n%i==0) {
    //     console.log(n ,"is not a prime number");
    //     document.write(n,"is not a prime number");  
        a=1;
        break;
    } 
}
if(a==0){
    console.log(n,"Is a prime number");

}else {
    console.log(n,"Is a not a prime number");

}
