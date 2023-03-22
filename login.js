// login form js 
  
const login = document.getElementById('login-form');

login.addEventListener("submit", function(loginevent) {
    loginevent.preventDefault(); 

  const email = document.getElementById('email').value;
  const password = document.getElementById('password').value;

  const loginData = {
    email: email,
    password: password
  };

  fetch('http://192.180.0.127:4040/api/User/Login', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(loginData)
  })
  .then(response => response.json())
  .then(res => {
   const token = res.data['token'];
   localStorage.setItem('token', token);
   console.log('Login successful:', res)
   window.location.href = 'home.html';
  

  })
  .catch(error => {
    console.error('Login failed:', error);
    // Do something with the error, like display an error message to the user
  });
});