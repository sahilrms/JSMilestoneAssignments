
let btn = document.getElementById('btn');
btn.addEventListener('click', action);

// function to convert
function action() {
    let cost = Number(document.getElementById('dish').value);
    let people =Number(document.getElementById('people').value);
    let share;
    share=cost/people
document.getElementById('result').innerHTML='<h1>The Total Share per head :'+share+'</h1>';
}