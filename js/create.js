var title=document.querySelector(".ti");
var desc=document.querySelector(".de");
var size=document.querySelector(".se")
var ok=document.querySelector(".ok");
var photo=document.querySelector(".photo")
var product=JSON.parse(localStorage.getItem("allproducts"));


ok.addEventListener("click",q)
var image="not photo";
function q(e){
    e.preventDefault();
    var g=product.length;
    product.push({image:image,id:++g,title:title.value,size:size.value,desc:desc.value,isMe:"yes"})
    localStorage.setItem("allproducts",JSON.stringify(product))
    console.log(product)
    alert("creating sucessfully.............")
}

photo.addEventListener("change",uploadphoto);
function uploadphoto(){
    var file=this.files[0]; // علشان يختار الصورة اللي حددتها 
    if((file.type=="image/jpeg" || file.type=="image/png") && file.size<100*1024*1024){
        var reader= new FileReader()
        reader.readAsDataURL(file);
        reader.onload=function(){
        image=reader.result;
  
        }

    }
    else{
        window.alert("you should add photo only less than 2 megabyte")
    }
 
}
