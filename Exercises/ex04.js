
let totalNumber = 1;
let sentE = "...please?";
let sentM = "come, ON!!";
let sentH = "DJHLFHLSDALJFSOSJJDCNC";
//add a button titled CLICK ME
$("#needy-button").click(function() {
    totalNumber = totalNumber / 7;

    let sentence = "I NEED SLEEP ";
    let Totals = sentence + totalNumber;
    $("#needy-button").html(Totals + " TIMES");
})

//once clicked the button, 
//it shows how many times it has been clicked
//add one to the total number of clicks
//show complete total on button
//show 

//a top limit or parameters


