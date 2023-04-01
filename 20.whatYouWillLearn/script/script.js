const learn = ['HTML and Semantics',
    'Starting with CSS',
    'Working Template',
    'Mobile responsive webpages',
    'Grid and Flex-box in CSS',
    'Projects using HTML & CSS',
    'Version Control and Git',
    'Getting Started with JavaScript',
    'Advance JavaScript',
    'Working with DOM',
    'Making Projects using HTML, CSS and JavaScript',
    'Understanding Fundamental of Computer Science',
    'Getting Started with Database',
    'Understanding the Database',
    'Starting with NodeJS and Express',
    'Understanding React and its Fundamentals',
    'Understanding Hooks and Routers',
    'Starting and Completing Full Fledge Projects'];

let btn = document.getElementById('btn');
btn.addEventListener('click', () => action());
function action() {
    if (learn.length != 0) {
        let element = document.createElement('li')
        let temp = learn.shift()
        element.innerText = temp
        document.getElementById('list').appendChild(element)
    }
    else{
        document.getElementById('toast').style.display='flex';
        window.setTimeout(()=>document.getElementById('toast').style.display='none', 2000);
        document.getElementById('btn').innerText='All Items Displayed';
    }

}
