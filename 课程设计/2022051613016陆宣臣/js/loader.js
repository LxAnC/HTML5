let list = document.querySelectorAll('.li')
        function setActiveClass() {
            list.forEach((item) =>
                item.classList.remove('act'))
            this.classList.add('act');
            
        }
        // list[0].preventDefault();   
        function setNoClass(){
           
            this.classList.remove('act');
            list[0].classList.add('act');
            
        }
        window.onload = function Home(){
            
            list.forEach(function(item){ 
            item.addEventListener('mouseover', setActiveClass);
            item.addEventListener('mouseleave',setNoClass);
            })
            
            
        }
       let nav=document.querySelector('na')
        
       
