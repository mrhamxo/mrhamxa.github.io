// contact form connect with smtp js
// function sendmail() {
//   var name = $("#name").val();
//   var email = $("#email").val();
//   var message = $("#message").val();

//   var Body =
//     "Name: " + name + "<br>Email: " + email + "<br>Message: " + message;
//   console.log(name, email, message);

//   Email.send({
//     Host: "smtp.gmail.com",
//     Username: "mr.hamxa942@gmail.com",
//     Password: "F8156E38E70FF854ED0000E27FE4BFA074B3",
//     To: "hamzakhattak727@gmail.com",
//     From: "mr.hamxa942@gmail.com",
//     Subject: "This is the subject",
//     Body: Body,
//   }).then((message) => {
//     //console.log (message);
//     if (message == "OK") {
//       alert("Your mail has been send. Thank you for connecting.");
//     } else {
//       console.error(message);
//       alert("There is error at sending message. ");
//     }
//   });
// }


// connecting contact form with google sheet
jQuery("#formSubmit").on("submit", function (e) {
  e.preventDefault();
  jQuery("#success_message").html("Please wait...");
  jQuery("#btnSubmit").attr("disabled", true);
  jQuery.ajax({
    url: "https://script.google.com/macros/s/AKfycbwLhSs55N47dXOlZEA4l-6hakOchLjG5blU1D651smA9FJ8P1i2PRetjMywMTep3ZDq/exec",
    type: "post",
    data: jQuery("#formSubmit").serialize(),
    success: function (result) {
      jQuery("#formSubmit")[0].reset();
      jQuery("#success_message").html("Thank You");
      jQuery("#btnSubmit").attr("disabled", false);
    },
  });
});
