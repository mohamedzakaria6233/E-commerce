var product=JSON.parse(localStorage.getItem("allproducts"));
var i=localStorage.getItem("saveidd");
var chosen=product.find(function(item){
    return item.id==i
})
console.log(product)
var title=document.querySelector(".ti");
var desc=document.querySelector(".de");
var size=document.querySelector(".se")
var ok=document.querySelector(".ok");
var photo=document.querySelector(".photo")
console.log(chosen)
console.log(chosen.title)
title.value=chosen.title;
desc.value=chosen.desc;
size.value=chosen.size;

var image="not photo";
ok.addEventListener("click",edit)
function edit(e){
    e.preventDefault()

    product[i-1].title=title.value;
    product[i-1].desc=desc.value;
    product[i-1].size=size.value;
    product[i-1].image=image;
    localStorage.setItem("allproducts",JSON.stringify(product))
    window.alert("Edit Your product sucessfully........")
    setTimeout(window.location="index.html",3000)


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
