
let btn = document.getElementById('btn');
btn.addEventListener('click', action);

// function to convert
function action() {
    let price = Number(document.getElementById('price').value);
    let discounted_price = Number(document.getElementById('discountedPrice').value);
    let discount_percent=((price-discounted_price)/price)*100;
    document.getElementById('result').innerHTML=`<h1>The Discount Percentage is : ${discount_percent}</h1>`
}

