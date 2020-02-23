$(document).ready(function () {
    var currentHour = moment().hours();
    var loopArray = [{
        location: "firstBox",
        hour: "9"
    },{
        location: "secondBox",
        hour: "10"
    },{
        location: "thirdBox",
        hour: "11"
    },{
        location: "fourthBox",
        hour: "12"
    },{
        location: "fifthBox",
        hour: "13"
    },{
        location: "sixthBox",
        hour: "14"
    },{
        location: "seventhBox",
        hour: "15"
    },{
        location: "eigthBox",
        hour: "16"
    },{
        location: "ninthBox",
        hour: "17"
    }];

    function displayDate() {
        var date = moment().format("dddd, MMMM Do");
        $("#currentDay").html(date);
    }
    displayDate();
    getItems();

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


    $(".saveBtn").click(function () {
        var textLocation = $(this).attr("data-value")
        var textInput = $(this).prev().val();
        localStorage.setItem(textLocation, JSON.stringify(textInput));
    })


    function getItems() {
        console.log(loopArray);
        for (i = 0; i < loopArray.length; i++) {
            var localStorageItem = JSON.parse(localStorage.getItem(loopArray[i].location));
            console.log(localStorageItem);
            if (localStorageItem !== null) {
                $("[data-hour=" + loopArray[i].hour + "]").text(localStorageItem);
            }
        }
    }
});