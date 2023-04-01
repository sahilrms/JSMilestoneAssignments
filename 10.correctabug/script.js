let cart=[{
    item_id:"item001",
    item_name:"pen",
    item_quantity:2
},
{
    item_id:"item002",
    item_name:"pencil",
    item_quantity:1
},
{
    item_id:"item003",
    item_name:"sharpner",
    item_quantity:4
}]

for(let i=0;i<cart.length;i++){
    cart[i].item_quantity=cart[i].item_quantity*2;
}
console.log(cart);