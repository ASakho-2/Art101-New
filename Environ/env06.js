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
let garN = new Audio('../Audio/GarbageNoise.mp3');
let someThing = new Audio('../Audio/OSomething.mp3');
const arco = document.getElementById("Actrack");
const arac = document.getElementById("Artrack");
const thal = document.getElementById("Thtrack");
const OST = document.getElementById("OStrack");
const stic = document.getElementById("Static");
const pics = document.querySelectorAll(".hAnd");
const bTons = [
    document.getElementById("sd"),
    document.getElementById("passion")
];
//FUNCTIONS
    //BackgroundMusic
function backgroundMusic(song){
    song.play();
}
backgroundMusic(arco);
    //Morse
$(".morse").click(function () {
    cLickR = cLickR + 1;
    $(".morse").html(creAte[cLickR]);
    powerButton();
});
$(".morse").hover(
    function() {garN.play();
        garN.volume = 0.5;
        garN.loop = true;
     },
    function() {garN.pause(); }
);
    //ChangeBackground
function changeBackground(iName) {
    $("body").css("background-image", "url('../Images/" + iName + ".gif')");
    }

    //PowerButton
function powerButton(){
if(cLickR == 6){
    pics.forEach(pics => pics.style.display = 'none');
    bTons.forEach(bTons => bTons.style.display = 'none');
    document.getElementById("output").style.display = 'none';
    changeBackground("Panic");
    backgroundMusic(stic);
    arco.pause();
    arac.pause();
    thal.pause();
    OST.pause();
}
}
    //BP
$(".bp").click(function () {
    stationary = stationary + 1;
    $(".bp").html("-... . / .--. .-. --- -.. ..- -.-. - .. ...- . | -.-. .-. . .- - .<br> ATT3MPT5: " + stationary);
    if (stationary == 10) {
        changeBackground("darkeye");
        backgroundMusic(arac);
        arco.pause();
    }
    else if (stationary == 20) {
        changeBackground("watching");
        backgroundMusic(thal);
        arac.pause();
    }
    else if (stationary == 30) {
        changeBackground("repeatingbw");
        backgroundMusic(OST);
        thal.pause();
    }
});
$(".bp").hover(
    function() {someThing.play();
        someThing.loop = true;
     },
    function() {someThing.pause(); }
);


