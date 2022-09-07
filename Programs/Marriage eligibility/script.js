// 22.  To check the marriage eligibility 

let g,age=parseInt(prompt("Enter the age of the groom/ bride "));
g=parseInt(prompt("Type '1' if its groom or '0' if its bride "));
if (g){
    if (age>=21){
        console.log("The groom is ready for marriage");
    }else if (age>35){
        console.log("The groom should hurry up for marriage");
    }else {
        console.log("The groom is  not ready for marriage since he is a minor");
    }