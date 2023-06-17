let usernameInput = document.getElementById('username');
let passwordInput = document.getElementById('password');
let loginButton = document.getElementById('login-btn');
let errorMsg = document.getElementById('error-msg');
let countdownTimer = document.getElementById('countdown-timer');
let remainingTime = 4;
let countdownInterval;

// Regular expression for username validation
let usernamePattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

loginButton.addEventListener('click', function(event) {
  event.preventDefault();

  if (!usernamePattern.test(usernameInput.value)) {
    errorMsg.textContent = '请输入一个有效的邮件地址';
    return;
  }

  if (passwordInput.value.length < 8) {
    errorMsg.textContent = '密码至少8位';
    return;
  }
  if(usernameInput.value=="5001363@qq.com")
  if(passwordInput.value=="12345678")
  {alert("登录成功,即将跳转……")
  setTimeout(function() {
    window.location.href = "../index.html";
  }, 500);}
  else{
  loginButton.disabled = true;
  countdownInterval = setInterval(function() {
    remainingTime--;
    countdownTimer.textContent = 'You can try again in ' + remainingTime + ' seconds.';
    if (remainingTime === 0) {
      clearInterval(countdownInterval);
      loginButton.disabled = false;
      countdownTimer.textContent = '';
      remainingTime = 4;
    }
  }, 1000);}
  // 发送登录请求
  
});