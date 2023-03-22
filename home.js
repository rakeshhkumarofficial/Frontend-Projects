const logout = document.getElementById('logout');
const changePass = document.getElementById('changePassword');
const searchForm = document.getElementById('search-button');
const searchInput = document.querySelector('#search-input');
const resultsList = document.querySelector('#results');


searchForm.addEventListener('click', (event) => {
    event.preventDefault();
    const searchTerm = searchInput.value;
    const token = localStorage.getItem('token');
    fetch(`http://192.180.0.127:4040/api/User/Search?Name=${searchTerm}`, {
    method: 'GET',
    headers: {
    'Authorization': `Bearer ${token}`,
      'Content-Type': 'application/json'
    },
  })
  .then(response => response.json())
  .then(res => {
   // window.location.href = 'home.html';
   console.log('Search successful:', res)
  })
  .catch(error => {
    console.error('Login failed:', error); 
  });       
    resultsList.innerHTML = `<li>"${searchTerm}"</li>`;
});

// for logout and changepassword

logout.addEventListener('click',()=>{
    window.location.href = 'login.html';
    localStorage.clear();
})

changePass.addEventListener('click',()=>{
    window.location.href = 'changePassword.html';
})

