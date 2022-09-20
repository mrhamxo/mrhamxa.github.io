// display loader before page loads
(function () {
  $(window).load(function () {
    $("#pre-status").fadeOut();
    $("#preloader").delay(350).fadeOut("slow");
  });
})();
