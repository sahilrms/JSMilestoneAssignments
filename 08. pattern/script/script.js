let btn=document.getElementById('btn');
btn.addEventListener('click',action);
function action(){
    let rows=Number(document.getElementById('name').value)
    if(rows > 0){
        let stars='';
    for(let i=0; i<rows;i++){
        // stars='';
       for(j=i;j<rows;j++)
       {
        stars=stars+'*'
       }
       stars=stars+'\n';
    }
    document.getElementById('result').innerHTML='<pre>'+stars+'</pre>';
    document.getElementById('result').style.color='black';
    }
    else{
        document.getElementById('result').innerHTML='<pre>Rows less than 1</pre>';
        document.getElementById('result').style.color='black';
        
    }
    
}