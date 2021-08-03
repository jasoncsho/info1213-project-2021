function redirectToInventory() {
  const email = document.getElementById("username").value;
  validemail(email);
  location.href = 'home.html';
}

 function validemail(email) {
    var emailvalue=email;

    var validationnum=/^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,4})$/;

    if(validationnum.test(validemail) == false)

    {

        alert("This email is invalid try again!");

        return false;

    }

    else

    {

        alert("This is valid");

        return true;

    }        

}

// function redirectToInventory() {
//   location.href = 'home.html';
// }