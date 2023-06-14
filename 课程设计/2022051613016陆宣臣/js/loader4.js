let list = document.querySelectorAll('.li');
let menu = document.querySelectorAll('.putMenu');
console.log(list);
console.log(menu);
function setActiveClass() {
    list.forEach((item) =>
        item.classList.remove('act'));
    this.classList.add('act');

}
function setNoClass() {

    this.classList.remove('act');
    list[3].classList.add('act');

}
window.onload = function Home() {

    list.forEach(function (item) {
        item.addEventListener('mouseover', setActiveClass);
        item.addEventListener('mouseleave', setNoClass);
    })
}


