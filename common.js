 function popup1()
{
    const cookie = getCookie("email");
    alert("Welcome to Our Shop");

}

function redirectToInventory() {
  const email = document.getElementById("username").value;
  if ( isValidEmail(email) ) {
    register(email);
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



function register(name) {
  var today = new Date()
  var expires = new Date()
  expires.setTime(today.getTime() + 1000*60*60*24*365)
  setCookie("email", name, expires)
}

// Sets cookie values. Expiration date is optional
//
function setCookie(name, value, expire) {
    document.cookie = name + "=" + escape(value)
    + ((expire == null) ? "" : ("; expires=" + expire.toGMTString()))
}

function getCookie(Name) {
  var search = Name + "="
  if (document.cookie.length > 0) { // if there are any cookies
    offset = document.cookie.indexOf(search);
    if (offset != -1) { // if cookie exists
      offset += search.length;
      // set index of beginning of value
      end = document.cookie.indexOf(";", offset);
      // set index of end of cookie value
      if (end == -1) {
        end = document.cookie.length;
        return unescape(document.cookie.substring(offset, end));
      }
    }
  }
}