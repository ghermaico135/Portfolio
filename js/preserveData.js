const userName = document.querySelector('#userName');
const userEmail = document.querySelector('#email');
const userMessage = document.querySelector('#message');
const submissionBtn = document.querySelector('#submit');

window.addEventListener('load', () => {
  const getUserData = JSON.parse(localStorage.getItem('setUserData'));
  userName.value = getUserData.name;
  userEmail.value = getUserData.email;
  userMessage.value = getUserData.msg;
});

// set userDate to localStorage
const setUserData = { name: '', email: '', msg: '' };

submissionBtn.addEventListener('submit', () => {
  setUserData.name = userName.value;
  setUserData.email = userEmail.value;
  setUserData.msg = userMessage.value;
  localStorage.setItem('setUserData', JSON.stringify(setUserData));
});