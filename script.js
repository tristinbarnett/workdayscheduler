$(document).ready(function () {
    var currentHour = moment().hours();

    function displayDate() {
        var date = moment().format("dddd, MMMM Do");
        $("#currentDay").html(date);
    }
    displayDate();

    $(".timeRow").each(function () {
        var rowHour = parseInt($(this).attr("data-hour"));

        if (rowHour < currentHour) {
            $(this).addClass("past");
        }
        else if (rowHour === currentHour) {
            $(this).removeClass("past");
            $(this).addClass("present");
        }
        else {
            $(this).removeClass("past");
            $(this).removeClass("present");
            $(this).addClass("future");
        }
    })


 $(".saveBtn").click(function(){
     var textLocation = $(this).attr("data-value");
     console.log(textLocation);
    var textInput = $(this).prev().val();
    localStorage.setItem('textBox'+textLocation, JSON.stringify(textInput));
 })

});