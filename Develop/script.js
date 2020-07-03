//write date and time, and keep time running
function writeTime(){
    $('.current-time').text(moment().format('MMMM Do YYYY, h:mm:ss a'));
    setInterval(writeTime,1000) }
    writeTime();







//save event input
function saveEvent() {
    var event = $(".tdata").val.trim;
    // console.log(initials);
    //make sure no blank intial submission
    if (event !== "") {

        var eventInput = JSON.parse(window.localStorage.getItem("event")) || [];
        //user input storage format 
        var newEvent = {
            "Time": $(".tdata"),
            "Event": event
        };

        //adding new scores to array of high scores
        eventInput.push(newEvent);
        //add high scores to local storage
        window.localStorage.setItem("event", JSON.stringify(eventInput));
        //change url to scores page
        window.location.href = "index.html";

    }
}

//button to save event changes
$(".btn").click(function(){ saveEvent(); });