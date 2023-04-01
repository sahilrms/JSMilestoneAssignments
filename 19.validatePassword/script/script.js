let submit= document.getElementById('submit');
let msgBox=document.getElementById('msg');
submit.addEventListener('click',(e)=>validate(e));
function validate(e){
    e.preventDefault();
    let email=document.getElementById('email').value;
    let password=document.getElementById('password').value;
    let has_at=email.includes('@')
    let pass_len=password.length>8;
    if(has_at & pass_len){
        let msg=`valid email and password`;
        msgBox.innerHTML=`<h1>${msg}</h1>`;
        msgBox.style.color='green';
    }
    else{
        let msg=`In-valid email Or password`;
        msgBox.innerHTML=`<h1>${msg}</h1>`;
        msgBox.style.color='red';
    }
}