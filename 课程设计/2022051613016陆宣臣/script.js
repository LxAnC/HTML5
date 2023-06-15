var usernameInput = document.getElementById('username');
var passwordInput = document.getElementById('password');
var loginButton = document.getElementById('login-btn');
var errorMsg = document.getElementById('error-msg');
var countdownTimer = document.getElementById('countdown-timer');
var remainingTime = 4;
var countdownInterval;

// Regular expression for username validation
var usernamePattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

loginButton.addEventListener('click', function(event) {
  event.preventDefault();

  if (!usernamePattern.test(usernameInput.value)) {
    errorMsg.textContent = '请输入一个有效的邮件地址';
    return;
  }else if(usernameInput=="5001363@qq.com")

  if (passwordInput.value.length < 8) {
    errorMsg.textContent = '密码至少8位';
    return;
  }else if(passwordInput=="12345678")
  
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
  }, 1000);
  // 发送登录请求
  setTimeout(function() {
    window.location.href = "index.html";
  }, 2000);
});