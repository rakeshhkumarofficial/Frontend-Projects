const logout = document.getElementById('logout');
const changePass = document.getElementById('changePassword');
const searchForm = document.getElementById('search-button');
const searchInput = document.querySelector('#search-input');
const resultsList = document.querySelector('#results');
if (localStorage.getItem("items")) {
  resultsList.innerHTML = localStorage.getItem("items");
}
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
   const newListItem = document.createElement("li"); 
    if(res.data==null){
      alert(res.message);
      return;
    }
    for (let i = 0; i < resultsList.childNodes.length; i++) {
      const listItem = resultsList.childNodes[i]; // get the current child node (li element)
      if (listItem.nodeName === "LI") { // check if the current node is an li element
        if(listItem.innerHTML==res.data[0].firstName + " " + res.data[0].lastName){
          return;
        }       
      }
    }
    newListItem.textContent = res.data[0].firstName + " " + res.data[0].lastName ;     
    resultsList.appendChild(newListItem);
    localStorage.setItem("items", resultsList.innerHTML);
  })
  .catch(error => {
    console.error('Login failed:', error); 
  }); 
    
   // resultsList.innerHTML = `<li>"${searchTerm}"</li>`;
});

// for logout and changepassword

logout.addEventListener('click',()=>{
    window.location.href = 'login.html';
    localStorage.clear();
})

changePass.addEventListener('click',()=>{
    window.location.href = 'changePassword.html';
})

