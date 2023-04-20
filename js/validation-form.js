
const email = document.querySelector('#email');
const form = document.querySelector("form")
const errorMessage = document.querySelector(".errorMsg");

form.addEventListener('submit' ,(e) =>{
  e.preventDefault();

  if(email.value !== email.value.toLowerCase()){
    errorMessage.style.visibility='visible';
  }else{
    console.log("supposed to be redirected")

  }
})


