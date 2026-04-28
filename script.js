$(document).ready(function () {

  // Button 1: Change Style
  $("#btn1").click(function () {
    $("#mainHeading").toggleClass("highlight");
    $("#mainParagraph").text("The content has been changed using jQuery!");
  });

  // Button 2: Hide/Show paragraph
  $("#btn2").click(function () {
    $("#mainParagraph").toggle();
  });

});