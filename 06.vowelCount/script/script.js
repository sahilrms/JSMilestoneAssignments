let btn=document.getElementById('btn');
btn.addEventListener('click',action);
function action(){
    userName=document.getElementById('name').value.toUpperCase();
    let vowels=0;
    for(let i=0; i<userName.length;i++){
        switch(userName[i]){
            case 'A': vowels++;
                break;
            case 'E':vowels++;
                break;
            case 'I':vowels++;
                break;
            case 'O':vowels++;
                break;
            case 'U':vowels++;
                break;

        }
    }
    document.getElementById('result').innerHTML='<h1>Total vowels are'+vowels+'</h1>'
}