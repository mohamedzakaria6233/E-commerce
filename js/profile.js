var nav1=document.querySelector(".ul1")
var nav2=document.querySelector(".ul2")
var acc=document.querySelector(".acc")
if(localStorage.getItem("name")){
    console.log("yes")
    nav1.remove();
    nav2.style.display="flex";
    acc.innerHTML=localStorage.getItem("name")
}
///////////////////////////////////////////////////
var logo=document.querySelector(".logo")
logo.addEventListener("click",hom);
function hom(){
    window.location="index.html"
}
///////////////////////////////////////////////////
var name=localStorage.getItem("name");
var email=localStorage.getItem("email");
var password=localStorage.getItem("password")
var myphoto=localStorage.getItem("myphoto")

var em=document.querySelector(".email")
var nam=document.querySelector(".name")
var ok=document.querySelector(".ok")

var ph3=document.querySelector(".ph3")
console.log(name,email,password)
var image="not image";
function show(){
    var myphoto=localStorage.getItem("myphoto")

    var x= `
    <img src="${myphoto}" class="phh" pr="phot" >
    `;
    ph3.innerHTML=x;
    nam.innerHTML=name;
    em.innerHTML=email;

    
}
show()

//////////////////////////////////////////////
$(document).ready(function(){
    $(".editinfo").hide()
    $(".editinfo p").hide()
    $(".editinfo input").hide()

    $(".inform p").click(function(){
        var s=$(this).attr("pr");
        ss="."+s;
        $(".editinfo").hide()
        $(".editinfo p").hide()
        $(".editinfo input").hide()
        $(".editinfo").show();
        $(ss).show(2000);
        $(".ok").show(2000);
        })
        $(".inform img").click(function(){
            var s=$(this).attr("pr");
            ss="."+s;
            $(".editinfo").hide()
            $(".editinfo").hide()
            $(".editinfo input").hide()
            $(".editinfo").show();
            $(ss).show(2000);
            $(".ok").show(2000);
            })
    
        $(".ok").click(function(e){
            e.preventDefault();
            if($(".newnam").val()!==""){
               name=$(".newnam").val();
               localStorage.setItem("name",name);
            }
            if($(".newem").val()!==""){
                email=$(".newem").val();
                localStorage.setItem("email",email)
            }
            if($(".newpass").val()!==""){
                password=$(".newpass").val();
                localStorage.setItem("password",password)
            }
            localStorage.setItem("myphoto",image)
            $(".newnam").val("")
            $(".newem").val("")
            $(".newpass").val("")
            show();
            window.alert("sucessfully.......")
        })

})//end jQuery....
/////////////////////////////////////////////////
var photo=document.querySelector(".phot");
console.log(photo)
photo.addEventListener("change",uploadphoto)
function uploadphoto(){
    var file=this.files[0];
    if((file.type=="image/jpeg" || file.type=="image/png")&& file.size<10*1024*1024){
        var reader=new FileReader();
        reader.readAsDataURL(file)
        reader.onload=function(){
            image=reader.result;
        }
    }
}



// photo.addEventListener("change",uploadphoto);
// function uploadphoto(){
//     var file=this.files[0]; // علشان يختار الصورة اللي حددتها 
//     if((file.type=="image/jpeg" || file.type=="image/png") && file.size<10*1024*1024){
//         var reader= new FileReader()
//         reader.readAsDataURL(file);
//         reader.onload=function(){
//         image=reader.result;
  
//         }

//     }
//     else{
//         window.alert("you should add photo only less than 2 megabyte")
//     }
 
// }
