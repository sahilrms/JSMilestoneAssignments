// function to manage units
function unitSet(id1, id2) {
    let unit1select = document.getElementById(id1);
    unit1select.value === 'Celsius' ? document.getElementById(id2).value = 'Farenhiet' : document.getElementById(id2).value = 'Celsius';

}

document.getElementById('unit1select').addEventListener('click', () => unitSet('unit1select', 'unit2select'))
document.getElementById('unit2select').addEventListener('click', () => unitSet('unit2select', 'unit1select'))

let btn = document.getElementById('btn');
btn.addEventListener('click', action);

// function to convert
function action() {
    let val1 = document.getElementById('unit1');
    let val1unit = document.getElementById('unit1select').value;
    if (val1unit === 'Celsius')
        convertToF(val1.value);
    else
        convertToC(val1.value);
}

function convertToF(val1) {
    let f = val1 * 1.8000 + 32;
    document.getElementById('unit2').value = f;

}

function convertToC(val1) {
    let c = (val1 - 32) / 1.8000;
    document.getElementById('unit2').value = c;
}