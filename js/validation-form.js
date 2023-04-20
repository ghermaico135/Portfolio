
const email = document.querySelector('#email');
const form = document.querySelector("form")
const errorMessage = document.querySelector(".errorMsg");
// get the ids here

form.addEventListener('submit' ,(e) =>{
  e.preventDefault();

  const userName = username.value;
  const userEmail = email.value;
  const userMsg = message.value;

  if(email.value !== email.value.toLowerCase()){
    errorMessage.style.visibility='visible';
  }else{
    console.log("supposed to be redirected")

  }
  
  // storing data
const formData = {name: userName, email: userEmail, message: userMsg}
    
// setting the storage and stringifying data
localStorage.setItem('userData', JSON.stringify(formData));
localStorage.getItem('userData', JSON.stringify(formData));
})




