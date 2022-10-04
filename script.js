//load html and css first
$(document).ready(function () {
  //display current day of week, month, and date
  var dayWeek = moment().format("dddd, MMMM Do ");
  $("#today").text(dayWeek);

  $(".saveBtn").addEventListener("click", function () {
    //assign save button listening for the user input
    $(".saveBtn").on("click", function () {
      var text = $(this).siblings(".description").val(); // taken the change from the sibling html description attribute
      var time = $(this).parent().attr("#today"); // taken the change from the parent html id attribute

      //set localStorage

      localStorage.setItem(time, text);
    });

    $("#hour9 .description").val(localStorage.getItem("hour9"));
    $("#hour10 .description").val(localStorage.getItem("hour10"));
    $("#hour11.description").val(localStorage.getItem("hour11"));
    $("#hour12 .description").val(localStorage.getItem("hour12"));
    $("#hour1 .description").val(localStorage.getItem("hour1"));
    $("#hour2 .description").val(localStorage.getItem("hour2"));
    $("#hour3 .description").val(localStorage.getItem("hour3"));
    $("#hour4 .description").val(localStorage.getItem("hour4"));
    $("#hour5 .description").val(localStorage.getItem("hour5"));

    // function timeTracker (){
    //   var currentTime = moment().hour();

    //   for(var i=0; i > time-block.length; i++)
  });
});
