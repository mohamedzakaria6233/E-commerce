// variable
var sub=document.querySelector(".sub");
var email=document.querySelector(".u");
var content=document.querySelector(".im")
var vcode=document.querySelector(".ff")
var reset=document.querySelector(".subb")
var n=document.querySelector(".n")
var vc=document.querySelector(".vc")
var freset=document.querySelector(".fff")
var invcode=document.querySelector(".invcode")
var con2=document.querySelector(".imm");
var tam=document.querySelector(".tam")
var res=document.querySelector(".res")
/////////
sub.addEventListener("click",eventt);
function eventt(e){
    e.preventDefault();
    console.log("yes");
    if(email.value==localStorage.getItem("email")){
        email.value="";
        content.innerHTML="A message has been sent to your email";
        content.style.display="block";
        vcode.style.display="flex"
    }
    else{
        email.value="";

        content.innerHTML="The email is wrong";
        content.style.display="block";
    }
}
vc.addEventListener("click",eve2)
function eve2(e){
    e.preventDefault();

    if(invcode.value=="2525"){
        vcode.style.display="none";
        invcode.value="";
        res.style.display="block"
        
        freset.style.display="flex";
        vc.style.display="none";
        con2.style.display="none";


    }
    else{
        invcode.value="";

        con2.style.display="block";


    }
    
}
reset.addEventListener("click",eveee);
function eveee(e){
    e.preventDefault();
    localStorage.removeItem("password");
    localStorage.setItem("password",n.value);
    tam.style.display="block";
    n.value="";

}

