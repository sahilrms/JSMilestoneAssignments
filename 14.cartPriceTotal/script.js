let cart=[{
    "item_id":"item001",
    "item_name":"pen",
    "item_cost":10,
    "item_quantity":12
},{
    "item_id":"item002",
    "item_name":"pencil",
    "item_cost":5,
    "item_quantity":24
},{
    "item_id":"item003",
    "item_name":"rubber",
    "item_cost":3,
    "item_quantity":12
},{
    "item_id":"item004",
    "item_name":"sharpener",
    "item_cost":4,
    "item_quantity":10
}]
const billAmount = ()=>{
    let total_bill=0;
    for(let i in cart){
        total_bill=total_bill+cart[i].item_cost*cart[i].item_quantity;
    }
    return total_bill;
}
let bill=billAmount();
console.log("Total Bill is "+bill);