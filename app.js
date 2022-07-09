mo=[
    {
        id:"200",
        span:50,
        p:"Idly"
    },
    {
        id:"210",
        span:60,
        p:"Dosa"
    },
    {
        id:"300",
        span:150,
        p:"Meals"
    },
    {
        id:"20",
        span:80,
        p:"Manchuria"
    },  
]
trending=[
    {
        id:"450",
        span:80,
        p:"Brinjal Curry"
    },
    {
        id:"310",
        span:200,
        p:"Special Meals"
    },
    {
        id:"70",
        span:90,
        p:"Cheese Kachori"
    },
    {
        id:"10",
        span:200,
        p:"Spring Rolls"
    }
]

var newa=document.querySelector("#MostOrdered");
s="";var al='0';
mo.forEach(li=>{
    sr="images/"+li.id+".jpg"
    pr=li.span;
    s+=`<div class="container">
            <a href="product.html"><img class="product" id=${li.id} src=${sr} alt="image"></a>
            <div>
                <p class="food">${li.p}</p>
                <p>price: <strike>${pr+pr/5}</strike> <span>${pr}</span></p>
            </div>
            
        </div>
        `
})

newa.innerHTML=`<legend>Most Ordered</legend>
                ${s}`;
var pl=document.querySelector("#Treanding");
s="";
trending.forEach(li=>{
    sr="images/"+li.id+".jpg";
    pr=li.span;
    s+=`<div class="container">
            <a href="product.html"><img class="product" id=${li.id} src=${sr} alt="image"></a>
            <div>
                <p class="food">${li.p}</p>
                <p>price: <strike>${pr+pr/5}</strike> <span>${pr}</span></p>
            </div>
        </div>
        `
})
pl.innerHTML=`<legend>Treanding</legend>
                ${s}`;

var img=document.querySelectorAll(".product")
img.forEach(im=>{
    im.addEventListener("click",function(){
        localStorage.id=im.id;
        localStorage.price=im.parentElement.nextElementSibling.children[1].children[1].innerHTML;
        localStorage.name=im.parentElement.nextElementSibling.children[0].innerHTML;
    })
})

