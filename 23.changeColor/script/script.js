
let btn=document.getElementById('btn')
btn.addEventListener('click',action);
function action(){
    let number=Math.random()
    let final=Math.floor(number*1000000)
    document.getElementById('body').style.backgroundColor=`#${final}`;

    }