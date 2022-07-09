var head=document.querySelector("head");
h=head.innerHTML;
head.innerHTML=`<meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Vegan Eats</title>
    <link rel="icon" type="image/png" sizes="32x32" href="./images/favicon-32x32.png">
    <link rel="stylesheet" href="header.css">
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link href="https://fonts.googleapis.com/css2?family=Courgette&display=swap" rel="stylesheet">
    ${h}`
var header=document.querySelector("header");
header.innerHTML=`<a href="index.php" class="home"><h2 id="logo">Vegan Food</h2></a>
        <nav>
            <a href="login.php" class="home">Home</a>
            <a href="category.html" class="starters">Starters</a>
            <a href="category.html" class="breakfast">Breakfast</a>
            <a href="category.html" class="meals">Meals</a>
            <a href="category.html" class="curry">Curry</a>
        </nav>
        <div>
            <div>
                <a href="cart.html"><img id="cart" src="images/icon-cart.svg" alt="cart"></a>
                <p id="notify"></p>
                <a href="logout.php"><img src="images/avatar.png" alt="profile"></a>
            </div>
            <img id="menu" src="images/icon-menu.svg" alt="menu">
            <aside>
                <img id="close" src="images/icon-close.svg" alt="close">
                <a href="login.php" class="home">HOME</a>
                <a href="category.html" class="starters">Starters</a>
                <a href="category.html" class="breakfast">Breakfast</a>
                <a href="category.html" class="meals">Meals</a>
                <a href="category.html" class="curry">Curry</a>
            </aside>
        </div>`
var menu=document.querySelector("#menu");
var slide=document.querySelector("aside");
var close=document.querySelector("#close");
menu.addEventListener("click",function(){
    
    slide.style.marginLeft="-40px";
    slide.style.transition='2s';
    slide.style.display="flex";
})
close.addEventListener("click",function(){
    slide.style.marginLeft="150px";
    slide.style.transition='2s';
    slide.style.display="none";
})
var a=document.querySelectorAll("a");
a.forEach(li=>{
    li.addEventListener("click",function(){
        localStorage.class=li.className;
    });
})
var notify=document.querySelector("#notify");
notifing();
function notifing(){
    if(localStorage.cart==undefined || localStorage.cart==''){
        notify.style.display="none";
    }
    else{
        notify.style.display="block";
        st=localStorage.cart.split(",").length;
        notify.innerText=st-1;
    }
}