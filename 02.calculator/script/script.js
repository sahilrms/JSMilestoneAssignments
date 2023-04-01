let btn = document.getElementById('btn')
console.log(btn)
btn.addEventListener('click', (e) => calc(e));
function calc(e) {
    e.preventDefault();
    let num1 = Number(document.getElementById('value1').value)
    let num2 = Number(document.getElementById('value2').value)
    let op = document.getElementById('operation').value
    let result;
   switch (op) {
        case '+':
            result = num1 + num2;
            break;
        case '-':
            result = num1 - num2;
            break;
        case '*':
            result = num1 * num2;
            break;
        case '/':
            result = num1 / num2;
            break;
        default:
            result = 'invalid operator'
    }
    document.getElementById('result').innerHTML = '<h1>Result is '+result+'</h1>';
}

