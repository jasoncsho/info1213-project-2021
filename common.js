function redirectToInventory() {
  const email = document.getElementById("username").value;
  if ( isValidEmail(email) ) {
    location.href = 'home.html';
  } else {
    alert("Your email is invalid. Try again.")
  }
  
}

 function isValidEmail(email) {
    var validationnum=/\S+@\S+\.\S+/;
    return validationnum.test(email) == true;
}

function validateMembershipForm() {

  const name = document.forms["RegistrationForm"]["Name"];
  const age = document.forms["RegistrationForm"]["age"];
  const gender = document.forms["RegistrationForm"]["gender"];
  const email = document.forms["RegistrationForm"]["Email"];
  const phone = document.forms["RegistrationForm"]["Telephone"];
  const type = document.forms["RegistrationForm"]["Type"];
  const password = document.forms["RegistrationForm"]["Password"];
  const address = document.forms["RegistrationForm"]["Address"];

  if (name.value == "") {
    window.alert("Please enter your name.");
    name.focus();
    return false;
  }
  if (age.value == "") {
    window.alert("Please enter your age.");
    age.focus();
    return false;
  }
  if (gender.value == "") {
    window.alert("Please enter your gender.");
    gender.focus();
    return false;
  }
  if (email.value == "") {
    window.alert("Please enter your email address.");
    email.focus();
    return false;
  }
  if (phone.value == "") {
    window.alert("Please enter your phone number.");
    phone.focus();
    return false;
  }
  if (type.value == "") {
    window.alert("Please enter your membership type.");
    type.focus();
    return false;
  }
  if (password.value == "") {
    window.alert("Please enter your password.");
    password.focus();
    return false;
  }
  if (address.value == "") {
    window.alert("Please enter your street address.");
    address.focus();
    return false;
  }

  return true;


}