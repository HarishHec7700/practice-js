 To print the multiplication table of the given number 

let n=parseInt(prompt("Enter the number to display its multiplication table "));
let m= parseInt(prompt("Enter the last number or times u need in multiplication table "));
console.log("The multiplication table of ",n,"is");
document.write("The multiplication table of ",n,"is/n");

for (let i = 1; i <=m; i++) {
    console.log(n,"*",i,"=",n*i);
    document.write(n,"*",i,"=",n*i);
}