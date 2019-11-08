function togglePassword (){
  var passwordtype = document.getElementById("password");
  if (passwordtype.type === "password") {
    passwordtype.type = "text";
  } else {
    passwordtype.type = "password";
  }
}

function validateEmail() {
  var email = document.getElementById("email").value;

  var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

  var test = re.test(String(email).toLowerCase());

  if (!test) {
    alert('Invalid email.')

    return false;
  }

  return true;
}

function validateField(field) {
  var re = /^(?=.{8,24}$)(?![0123456789])(?!.*[ ]{2})[a-zA-Z0-9._]+/;

  var test = re.test(field);

  if (!test) {
    return false;
  }

  return true;
}


function validateUsername() {
  var username = document.getElementById("username").value;

  if (!validateField(username)) {
    alert("Invalid username.");

    return false;
  }

  return true;
}

function validatePassword() {
  var password = document.getElementById("password").value;

  if (!validateField(password)) {
    alert("Invalid password.");

    return false;
  }

  return true;
}

function validateForm() {
  if (!validateEmail()) {
    return false;
  }

  if (!validateUsername()) {
    return false;
  }

  if (!validatePassword()) {
    return false;
  }

  return true;
}
