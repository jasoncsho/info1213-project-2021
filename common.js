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

// function redirectToInventory() {
//   location.href = 'home.html';
// }