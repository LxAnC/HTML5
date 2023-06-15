let list = document.querySelectorAll('.li')
let cons = document.querySelectorAll('.Connect')
let send = document.querySelector('.send');
let input = document.querySelector('input[type="text"]');
let chatBox = document.querySelector('.chatbox');
let page = document.querySelector('page3');
function setActiveClass() {
    list.forEach((item) =>
        item.classList.remove('act'));
    this.classList.add('act');

}

window.alert = function(str){
    return ;
}
function setNoClass() {

    this.classList.remove('act');
    list[2].classList.add('act');

}
window.onload = function Home() {

    list.forEach(function (item) {
        item.addEventListener('mouseover', setActiveClass);
        item.addEventListener('mouseleave', setNoClass);
    })
    cons.forEach(function (b) {
        b.addEventListener('click', setFocusClass);
    })
    send.addEventListener('click', sendmessage)
    page.classList.add('ac');
    // 
}
function sendmessage() {
    let chatMessage = document.createElement('div');
    let messAge = document.createElement('p');
    let time = document.createElement('span');
    let now = new Date();
    time.textContent = now.toLocaleTimeString();
    chatMessage.appendChild(messAge);
    chatMessage.appendChild(time);
    if (input.value == "")
        alert("不允许为空！");
    else {
        messAge.textContent = input.value;
        messAge.classList.add('Chatspar');
        chatBox.insertBefore(chatMessage, chatBox.firstChild);
        input.value = '';
    }
}

let cb=document.querySelector('.chatbox');
const box = document.querySelector('.messagetit');
function setFocusClass() {

    cons.forEach(function (item) {
     
        item.classList.remove('focus');
        item.style.display = "block";
    })
    cb.innerHTML='';
    this.classList.add('focus');
    box.classList.add('change1');
    box.innerHTML = this.innerHTML;
    setTimeout(function () {
        box.classList.remove('change1')
    }, 500)
}

