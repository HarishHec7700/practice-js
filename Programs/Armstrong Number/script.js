// 31. To find the given number is Armstrong or not (153= 1**3+ 5**3+ 3**3)

let num,sum=0,rem,n;
num=parseInt(prompt("Enter the number to find its sum of itself"));
n= parseInt(num);
for (let i =num; i >0; i=i/10) {
    i=parseInt(i);
    rem=i%10;
    sum=sum+rem**3;
}
console.log(sum);
if(sum==num)
    console.log("Given number is an Armstrong Number ");
else 
console.log("Given number is  not an Armstrong Number ");