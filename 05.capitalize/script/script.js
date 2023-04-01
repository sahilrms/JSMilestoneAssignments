let btn=document.getElementById('btn');
btn.addEventListener('click',action);
function action(){
    userName=document.getElementById('name').value;
    document.getElementById('result').innerHTML=userName[0].toUpperCase();
    userName[0] != userName[0].toUpperCase()?
     userName=userName[0].toUpperCase()+userName.substring(1):
     userName;
    document.getElementById('result').innerHTML='<h1>'+userName+'</h1>'
}