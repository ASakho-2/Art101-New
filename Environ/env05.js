//RIDDLE
let ridd = {
    brainwaves: "WIRES CROSSED ENDLESSLY LOOPING",
    fired: "BURNT CIRCUITS: ALWAYS HOME, YET LIGHTS ARE DIM",
    hands: "THE HANDS OF APATHY & -- --- - .. ...- .- - .. --- -. , REACH FOR THE CONTROL",
    cloud: "FUZZY BLACKS & WHITES CLOUDING WHAT'S BEHIND THE SCREEN",
    screen: "A GLASS LABYRINTH: NOT SOLVED, BUT BROKEN THROUGH "
};
let crid = "<p>A W8RN1N6: " + ridd.brainwaves + " | " + ridd.fired + " | " + ridd.hands + " | " + ridd.cloud + " | " + ridd.screen + "</p>";
$("#output").html(crid);
//STYLING
const sy = document.getElementById("output");
//VARIABLES/CONSTANTS
var cLickR = 0;
var creAte = [" ", "-- .- -.- .", "-.. .. ... -.-. --- ...- . .-.", ". -..- .--. . .-. .. -- . -. -", ".--. --- -. -.. . .-.", "-.-. .-. . .- - ."];
var stationary = 0;
const pics = document.querySelectorAll(".hAnd");
const bTons = [
    document.getElementById("sd"),
    document.getElementById("passion")
];
//FUNCTIONS

$(".morse").click(function () {
    cLickR = cLickR + 1;
    $(".morse").html(creAte[cLickR]);
    powerButton();
});
function changeBackground(iName) {
    $("body").css("background-image", "url('../Images/" + iName + ".gif')");
}
function powerButton(){
if(cLickR == 6){
    pics.forEach(pics => pics.style.display = 'none');
    bTons.forEach(bTons => bTons.style.display = 'none');
    document.getElementById("output").style.display = 'none';
    changeBackground("Panic");
}
}
$(".bp").click(function () {
    stationary = stationary + 1;
    $(".bp").html("-... . / .--. .-. --- -.. ..- -.-. - .. ...- . | -.-. .-. . .- - .<br> ATT3MPT5: " + stationary);
    if (stationary == 10) {
        changeBackground("darkeye");
    }
    else if (stationary == 20) {
        changeBackground("watching");
    }
    else if (stationary == 30) {
        changeBackground("repeatingbw");
    }
});


