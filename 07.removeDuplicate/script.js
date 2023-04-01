// cart initialization
let cart = [{
    item_id: "item001",
    item: "pen"
}, {
    item_id: "item001",
    item: "pen"
},
{
    item_id: "item001",
    item: "pen"
},
{
    item_id: "item002",
    item: "pencil"
}, {
    item_id: "item003",
    item: "rubber"
}, {
    item_id: "item003",
    item: "rubber"
}, {
    item_id: "item004",
    item: "sharpner"
}
, {
    item_id: "item004",
    item: "sharpner"
}
]
let newCart = []
let duplicate = 0;
// filtering duplicate from cart

for (let i = 0; i < cart.length ; i++) {
    newCart.push(cart[i])
    duplicate = 0;
    for (let j = i + 1; j < cart.length; j++) {
        if(cart[i].item_id===cart[j].item_id){
        duplicate++;
        }
    }
    if(duplicate!=0)
    {
        // newCart.push(cart[i])
        newCart.pop();
    }
}
console.log("orginal cart length is "+cart.length)
console.log("new cart length is "+newCart.length)
console.log("filtered cart is " + JSON.stringify(newCart))
