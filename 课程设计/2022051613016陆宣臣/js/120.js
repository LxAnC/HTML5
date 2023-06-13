let prs = document.querySelectorAll('.pr');


for(let i=0;i<prs.length;i++)
{
    prs[i].onclick=function(){
        for(let j=0;j<prs.length;j++)
        prs[j].classList.remove('act');
        this.classList.add('act');

    }
}