const signup = document.getElementById("signup-form");

signup.addEventListener("submit", function(signupevent) {
    signupevent.preventDefault();
  const firstName = document.getElementById("first-name").value;
  const lastName = document.getElementById("last-name").value;
  const email = document.getElementById("email").value;
  const phone = document.getElementById("phone").value;
  const password = document.getElementById("password").value;
  const dateOfBirth = document.getElementById("date-of-birth").value;
  const signupData = {
    firstname: firstName,
    lastname: lastName,
    email: email,
    phone: phone,
    password: password,
    dateofbirth: dateOfBirth
  };

  fetch('http://192.180.0.127:4040/api/User/Register', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(signupData)
  })
  .then(response => response.json())
  .then(res => {
    console.log('Signup successful:', res);
    const token = res.data['token'];
    localStorage.setItem('token', token);
    window.location.href = 'home.html';
  })
  .catch(error => {
    console.error('Signup failed:', error);

  });
});



