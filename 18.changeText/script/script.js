let btn = document.getElementById('btn');
btn.addEventListener('click', (e) => changeText(e));
function changeText(e) {
    e.preventDefault();
    let text = document.getElementById('text');
    text.innerText === 'The most affordable learning platform'? 
    text.innerText = 'PW Skills':text.innerText= 'The most affordable learning platform';
    
}