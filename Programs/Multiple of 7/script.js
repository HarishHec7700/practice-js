//10. To find the number is a multiple of 7 

let gn2, gn1=parseInt(prompt("Enter the number to find whether is multiple of 7 or not"));
gn2=parseInt(prompt("Enter the number to find whether is multiple of 7 or not"));
if(gn1%7==0){
    document.write("The given number is multiple of 7");
}
else{
    document.write("The given number is an not multiple of 7");
}
if(gn2%7==0){
    document.write("The given number is multiple of 7");
}
else{
    document.write("The given number is an not multiple of 7");
}
if(gn1<gn2){
    console.log("The biggest number is ",gn2);
    document.write("The biggest number is ",gn2);

}else if(gn1==gn2){
    console.log("The biggest number is ",gn2);
    document.write("The biggest number is ",gn2);
}
else{
    console.log("The biggest number is ",gn1);
    document.write("The biggest number is ",gn1);
}
