//  DOM manipulation in Buttons

function tickle() {
    // alert(" U have tickled me , I'm angry");
    let y=document.getElementById("head1").innerHTML="Don't U Dare to Tickle me ";
    alert(y);
}
// DOM manipulation in Text box
function check_entry(){
    let username_value=document.getElementById("user-name");
    if(username_value.value.trim()==""){
        document.getElementById("user-name-span").insertAdjacentHTML= "Please enter the User name"; 
        getElementById("user-name").style.border="red 3px solid";
    }
}
function passconfirm(){
    let pass=document.getElementById("password").value;
    let passcon=document.getElementById("confirm-password").value;
    if(pass==passcon){
        document.getElementById("pass-stat").innerHTML= "The given Passwords matches";
    }else{
        document.getElementById("pass-stat").innerHTML= "The given Passwords doesn't matches";
    }
}
// DOM manipulation in Radio box
function getstat(){
    let rdmale=document.getElementById("rd-male");
    let rdfemale=document.getElementById("rd-female");
    let rdothers=document.getElementById("rd-others");


    if(rdmale.checked==true)
        alert("U have selected the :"+ rdmale.value,"option");
    else if(rdfemale.checked==true)
        alert("U have selected the :"+ rdfemale.value,"option");
    else if(rdothers.checked==true)
        alert("U have selected the :"+ rdothers.value,"option");
    else
        alert("U have not selected anything")        

}
// DOM manipulation in Select box
function uptstat(){
    var selectbx= document.getElementById("cars");
    alert("U have Selected the"+selectbx.options[selectbx.selectedIndex].value);
}

// DOM manipulation by getElementByClassName 

function chng(){
    let para= document.getElementsByClassName("manicls");
    // para[2].style.color="green";
    for(x=0;x<para.length;x++)
        para[x].style.color="blue";    
}

// Form Validations

function checkstat(){
    let user_name= document.getElementById("uname").value;
    let pass= document.getElementById("pass").value;

    if(user_name.trim()=="" || pass.trim()==""){
        alert("U have not entered any Entries")
        return false;
    }
    else{
        return true;
    }
}

// Short matrimonial Site

function prev(){
    let prev_b= document.getElementById("matriimg").src="../../Source/professionalpics.jpg";
}
function next(){
    let next_b= document.getElementById("matriimg").src="../../Source/professionalpics2.jpg";
}
// Mouseover and Mouseout Image change
function newimg(){
    let new_img= document.getElementById("chngimg").src="../../Source/professionalpics2.jpg";
}
function oldimg(){
    let new_img= document.getElementById("chngimg").src="../../Source/professionalpics.jpg";
}

// Form validitation with password condition (atleast 6 characters)

function pswrd_confirm(){
    let psswrd= document.getElementById("pswrd").value;
    let c_passwrd=document.getElementById("c_pswrd").value;
    if(psswrd==c_passwrd){
        document.getElementById("pswrd_stat").innerHTML="The passwords Matches";
        document.getElementById("c_pswrd").style.border=" rgba(255, 255, 255, 0.555) solid 2px";

    }else{
        document.getElementById("pswrd_stat").innerHTML="The passwords doesn't Matches";
        document.getElementById("c_pswrd").style.border="red solid 2px";
    }
}
function chkstat(){
    let usrname=document.getElementById("usr_name").value;
    let psswrd= document.getElementById("pswrd").value;
    if(usrname.trim()==""){
        alert("Please enter the entries");
        document.getElementById("usr_name").style.border="red solid 2px";
        return false;
    }else if(psswrd.trim()==""){
        alert("Please enter the Password");
        return false;
    }else if(psswrd.trim().length <6){
        alert("The password should have more than 6 letters");
        document.getElementById("pswrd").style.border="red solid 2px";
        return false;
    }
    else
        return true;

}

// Regular Expression 
// Regular expressions are patterns used to match character combinations in strings. In JavaScript, regular expressions are also objects. 
// Methods of regular Expression are test(),split(),replace(),replaceAll(),exec(),search(),match(),matchAll()
function validate(){
    email= document.getElementById("email").value;
    regx= /@/;
    if(regx.test(email)){
        document.getElementById("vali_info").innerHTML="Valid Email";    
    }
    else
        document.getElementById("vali_info").innerHTML="Invalid Email";    

}

// Regular Expression in alternate method 
// regx= /[a-z]12/; Here the first char can be anything between a-z and secound and third char shoulc be 12
regex= RegExp([a-n])
function validated(){
    e_mail= document.getElementById("e_mail").value;
    regex= /[a-n]19/;
    if(regex.test(e_mail)){
        document.getElementById("valid_info").innerHTML="Valid Email";    
    }
    else
        document.getElementById("valid_info").innerHTML="Invalid Email";    

}
