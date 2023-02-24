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
var content=document.querySelector(".product")
var product=JSON.parse(localStorage.getItem("allproducts"));
console.log(product)
function show(){
var chosen=product.filter(function(item){
    return item.isMe=="yes"
})
var h=chosen.map(function(item){
    return `
    <div class="product-icon" style="border:${item.isMe=="yes"? "6px green solid":""}">
    <img src=${item.image} class="product-image"title="Product">
    <div class="product-item-disc">
    <a class="tit"  onclick="saveid(${item.id})">${item.title}</a>
    <p class="des">${item.desc}</p>
         <p class="size">Size : ${item.size}</p>
         ${
            item.isMe=="yes" && 
             "<button class='edii' onclick='edit("+
             item.id+
             ")'>Edit product</button>"
         }       
    </div>
    <div class="product-item-action">
        <button class="add" onclick="remove(${item.id})"><i class="fa-solid fa-trash fa-2x"></i> Remove</button>

        <i  class="fa-regular fa-heart fa-2x fav" style="color:${item.liked==true?"red":"white"}" onclick="addtofav(${item.id})"></i> 
    </div>
 </div>  
    `
})
content.innerHTML=h;
function edit(e){
    localStorage.setItem("saveidd",e)
    window.location="edit.html";
}

}
show();

function remove(e){
    
    var chosen=product.map(function(item){
        return item.id
    }).indexOf(e)
    product.splice(chosen,1)
    localStorage.setItem("allproducts",JSON.stringify(product))
    show(product)
   
}