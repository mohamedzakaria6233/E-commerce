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
var fav=JSON.parse(localStorage.getItem("myfav"))
console.log(fav)
var content=document.querySelector(".product");

var h=fav.map(function(item){
    return `
    <div class="product-icon">
    <img src=${item.image} class="product-image"title="Product">
    <div class="product-item-disc">
        <h2 class="tit">${item.title}</h2>
        <p class="des">best head phone panasonic</p>
         <p class="size">Size : ${item.size}</p>
    </div>
    <div class="product-item-action">
        <button class="add" onclick="remove(${item.id})">Remove from cart</button>

        <i  class="fa-regular fa-heart fa-2x fav"></i> 
    </div>
 </div>  
    `
})
content.innerHTML=h;