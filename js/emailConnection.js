// contact form connect with smtp js
function sendmail() {
  var name = $("#name").val();
  var email = $("#email").val();
  var message = $("#message").val();

  var Body =
    "Name: " + name + "<br>Email: " + email + "<br>Message: " + message;
  console.log(name, email, message);

  Email.send({
    Host: "smtp.gmail.com",
    Username: "mr.hamxa942@gmail.com",
    Password: "F8156E38E70FF854ED0000E27FE4BFA074B3",
    To: "hamzakhattak727@gmail.com",
    From: "mr.hamxa942@gmail.com",
    Subject: "This is the subject",
    Body: Body,
  }).then((message) => {
    //console.log (message);
    if (message == "OK") {
      alert("Your mail has been send. Thank you for connecting.");
    } else {
      console.error(message);
      alert("There is error at sending message. ");
    }
  });
}
