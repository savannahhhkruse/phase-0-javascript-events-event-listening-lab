function addingEventListener() {

const btn = document.getElementById('button');

function clickAlert() {
    alert('i was clicked!')
} 

btn.addEventListener('click', clickAlert);
} 

addingEventListener()