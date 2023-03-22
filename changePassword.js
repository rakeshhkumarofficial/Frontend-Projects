//import instance from './intercepter';
const form = document.querySelector('#changePasswordForm');
const formError = document.querySelector('#formError');

    form.addEventListener('submit', (event) => {
      event.preventDefault();
      formError.innerHTML = '';

      const oldPassword = form.elements['oldPassword'].value;
      const newPassword = form.elements['newPassword'].value;
      const confirmPassword = form.elements['confirmPassword'].value;

      if (newPassword !== confirmPassword) {
        formError.innerHTML = 'Passwords do not match';
        return;
      }
      form.reset();
      const changePass = {
        oldPassword: oldPassword,
        newPassword: newPassword,
        confirmPassword: confirmPassword
      };
      const token = localStorage.getItem('token');
      alert('Password changed successfully!');
        fetch('http://192.180.0.127:4040/api/User/ChangePassword', {
        method: 'PUT',
        headers: {
          'Authorization': `Bearer ${token}`,
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(changePass)
        })
        .then(response => response.json())
        .then(res => {
        console.log('Password changed successfully! : ', res)
        window.location.href = 'login.html';
        localStorage.clear();
        
        })
        .catch(error => {
            console.error('Login failed:', error);
            
        });
    });