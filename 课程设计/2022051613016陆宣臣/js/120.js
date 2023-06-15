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

// 获取时分秒
let hour = document.querySelector("#h");
let minute = document.querySelector("#m");
let second = document.querySelector("#s");
// 获取用户输入的日期
let inputTime = 86400; // 添加 ‘+’ 是将时间转为毫秒形式  时间可以自行填写
countDown() // 先调用一次这个函数，防止第一次刷新页面有空白
setInterval(countDown, 1000)
// 倒计时函数思路
/*
1.获取规定的时间毫秒数
2.获取当前时间毫秒数
3.二者毫秒数相减
4.利用公式转化为时分秒。
*/
function countDown() {
    let now = new Date();
    let hours = now.getHours();
    let minutes = now.getMinutes();
    let seconds = now.getSeconds();
    let times = inputTime - (hours * 60 * 60 + minutes * 60 + seconds); //转化为秒
    let h = parseInt((times / 60 / 60) % 24);
    h = h < 10 ? "0" + h : h; // 小于10的数字前添“0”
    hour.innerHTML = h; // 赋值
    let m = parseInt((times / 60) % 60);
    m = m < 10 ? "0" + m : m;
    minute.innerHTML = m;
    let s = parseInt(times % 60);
    s = s < 10 ? "0" + s : s;
    second.innerHTML = s;
}
// 创建一个外层容器
var lb = document.createElement("div");
lb.classList.add("lb");
document.body.appendChild(lb);
// 创建一个卡片容器
var lb1 = document.createElement("div");
lb1.classList.add("lb1");
lb.appendChild(lb1);
// 循环创建三张图片卡片
for (var i = 0; i < 3; i++) {
  var lbc = document.createElement("div");
  lbc.classList.add("lbc");
  var img = document.createElement("img");
  img.src = "card" + (i + 1) + ".jpg";
  lbc.appendChild(img);
  lb1.appendChild(lbc);
}
// 定义动画
let keyframes = `@keyframes cardRotate
 {
    0%,20%{
        transform: translateZ(-700px) rotateY(0);
    }
    45%{
        transform: translateZ(-700px) rotateY(-120deg);
    }
    75%{
        transform: translateZ(-700px) rotateY(-240deg);
    }
    100%{
        transform: translateZ(-700px) rotateY(-360deg);
    }
  }
`;

// 创建一个style元素，将CSS样式和动画添加到其中
var style = document.createElement("style");
style.type = "text/css";
style.innerHTML = `
  .lb{
    height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
    overflow: hidden;
    background-color: #000;
  }
  .lb1{
    width: 300px;
    height: 450px;
    perspective: 1000px;
    position: relative;
  }
  .lbcard{
    position: absolute;
    width: 100%;
    height: 100%;
    transform-style: preserve-3d;
    transform: rotateY(0) translateZ(-700px);
    animation: cardRotate 7s cubic-bezier(0.77,0,0.175,1) infinite;
  }
  .lbc{
    position: absolute;
    left: 0;
    right: 0;
    top: 0;
    bottom: 0;
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    -webkit-box-reflect: below 15px -webkit-linear-gradient(transparent 50%,rgba(255,255,255,0.3));
  }
  .lbc img{
    width: 100%;
    height: 100%;
  }
  .lbc:nth-child(1){
    transform: rotateY(0) translateZ(700px);
  }
  .lbc:nth-child(2){
    transform: rotateY(120deg) translateZ(700px);
  }
  .lbc:nth-child(3){
    transform: rotateY(240deg) translateZ(700px);
  }
  ${keyframes}
`;
document.head.appendChild(style);
