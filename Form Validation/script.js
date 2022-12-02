let nameEle,reg_emailEle,reg_passEle,reg_conPassEle,signEle;
nameEle=document.getElementById("reg-inp-user");
reg_emailEle=document.getElementById("reg-inp-email");
reg_passEle=document.getElementById("reg-inp-pass");
reg_conPassEle=document.getElementById("reg-inp-conPass");
signEle=document.getElementById("reg-sign-in");

signEle.addEventListener("click",(e)=>{
    e.preventDefault();
    let uname,email,pass,conPass;
    uname=nameEle.value;
    pass=reg_passEle.value;
    email=reg_emailEle.value;conPass=reg_conPassEle.value;

    if((uname)&&(pass.length>6)&&(pass===conPass)){
        window.location.href="./login.html";
    }else{
        alert("Please Enter the correct Details");
    }
});
