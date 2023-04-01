let todos=[]
let btn=document.getElementById('btnAdd')
btn.addEventListener('click',action);
function action(){
    let todo=document.getElementById('todo').value;
    let priority=document.getElementById('priority').value;
    todos.push({todo,priority});
    document.getElementById('list').innerHTML='';
    todos.map((i,index)=>{
        let li=document.createElement('li')
        li.innerHTML=`<h3 style="margin-top:2px"> ${i.todo}  <button class='button' id=btn${index} onclick="deleteItem(todo${index})" style="margin-left:2px">Remove</button></h3>`;
        li.id=`todo${index}`;
        switch(i.priority){
            case 'High':li.style.backgroundColor=`red`;
                break;
            case 'Medium':li.style.backgroundColor=`yellow`;
                break;
            case 'Low':li.style.backgroundColor=`green`;
                break;
        }
        li.style.height='2rem';
        document.getElementById('list').appendChild(li);
    })
}

function deleteItem(item)
    {
      document.getElementById('list').removeChild(document.getElementById(item.id));
    }