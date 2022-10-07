
// To find a string is an palindrome or not 

let a=prompt("Enter the first string"),i,j,x=0;
let al= a.length;
for (i=0;i<al/2;i++){
   if(a[i]==a[al-1-i]){
       
   }
   else
       x++;
}
if(x)
   console.log("The given string is not a palindrome");
else
   console.log("The given string is a palindrome");