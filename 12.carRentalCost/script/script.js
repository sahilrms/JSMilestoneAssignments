
let btn = document.getElementById('btn');
btn.addEventListener('click', action);

// function to convert
function action() {
    let days = Number(document.getElementById('days').value);
    let plan = document.getElementById('plan');
    let rent;
    switch(plan.value){
        case 'Economy':
            rent=days*4000;
           break;
        case 'MidSize':rent=days*10000;
        break;
        case 'Luxury':rent=days*20000;
        break;
    }
document.getElementById('result').innerHTML='<h1>The Total Rent :'+rent+'</h1>';
}