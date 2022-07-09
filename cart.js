function cartItems(){
    if(localStorage.cart==undefined || localStorage.cart==''){
        document.querySelector("main").innerHTML=`<h1>You have not added any thing to cart</h1>`
    }
    else{
        var s=localStorage.cart;
        var st=s.slice(0,s.length-1).split(",");
        var str="";
        var r_id=0;
        st.forEach(i=>{
            item=i.split(":");
            sr="images/"+item[0]+".jpg";
            pr=parseInt(item[2])*item[3];
            str+=`<div class="item">
                    <img src=${sr} alt="">
                    <div>
                        <p>${item[1]}</p>
                        <p>price: <strike>${pr+pr/5}</strike> <span>${pr}</span></p>
                        <p>Quantity : ${item[3]}<p>
                    </div>
                    <div>
                        <button class="rem" id=${r_id}>Remove</button>
                    </div>
                </div>`
            r_id+=1;
        })
        document.querySelector("main").innerHTML=str;
        var rem=document.querySelectorAll(".rem");
        rem.forEach(re=>{
            re.addEventListener("click",function(){
                n_str="";
                st.forEach(n_st=>{
                    if(n_st!=st[re.id]){
                        n_str+=n_st+",";
                    }
                })
                localStorage.cart=n_str;
                cartItems();
                notifing();
            })
        })
    }
}
cartItems();
var ordersum=document.querySelector("#ordersum");
var chk=document.querySelector("#chk button");
var close=document.querySelector("#order img");
var tb=document.querySelector("table");
close.addEventListener("click",function(){
    ordersum.style.display="none";
})
chk.addEventListener("click",function(){
    ordersum.style.display="grid";
    if(localStorage.cart==undefined || localStorage.cart==''){
        ordersum.children[0].children[1].innerHTML=`<h3>Please add items to cart.</h3>`
    }
    else{
        var s=localStorage.cart;
        var st=s.slice(0,s.length-1).split(",");
        str=`<tr>
                <th>Item</th>
                <th>Quantity</th>
                <th>Price</th>
            </tr>`
        let total=0;
        st.forEach(tr=>{
            td=tr.split(":");
            cost=td[2]*td[3];
            str+=`<tr>
                    <td>${td[1]}</td>
                    <td>${td[3]}</td>
                    <td>${cost}</td>
                </tr>`
            total+=cost;
        })
        tb.innerHTML=str;
        tb.nextElementSibling.innerHTML=`<b>Total Amount(Rs) : ${total}</b>`;
    }
})