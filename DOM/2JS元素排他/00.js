        // 1. 获取元素 
        let imgs=document.querySelectorAll('.baidu img')
        // console.log(imgs);
        // 2. 循环注册事件 
                // this.src 就是我们点击图片的路径   images/2.jpg
                // console.log(this.src);
                // 把这个路径 this.src 给body 就可以了
        for(let i=0;i<imgs.length;i++){
          imgs[0].addEventListener('click',function(){
            
          })
          imgs[i].onclick=function(){
            document.body.style.backgroundImage=`url(${this.src})`
          }
        }