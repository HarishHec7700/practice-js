let num,sum=0,rem,n;
num=parseInt(prompt("Enter the number to find its sum of itself"));
n= parseInt(num);
for (let i =num; i >0; i=i/10) {
    i=parseInt(i);
    rem=i%10;
    sum+=rem;
}
// sum=parseInt(sum);
console.log(sum);