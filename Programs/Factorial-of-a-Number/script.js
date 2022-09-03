// 12. Factorial of a number

let fac=1,num,i;
num=parseInt(prompt("Enter the Number to find its Factorial"));
for (i = num; i>=1; i--) {
    fac=fac*i;    
}
console.log(fac);
document.write(fac);
