//makes the function execute after the DOM is ready
$(document).ready(function () {
    //display time function and keep it running every second
    function writeTime() {
      $(".current-time").text(moment().format("MMMM Do YYYY, h:mm:ss a"));
      setInterval(writeTime, 1000);
    }
    writeTime();
  
    //save new changes into local storage
    function localStorage() {
      //sets the event key to the input in the input form
      var event = $(this).closest("tr").find("input").val().trim();
      console.log(event);
  
      //sets the time key to the text of the time column
      var time = $(this).closest("tr").find(".time").text();
      console.log(time);
      //calls only the index[0] of the time class text to save specifically as the key
      window.localStorage.setItem(time.split(" ")[0], event);
      //saves everything to index.html's local storage
      window.location.href = "index.html";
    }
  
    //button to save event changes
    $(".btn").on("click", localStorage);
  });
  
  //retrieves the items in local storage to display permanently on the page through the index of hours 0 - 9
  for (let i = 0; i <= 9; i++) {
    console.log("id: ", `#hour-${i} .desc`);
    $(`#hour-${i} .desc`).val(localStorage.getItem(i));
  }
  //retrieves the items in local storage to display permanently on the page through the index of hours 10 - 18
  for (let i = 9; i <= 18; i++) {
    console.log("id: ", `#hour-${i} .desc`);
    $(`#hour-${i} .desc`).val(localStorage.getItem(i));
  }
  
  //current date and time variables
  var m = moment();
  var currentTime = m.format("MMMM Do YYYY, h:mm:ss a");
  var currentDate = m.format("MMM Do YYYY");
  var currentHour = moment().hours();
  console.log("current hour: ", currentHour);
  console.log(currentTime);
  
  //color codes the form boxes contigent upon the hour of the day vs the hour of the time block hours 0 - 9
  for (var i = 0; i < 9; i++) {

    var hourForm = $(`#hour-${i}`).children().find(`input`);
    if (i < currentHour) {
      hourForm.addClass("past");
    } else if (i === currentHour) {
      hourForm.addClass("present");
    } else {
      hourForm.addClass("future");
    }
  }

  //color codes the form boxes contigent upon the hour of the day vs the hour of the time block hours 10 - 18
  for (var i = 9; i < 18; i++) {
    
    var hourForm = $(`#hour-${i}`).children().find(`input`);
    if (i < currentHour) {
      hourForm.addClass("past");
    } else if (i === currentHour) {
      hourForm.addClass("present");
    } else {
      hourForm.addClass("future");
    }
  }