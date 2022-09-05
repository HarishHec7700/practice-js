function printOut(num){
    if(num==""){
        document.getElementById("output-value").innerText=num;
    }
    else{
        document.getElementById("output-value").innerText=num_str(num);

    }
}
function printHis(num){
    document.getElementById("history-value").innerHTML=num;
}
function getHis(num){
    document.getElementById("history-value").innerText
}
function getOut(){
    document.getElementById("output").innerText
}
function clr(){
    document.getElementById("output").innerHTML="";
}
function bckspc(){
    data_bckspc=getOut();

}
function str_num(x){
    str=x;
    str=Number(str.replace(/,/g,""));
    console.log(str);
    return str;
}
function num_str(y){
    y=y.toLocaleString("en");
    return y;
}
function num_inp(){
    var num_out=str_num(getOut());
    num_out.innerHTML=this.id;
    // if(num_out!=''){
    //     num_out=num_out+this.id;
    //     printOut((num_out));
    // }
}
document.getElementById("clear").addEventListener("click",clr);
printOut(7.66);

num_obj=document.getElementsByClassName("number");
// console.log(num_obj);
for(i=0;i<num_obj.length;i++)
    document.getElementById(i).addEventListener("click",num_inp);

// clr();
y=num_str("2,000");