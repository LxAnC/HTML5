let prs = document.querySelectorAll('.pr');
let pages = document.getElementsByClassName('page')
  
for (let s = 0; s < prs.length; s++) {
    prs[s].onclick = function () {
        for (let k = 0; k < prs.length; k++)
            prs[k].classList.remove('act');
        this.classList.add('act');
        for(let z=0;z<pages.length;z++)
        pages[z].style.display="none";
        pages[s].style.display = "block";
    }
}
