// Contact From Validation
function validate() {
  var name = document.getElementById("name").value;
  var email = document.getElementById("email").value;
  var message = document.getElementById("message").value;
  var error_message = document.getElementById("error_message");
  var success_message = document.getElementById("success_message");
  var regEmail = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/g;
  var regName = /\d+$/g;

  error_message.style.padding = "7px";

  var text;
  if (name == "" || regName.test(name)) {
    text = "Please Enter valid Name";
    error_message.innerHTML = text;
    return false;
  }
  if (email == "" || !regEmail.test(email)) {
    text = "Please Enter valid Email";
    error_message.innerHTML = text;
    return false;
  }
  if (message.length < 8) {
    text = "Please Enter YOur Message";
    error_message.innerHTML = text;
    return false;
  }
  text = "Message Send Successfully!";
  success_message.innerHTML = text;
  return true;
}



(function () {
  $(window).load(function () {
    $("#pre-status").fadeOut();
    $("#preloader").delay(350).fadeOut("slow");
  });
})();
