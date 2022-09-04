function calc(){
// let pu_price=document.getElementById("pu_price").innerText,
//     qty_sbx=document.getElementById("quantity"),
//     price,qty;
//     qty=qty_sbx.options[qty_sbx.selectedIndex].value;
// price=pu_price*qty;
// document.getElementById("price").innerHTML=price;     

let pu_price,qty,price;
let rowelement=this.parentNode.parentNode;
// console.log(rowelement);
unit_price_ele=rowelement.getElementsByClassName("pu_price")[0],
// console.log(unit_price_ele);
qty_ele=rowelement.getElementsByClassName("quantity")[0];

pu_price=unit_price_ele.innerText;
pu_price=Number(pu_price.replace(/,/g,'')); // To Replace the the , in string (2,000) to Number  
// console.log(pu_price.typeof());
pu_price=parseInt(pu_price);
qty=qty_ele.options[qty_ele.selectedIndex].value
let price_ele=rowelement.getElementsByClassName("price")[0];
// console.log(qty);
// Formulae
price=pu_price*qty;
price=price.toLocaleString("en");   // To Replace the Number to the format of string (2,000) 
price_ele.innerHTML=price;
}
// document.getElementById("quantity").addEventListener("change",calc);


func_calls=document.getElementsByClassName("quantity");
console.log(func_calls);
for(i=0;i<func_calls.length;i++){
func_calls[i].addEventListener("change",calc);
}
