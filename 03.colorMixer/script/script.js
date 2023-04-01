let btn=document.getElementById('btn');
btn.addEventListener('click',action);
function action(){
    let color1=document.getElementById('color1').value;
    let color2=document.getElementById('color2').value;
    let final;
    switch(color1){
        case 'red':
                switch(color2){
                   case 'blue':final='purple';
                        break;
                    case 'yellow':final='orange';
                        break;
                    default: final='invalid color mixing';  
                }
        break;
        case 'blue':
                switch(color2){
                    case 'red':final='purple';
                        break;
                    case 'yellow':final='green';
                        break;
                    default:  final='invalid color mixing';
                }
        break;
        case 'yellow':
                switch(color2){
                    case 'red':final='orange';
                        break;
                    case 'blue':final='green';
                        break;
                    default:   final='invalid color mixing';
                }
        break;
        default:
            final='invalid color mixing';
    }
    document.getElementById('result').innerHTML='<h1> result : '+final+'<h1>';
    if(final!='invalid color mixing'){
        document.getElementById('body').style.backgroundColor=final;
    }
    else{
        document.getElementById('body').style.backgroundColor='grey';
    }
}