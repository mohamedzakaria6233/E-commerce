// variables  
var email=document.querySelector(".em");
var nam=document.querySelector(".name");
var password=document.querySelector(".pass");
var submit=document.querySelector(".send");
var logo=document.querySelector(".logo")

// localStorage.clear();
////////////////////////////
submit.addEventListener("click",event1);
function event1(e){
    e.preventDefault();
    if(nam.value=="" || email.value=="" || password.value==""){
        window.alert("you should fill all details")
    }
    else{
        localStorage.setItem("email",email.value);
        localStorage.setItem("name",nam.value);
        localStorage.setItem("password",password.value);

        setTimeout(ss,2000);
        function ss(){
            window.location="login.html";
            alert("Account successfully created...")
        }
    }
}
console.log("hi")
//////////
logo.addEventListener("click",hom);
function hom(){
    window.location="index.html"
}