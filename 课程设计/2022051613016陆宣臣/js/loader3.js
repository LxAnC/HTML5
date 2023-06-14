let list = document.querySelectorAll('.li')
let cons = document.querySelectorAll('.Connect')
function setActiveClass() {
    list.forEach((item) =>
        item.classList.remove('act'));
    this.classList.add('act');

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

    // 
}
const box = document.querySelector('.messagetit');
function setFocusClass() {
    
    cons.forEach(function (item) {
        
        item.classList.remove('focus');
        item.style.display = "block";
    }) 
    this.classList.add('focus');
    box.classList.add('change1');
    box.innerHTML = this.innerHTML;
    setTimeout(function(){
        box.classList.remove('change1')
    },500)
    

}