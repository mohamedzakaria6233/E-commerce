//variables  
var email=document.querySelector(".em");

var password=document.querySelector(".pass");
var submit=document.querySelector(".send");
var logo=document.querySelector(".logo")
var forget=document.querySelector(".g");
var sh=document.querySelector(".in");
///////////
submit.addEventListener('click',event3)
function event3(e){
    e.preventDefault();
    if(email.value==localStorage.getItem("email") && password.value==localStorage.getItem("password")){
        setTimeout(eventt,2000)
    }
    else{
        sh.style.display="block"
    }
    function eventt(){
        window.location="index.html";
        var q=confirm("Do you Want to save password");
        if(q==true){
            alert("successful");
        }
    }
}



////////
logo.addEventListener("click",hom);
function hom(){
    window.location="index.html"
}
console.log("hallo");

forget.addEventListener("click",eve);
function eve(){
    window.open("forget.html" , "Password" , "width=500 height=500");
}