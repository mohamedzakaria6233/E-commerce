var product=JSON.parse(localStorage.getItem("allproducts"));
var idd=localStorage.getItem("saveid")
var chose=product.find(function (item){
    return item.id==idd

})
console.log(chose)
var content=document.querySelector(".product")
content.innerHTML=`
<h2 class="nam">${chose.title}</h2>

<img src=${chose.image} alt="product" class="pho">
  <p class="siz">${chose.size}</p>
  <p class="desc">description</p>
`
console.log(content)