//get the login form and overlay an overlay Element//
const loginform = document.getElementById('login-form');
const loginOverlay = document.getElementById('loginOverlay');
console.log(loginform);
console.log(loginOverlay)
//present users from interacting with the website untill the for is submitted//
document.body.style.overflow = 'hidden';
//add event listener to the form//
loginform. addEventListener('submit', (e)=>{
    e.preventDefault()
    loginform.style.display = 'none';
//store login status in local storage//
localStorage.setItem('loggedIn', true)
//hide the form overlay//
loginOverlay.style.display = 'none';
//Alow users to interact with the pages//
document.body.style.overflow = 'auto';
});