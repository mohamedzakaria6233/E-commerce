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
var prod=document.querySelector(".product");
var end=document.querySelector(".end");
var add=document.querySelector(".add");
var cart=document.querySelector(".cart-productt")
var badge=document.querySelector(".cartt")
var parcart=document.querySelector(".parcart")
var allcart=document.querySelector(".cart-product")
var viewproduct=document.querySelector(".car2")
//////////
console.log("hi")
var prodd=localStorage.getItem("myprod");
var pselect=JSON.parse(prodd);
var n=0;
var pselected=pselect.map(function (item){
    
    n=n+1;
    item.n=n;

   return item
})
// console.log(pselected)
function show(){
    var vproduct=pselected.map(function (item){
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

    prod.innerHTML=vproduct;
    
 
};
show();

function remove(e){
    n=0;
    var A=pselected.filter(function (item){
        return item.id!==e;
    })
    //A عناصر الاراي اللي رجعت اللي مخترتهمش
    pselected.splice(A,1)
 console.log("yes")
    pselected=pselected.map(function (item){
        
        n=n+1;
        item.n=n;
    
       return item
    })
    show(pselected);
    localStorage.setItem("myprod",JSON.stringify(pselected));
   
    // console.log(pselected)

}




