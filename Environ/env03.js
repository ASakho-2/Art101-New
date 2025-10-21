//RIDDLE
let ridd = {
    brainwaves: "WIRES CROSSED ENDLESSLY LOOPING",
    fired: "BURNT CIRCUITS: ALWAYS HOME, YET LIGHTS ARE DIM",
    hands: "THE HANDS OF APATHY & -- --- - .. ...- .- - .. --- -. , REACH FOR THE CONTROL",
    cloud: "FUZZY BLACKS & WHITES CLOUDING WHAT'S BEHIND THE SCREEN",
    screen: "A GLASS LABYRINTH: NOT SOLVED, BUT BROKEN THROUGH "
};
let crid = "<p>A W8RN1N6: "+ ridd.brainwaves +" | "+ ridd.fired +" | "+ ridd.hands +" | "+ ridd.cloud +" | "+ ridd.screen +"</p>";
$("#output").html(crid);
//STYLING
const sy = document.getElementById("output");
//BUTTONS
let cLickR = 0;
let creAte = [" ","-- .- -.- .","-.. .. ... -.-. --- ...- . .-.",". -..- .--. . .-. .. -- . -. -",".--. --- -. -.. . .-.", "-.-. .-. . .- - ."];
$("#one").click(function() {
cLickR = cLickR + 1;
let aTt = "ATTEMPTS: ";
let comBine = aTt + cLickR;
$("#one").html(creAte[cLickR]);
})

$("#two").click(function() {
cLickR = cLickR + 1;
let aTt = "ATTEMPTS: ";
let comBine = aTt + cLickR;
$("#two").html(creAte[cLickR]);
})

$("#three").click(function() {
cLickR = cLickR + 1;
let aTt = "ATTEMPTS: ";
let comBine = aTt + cLickR;
$("#three").html(creAte[cLickR]);
})

$("#four").click(function() {
cLickR = cLickR + 1;
let aTt = "ATTEMPTS: ";
let comBine = aTt + cLickR;
$("#four").html(creAte[cLickR]);
})

$("#five").click(function() {
cLickR = cLickR + 1;
let aTt = "ATTEMPTS: ";
let comBine = aTt + cLickR;
$("#five").html(creAte[cLickR]);
})
