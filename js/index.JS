var nav1=document.querySelector(".ul1")
var nav2=document.querySelector(".ul2")
var acc=document.querySelector(".acc")
if(localStorage.getItem("name")){

    nav1.remove();
    nav2.style.display="flex";
    acc.innerHTML=localStorage.getItem("name")
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
var product=[
    {id:1,
    title:"Laptop HP",
    size:"large",
    image:"../image/lab.jpg",
    qu:1,
    desc:"HP 250 G7 Laptop - Intel Celeron N4020, 4 GB RAM" 

    
    },
    {  id:2,
        title:"Sun Glasses",
        size:"meduin",
        image:"../image/glasses.jpg",
        qu:1,
        desc:"Vegas V2023 Octagonal Sunglasses With Modern Design"
        },
    {
        id:3,
        title:"Gold Watch",
        size:"small",
        image:"../image/watch.jpg",
        qu:1,
        desc:"s Wrist Watches with Calendar, Thin Box Minimalist Watches"

    },
    {
        id:4,
        title:"Head phone",
        size:"large",
        image:"../image/headphone.jpg"
        ,qu:1,
        ddesc:"s Wrist Watches with Calendar, Thin Box Minimalist Watches"

    },
    {
        id:5,
        title:"Iphone 12 Max pro",
        size:"small",
        image:"../image/try.jpg",
        qu:1,
                ddesc:"s Wrist Watches with Calendar, Thin Box Minimalist Watches"

    }
    
    
];
if(localStorage.getItem("allproducts")){
    product=JSON.parse(localStorage.getItem("allproducts"))

}
else{


 localStorage.setItem("allproducts",JSON.stringify(product))
}
////////////////////////////////////////////
function show(e){   //href="../html/details.html"
    var vproduct=e.map(function (item){
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
            <button class="add addd3" onclick="print(${item.id})">Add To Cart</button>

            <i  class="fa-regular fa-heart fa-2x fav" style="color:${item.liked==true?"red":"white"}" onclick="addtofav(${item.id})"></i> 
        </div>
     </div>  
        `
        
    })

    prod.innerHTML=vproduct;
 
};
show(product);
console.log(product)
////////////////////////////////////////////////
if(localStorage.getItem("myfav")){
    var fav=JSON.parse(localStorage.getItem("myfav"))
}
else{
    var fav=[]
}
function addtofav(e){

   var chosen= product.find(function (item){
        return item.id==e
    })
    
    

 
    var items=fav.find(function (item){
        return item.id==chosen.id
    })
    if(items){
        fav.splice(chosen.num,1)
        product.map(function (item){
            if(item.title==chosen.title){
                item.liked=false
            }
            
        })
       localStorage.setItem("allproducts",JSON.stringify(product))
       show(product)
        
        
    }
    else{
        fav.push(chosen)
        product.map(function (item){
            if(item.title==chosen.title){
                item.liked=true;
                localStorage.setItem("allproducts",JSON.stringify(product));
                show(product)
            }
        })

    }

  var x=-1;
    fav.forEach(function (item){  //هام forEach لما احب اضيف key
        
        item.num=++x;
    })

    console.log(fav)
    localStorage.setItem("myfav",JSON.stringify(fav))
    console.log(product)
}//end addtofav







if(localStorage.getItem("myprod")){
var arr=JSON.parse(localStorage.getItem("myprod"));

badge.style.display="block";
badge.innerHTML=arr.length;


}
else{
    arr=[];
}
badge.style.display="none";
function print(e){

    var chosen=product.find(function (item){
        return e==item.id;
    })

    var items= arr.find(function (item){
        return item.id==chosen.id
    })

  if(items){
    items.qu+=1;
    console.log(items)
  }
  else{
    arr.push(chosen)

   
  }

var n=document.querySelectorAll(".cart-productt p"); //افضل وسيلة للعد
badge.style.display="block";

 arr=arr;
 localStorage.setItem("myprod",JSON.stringify(arr));
 var sss=arr.reduce(function (c,item){
    return parseInt(item.qu) + c
 },0)
 localStorage.setItem("num",sss)
 badge.innerHTML=localStorage.getItem("num");


// console.log(arr)
  console.log("hwa")

}
if(localStorage.getItem("num")){
    badge.innerHTML=localStorage.getItem("num");

}
else{
    badge.innerHTML=0;
}

function ev(){

    if(localStorage.getItem("email")){
        window.location="cart.html"
    }
    else{
        window.location="login.html"
    }
}


parcart.addEventListener("click",q)

function q(){
    var ns=document.querySelectorAll(".cart-productt p"); //افضل وسيلة للعد
    if(ns.length !==0 || arr.length>0  )
    if(allcart.style.display=="block"){
        allcart.style.display="none";
     
    }
    else{
        allcart.style.display="block";

    }
    cart.innerHTML="";
    var nam= arr.map(function (item){
        return`
        <p>${item.title} <span class="naa">${item.qu}</span></p>
        `
    });
    cart.innerHTML=nam.join("");
    console.log("هو ده")
    }
     
    viewproduct.addEventListener("click",car)
    function car(){
        window.location="car.html"
    }




// search
var write=document.querySelector(".s2")
var ok=document.querySelector(".s3");
var sorry=document.querySelector(".sorry")
var x=document.querySelector(".x")
//
ok.addEventListener("click",s);
function s(){
    if(write.value!==" "){
    console.log("test")
    function search(arr,word){
    return arr.filter(function(item){
        return item.title.indexOf(word)!==-1;
    })
    }
   var result=search(product,write.value);
   var vproduct=result.map(function (item){
    return `
    <div class="product-icon">
    <img src=${item.image} class="product-image"title="Product">
    <div class="product-item-disc">
        <h2 class="tit">${item.title}</h2>
        <p class="des">best head phone panasonic</p>
         <p class="size">Size : ${item.size}</p>
    </div>
    <div class="product-item-action">
        <button class="add" onclick="print(${item.id})">Add To Cart</button>

        <i  class="fa-regular fa-heart fa-2x fav"></i> 
    </div>
 </div>  
    `
   })
   prod.innerHTML=vproduct;
   write.value="";
    }

    if(result.length==0){
        sorry.style.display="flex";
    }
}
// write.addEventListener("keyup",ff);
// function ff(){
//     if(write.value=" "){
//         show();

//     }
// }


// الكود ده علشانلو حد عايز يستخدم الانتر مع علامة البخث 
x.addEventListener("click",w);
function w(e){
    e.preventDefault();
    if(write.value!==" "){
        console.log("test")
        function search(arr,word){
        return arr.filter(function(item){
            return item.title.indexOf(word)!==-1;
        })
        }
       var result=search(product,write.value);
       var vproduct=result.map(function (item){
        return `
        <div class="product-icon">
        <img src=${item.image} class="product-image"title="Product">
        <div class="product-item-disc">
            <h2 class="tit">${item.title}</h2>
            <p class="des">best head phone panasonic</p>
             <p class="size">Size : ${item.size}</p>
        </div>
        <div class="product-item-action">
            <button class="add" onclick="print(${item.id})">Add To Cart</button>
    
            <i  class="fa-regular fa-heart fa-2x fav"></i> 
        </div>
     </div>  
        `
       })
       prod.innerHTML=vproduct;
       write.value="";
        }
    
        if(result.length==0){
            sorry.style.display="flex";
        }
        else{
            sorry.style.display="none";

        }
}


/////////////////////////////////////////////////////////////////////////
//   Test    بنسخ الكود عادي واشتغل عليه واسيب الاصلي فوق زي ما هو  //
/*////////////////////////////////////////////////////////////////////////*/

function saveid(e){
    localStorage.setItem("saveid",e);
    console.log("aha")
    window.location="details.html";
}



var sel=document.querySelector(".see");
sel.addEventListener("change",Size);
function Size(e){
   var x=e.target.value.toLowerCase()   //sel.value
   if(x=="all"){
    show(product)
   }
   else{
    console.log(x)
    var chosen=product.filter(function(item){
     return item.size==x
    })
    show(chosen)
   }
 
   
  
}


function edit(e){
    localStorage.setItem("saveidd",e)
    window.location="edit.html";
}
/////////////////////////////
// language

var arabic=document.querySelector(".arabic");
var english=document.querySelector(".english")
var html=document.querySelector("html")
arabic.addEventListener("click",a)
function a(){
    html.setAttribute("dir","ar")

    $(document).ready(function (){
        $(".fi").text("التصفية بواسطة الاسم : ")
        $(".addd3").text("اضف الي السلة")
        $(".s1").text("البحث")
        $(".s2").attr("placeholder","أدخل المنتج ")
        $(".overlogo").html("<p><span>ع</span>ربة <span>ال</span>تسوق</a></p>")
    })//end jQuery
}
english.addEventListener("click",e)
function e(){
    html.removeAttribute("dir")

    $(".fi").text("Filter By Size : ")
    $(".addd3").text("Add to cart")
    $(".s1").text("Search")
    $(".s2").attr("placeholder","Enter Product")
    $(".overlogo").html("<p><span>S</span>hopping <span>C</span>art</a></p>")
}
