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
    alert("U have Selected the"+selectbx.options[selectedIndex].value);
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