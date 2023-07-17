// Form validation, the process of ensuring a user's answers to a form are correct, complete, and fit within
// some specific criteria (e.g. a password having containing a number or special character), is a VERY
// important part of being a fullstack developer as it helps prevent errors, improve data accuracy, and ensures
// that no data is missing upon form completion

// Your assignment is to do the following:
// 1. Write a function called validateForm(e) where e is an 'event' variable (this is default
//    behavior for forms - feel free to call it 'event' as well)
function validateForm(e){
    e.preventDefault();


// 2. Inside of validateForm(e), get the information of the form fields by either using querySelectors
//    or by traversing the event object and do the following checks:
//      2a. If the #name input element is empty, send an alert telling the user to enter their name
//          using the alert() method and then return false
//      2b. If the #email input element doesn't have a '@' in it, send an alert to tell them to enter
//          a proper email and then return false
//      2c. If the #password input element is empty, send an alert telling the user to enter a password
//          and return false
//      2d. If the #password input element is less than 8 characters, send an alert telling the user
//          their password must be at least 8 characters and then return false

// Get input for name
const name =document.querySelector("#name");
if(!name.value.trim()){
    alert("Please Enter name:");
    return false;
}

// Get input for email

const email = document.querySelector("#email");
if(!email.value.includes("@")) {
    alert("Please enter valid email address");
    return false;
}
//Get passwprd input 

const password= document.querySelector("#password");

if (!password.value.trim()) {
    alert("Please insert a password");
    return false;
}
if(password.value.length<8){(
    "Password should be least 8 characters");
    return false;
}
// 3. If all of the checks pass, return true

return true;
}
// 4. Lastly, add an event listener onto the form (id="#userForm") that waits for
//    a 'submit' event and runs the validateForm callback function when that event happens
const userForm = document.querySelector("#userForm");

userForm.addEventListener("submit", validateForm);

//Hint: When dealing with a form submission that takes an event variable as a parameter, use e.preventDefault()
//      (or event.preventDefault() depending on the name of the variable) to prevent the page
//      from refreshing when a form is submitted. Do all your checks after that line.
