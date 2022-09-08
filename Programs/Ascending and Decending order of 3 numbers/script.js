// 20. Ascending and descending order of given three numbers

let a= parseFloat(prompt("Enter the first value")), b= parseFloat(prompt("Enter the secound value")), c= parseFloat(prompt("Enter the third value"));
if((a>b) && (a>c)){
    if(b>c){
        console.log("The ascending order is ",c,",",b,",",a);
        console.log("The decending order is ",a,",",b,",",c);
        document.write("The ascending order is ",c,",",b,",",a);
        document.write("The decending order is ",a,",",b,",",c);
    } 
    else{
        console.log("The ascending order is ",b,",",c,",",a);
        console.log("The decending order is ",a,",",c,",",b);
        document.write("The ascending order is ",b,",",c,",",a);
        document.write("The decending order is ",a,",",c,",",b);
    
    }   
}
if((b>a) && (b>c)){
    if(a>c){
        console.log("The ascending order is ",c,",",a,",",b);
        console.log("The decending order is ",b,",",a,",",c);
        document.write("The ascending order is ",c,",",a,",",b);
        document.write("The decending order is ",b,",",a,",",c);
    } 
    else{
        console.log("The ascending order is ",a,",",c,",",b);
        console.log("The decending order is ",b,",",c,",",a);
        document.write("The ascending order is ",a,",",c,",",b);
        document.write("The decending order is ",b,",",c,",",a);
    
    }   
}
if((c>b) && (c>a)){
    if(b>a){
        console.log("The ascending order is ",a,",",b,",",c);
        console.log("The decending order is ",c,",",b,",",a);
        document.write("The ascending order is ",a,",",b,",",c);
        document.write("The decending order is ",c,",",b,",",a);
    } 
    else{
        console.log("The ascending order is ",b,",",a,",",c);
        console.log("The decending order is ",c,",",a,",",b);
        document.write("The ascending order is ",b,",",a,",",c);
        document.write("The decending order is ",c,",",a,",",b);
    
    }   
}