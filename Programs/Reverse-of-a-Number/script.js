let n=parseInt(prompt("Enter the number to be reversed")),rem;
console.log("The given number is",n);
document.write("The given number is ",n);
while(n>0){
    n=parseInt(n);
    rem=n%10;
    n=n/10;    
    if(n>0)
    {                          
    console.log(rem);
    document.write(rem);
    }
}