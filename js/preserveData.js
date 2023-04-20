const userName= document.querySelector('#userName')
const userEmail = document.querySelector('#email');
const userMessage = document.querySelector('#message')
const submissionBtn = document.querySelector('#submit')
const form = document.querySelector("form")


// Get user data from localstorage
// let getUserData = { name:"", email:"", msg: ""}

window.addEventListener("load", () =>{
 let getUserData= JSON.parse(localStorage.getItem('setUserData'));
  userName.value =  getUserData.name;
  userEmail.value = getUserData.email;
  userMessage.value =  getUserData.msg;
})

// set userDate to localStorage
let setUserData= {name:"", email:"", msg: ""}

console.log(submissionBtn)
submissionBtn.addEventListener("click" ,(e) =>{
  // e.preventDefault();
  setUserData.name = userName.value;
  setUserData.email = userEmail.value ;
  setUserData.msg = userMessage.value
localStorage.setItem('setUserData' ,JSON.stringify(setUserData))

})