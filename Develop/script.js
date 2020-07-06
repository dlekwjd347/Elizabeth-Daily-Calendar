//makes the function execute after the DOM is ready
$(document).ready(function () {

    //display time function and keep it running every second
    function writeTime() {
        $('.current-time').text(moment().format('MMMM Do YYYY, h:mm:ss a'));
        setInterval(writeTime, 1000)
    }
    writeTime();

    //save new changes
    function localStorage() {
        // event.preventDefault();
        var event = $(this).closest("tr").find("input").val().trim();
        console.log(event);

        var time = $(this).closest("tr").find(".time").text();
        console.log(time);

        // var timeValue = $(this).parent().attr("id");
        // console.log("timeValue: ", timeValue);
        console.log("split time: ", time.split(" ")[0]);

        window.localStorage.setItem(time.split(" ")[0], event);

        window.location.href = "index.html";

        
    };

    //button to save event changes
    $(".btn").on("click", localStorage);
   
     
  
})


//flow functions for gray, red, and green rows depending on time relative to time blocks 
//current date and time
var m = moment();
var currentTime = m.format('MMMM Do YYYY, h:mm:ss a');
var currentDate = m.format("MMM Do YYYY");
var currentHour = moment().hours();
console.log('current hour: ', currentHour)



function updateColors() {
    var currentTime = new Date().getHours();
    for (var i = 9; i < 18; i++) {
        console.log(currentTime, $(`#${i}`).data("time"));
        if ($(`#${i}`).data("time") == currentTime) {
            $(`#text${i}`).addClass("present");
        } else if (currentTime < $(`#${i}`).data("time")) {
            $(`#text${i}`).addClass("future",);
        }
    }
}


for (let i = 9; i <=18; i++) {
    console.log("id: ",`#hour-${i} .desc`)
   $(`#hour-${i} .desc`).val(localStorage.getItem(i));
    
    
}







