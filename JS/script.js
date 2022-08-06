// // Area of circle

// let r = parseInt(prompt("Give radius"));
// let a,bi;
// bi=22/7;
// a=bi*(r**2);
// console.log(a);
// alert(a);
// document.write(a);

// // Area of triangle

// let base,height,at;
// base=parsefloat(prompt("Give the base value"));
// height=parsefloat(prompt("Give the height value"));
// at=0.5*base*height;
// console.log(at);
// alert(at);
// document.write(at);

// Simple Interest

// let p,n,rate,si;
// p=parseFloat(prompt("Give the Principal amount"));
// n=parseFloat(prompt("Give the number of years "));
// rate=parseFloat(prompt("Give the rate of intrest"));
// si= (p*n*rate)/100;
// console.log(si);
// document.write(si);

// Square , Cube

// let sq,cu, ab=parseFloat(prompt("Give the number to find its square and cube "));
// sq=ab**2;
// cu=ab**3;
// console.log(sq);
// document.write(sq);
// console.log(cu);
// document.write(cu);

// Swap of two numbers 

// let x=parseFloat(prompt("Give the  first number")),y=parseFloat(prompt("Give the secound number")),z;
// console.log(x);
// document.write("x=",x);
// console.log(y);
// document.write("y=",y);
// z=x;x=y;y=z;
// console.log(x);
// document.write("x=",x);
// console.log(y);
// document.write("y=",y);

// To calculate the total and average 

// let num=[],n,s=0,sum = 0,i,j;
// n=parseInt(prompt("Enter the total terms"))
// for (i = 0; i < n; i++) {
//     num[i]= parseFloat(prompt("Enter the numbers"));
// }
// for (j = 0; j < n; j++) {
//     sum=sum+num[j];
//     // s=sum;    
// }
// avg=sum/n;
// console.log(sum);
// document.write("the sum is ",sum);
// console.log(avg);
// document.write("the average is ",avg);

// Find the given number is even or odd

// let gn=parseInt(prompt("Enter the Number to find its odd or even"));
// if(gn%2==0){
//     document.write("The given number is an EVEN number");
// }
// else{
//     document.write("The given number is an ODD number");

// }

// To check whether the number is positive or negative

// let gn=parseInt(prompt("Enter the Number to find its positive or negative"));
// if(gn<0){
//     document.write("The given number is positive number");
// }
// else if(gn==0){
//     document.write("The given number is Zero");
// }
// else{
//     document.write("The given number is negative number");
// }

// To find the number is divisible by 5 
// let gn=parseInt(prompt("Enter the number to find whether is divisible by 5 or not"));
// if(gn%5==0){
//     document.write("The given number is divisible by 5");
// }
// else{
//     document.write("The given number is an not divisible by 5");

// }

// To find the number is a multiple of 7 

// let gn2, gn1=parseInt(prompt("Enter the number to find whether is multiple of 7 or not"));
// gn2=parseInt(prompt("Enter the number to find whether is multiple of 7 or not"));
// if(gn1%7==0){
//     document.write("The given number is multiple of 7");
// }
// else{
//     document.write("The given number is an not multiple of 7");
// }
// if(gn2%7==0){
//     document.write("The given number is multiple of 7");
// }
// else{
//     document.write("The given number is an not multiple of 7");
// }
// if(gn1<gn2){
//     console.log("The biggest number is ",gn2);
//     document.write("The biggest number is ",gn2);

// }else if(gn1==gn2){
//     console.log("The biggest number is ",gn2);
//     document.write("The biggest number is ",gn2);
// }
// else{
//     console.log("The biggest number is ",gn1);
//     document.write("The biggest number is ",gn1);
// }

// To arrange in ascending and descending order for 3 numbers 

// let a,b,c;
// a=parseInt(prompt("Enter the first number"));
// b=parseInt(prompt("Enter the secound number"));
// c=parseInt(prompt("Enter the third number"));

// if (a<b) {
//     if (b<c) {
//         console.log(c);
//         document.write("Third number is greater");
//     } else {
//         console.log(b);
//         document.write("Secound number is greater");
//     }
// } else if(a<c) {
//     console.log(c);
//     document.write("Third number is greater");
// } else{
//     console.log(a);
//     document.write(" First number is greater");
// }

// Factorial of a number

// let fac=1,num,i;
// num=parseInt(prompt("Enter the Number to find its Factorial"));
// for (i = num; i>=1; i--) {
//     fac=fac*i;    
// }
// console.log(fac);
// document.write(fac);

// Fibnocci series for n terms 

let i,n,f,fb;
fb=f=0;
n=parseInt(prompt("Enter the nth term u need to find fibanocci series"));
for (let i = 1; i<n; i++) {
    fb=i+(i+1);
    // f=fb;
    console.log(fb);
    document.write(fb);
}
