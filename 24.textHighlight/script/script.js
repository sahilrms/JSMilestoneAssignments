let text=document.getElementById('content').innerText.split(' ');
let final=text.map((s=>s.length>8?`<span class='gt8'>${s}</span>`:`${s}`))
document.getElementById('content').innerHTML=final.join(' ')