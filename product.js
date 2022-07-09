//----setting up the images and content for product
var thumb=document.querySelector("#thumbs");
s=localStorage.id;
str="images/"+s+".jpg";
thumb.innerHTML=`
            <img class="Mimg" src=${str} alt="Product image">
            `
var price=document.querySelector("#cost");
p=parseInt(localStorage.price);
op=p+p/5;
price.innerHTML=`<p>${p}.00</p>
                    <p>${op}</p>`

var nam=document.querySelector("#name");
nam.innerText=localStorage.name;

//--------increasing Quantity-----------
var plus=document.querySelector("#plus");
var minus=document.querySelector("#minus");
var quan=document.querySelector("#selected");
var btn=document.querySelector("#atc");

var q=1;
plus.addEventListener("click",function(){
    quan.innerText=++q;
    btn.innerHTML=``;
    btn.innerText="Add to cart"
})
minus.addEventListener("click",function(){
    if(q!=0){
        quan.innerText=--q;
    }
    btn.innerHTML=``;
    btn.innerText="Add to cart"
})

btn.addEventListener("click",function(){
    lc=localStorage.cart;
    if(lc===undefined){
        var s="";
        s+=localStorage.id+":"+localStorage.name+":"+localStorage.price+":"+q+":"+0+",";
    }
    else{
        s=lc;
        i=lc.slice(0,lc.length-1).split(",");
        s+=localStorage.id+":"+localStorage.name+":"+localStorage.price+":"+q+":"+i.length+",";
    }
    localStorage.setItem("cart",s);
    btn.innerHTML=`<div><p>successfull</p><img src="images/done.png" alt="added to cart"></div>`
    notifing();
    setTimeout(function(){
        btn.innerHTML=``;
        btn.innerText="Add to cart";
    },2000)
    clearTimeout();
})