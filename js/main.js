// Contact From Validation
function validateForm() {
  var name = document.getElementById("name").value;
  var email = document.getElementById("email").value;
  var message = document.getElementById("message").value;
  var error_message = document.getElementById("error_name");
  var error_message = document.getElementById("error_email");
  var error_message = document.getElementById("error_message");
  var success_message = document.getElementById("success_message");

  // error_message.style.padding = "10px";

  var text;
  if (name.length < 3) {
    text = "Please Enter valid Name";
    error_name.innerHTML = text;
    return false;
  }
  if (email.indexOf("@") == -1 || email.length < 6) {
    text = "Please Enter valid Email";
    error_email.innerHTML = text;
    return false;
  }
  if (message.length <= 10) {
    text = "Please Enter Your Message";
    error_message.innerHTML = text;
    return false;
  }
  text = "Message Send Successfully!";
  success_message.innerHTML = text;
  return true;
}
