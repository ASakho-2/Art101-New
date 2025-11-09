
var count = 0;
let colorCount=0;
var colors = ["Orchid", "Coral", "HotPink", "Plum"]; 
function makeImage(imageName){
if ( colors[colorCount] == imageName ) {
        $("body").append("<img width=50 src= '../Images/"+ imageName+".png' >");
}
}

function bcolor(newColor){
 $("body").css("background-color", newColor);
}

$(".color-button").click( function(){
bcolor(this.id);
});

function returnMood(mCount){
    let mood = "";
    if ( mCount < 5) { mood = "recens et felix" ; }
    else if ( (mCount >=5) && (mCount <10 )) { mood="ut propellentibus"; }
    else { mood = "tam defessus" ; }
    return mood;
}
//Creates a new button for another color, like red, yellow, blue, etc. when 'needy-button' is clicked
function Colnew(){
    if(("#needybutton").click()){}

}

$("#needy-button").click(function () {
    moodMessage = returnMood(count);
    $("#needy-button").html( "CLicks: " + count + " Color: " + colors[colorCount] + " " + moodMessage); 
    bcolor(colors[colorCount]);
    makeImage("bucket-cat");
    count = count + 1;
    colorCount = colorCount + 1;
    if ( colorCount == 4 ) {  colorCount=0;  }
});

