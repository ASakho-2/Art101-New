
var count = 0;
let colorCount=0;
var colors = ["Orchid", "Coral", "HotPink", "Plum"]; 
function makeImage(imageName){
if ( colors[colorCount] == imageName ) {
        $("body").append("<img width=50 src= '../Images/"+ imageName + ".png' >");
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
    if ( mCount < 5) { mood = "resh-fay nd-aay appy-hay" ; }
    else if ( (mCount >=5) && (mCount <10 )) { mood="eep-kay ushing-pay"; }
    else { mood = "o-say ired-tay" ; }
    return mood;
}
$("#needy-button").click(function () {
    moodMessage = returnMood(count);
    $("#needy-button").html( "Licks-cay: " + count + " Olor-cay: " + colors[colorCount] + " " + moodMessage); 
    bcolor(colors[colorCount]);
    makeImage("bucket-cat");
    count = count + 1;
    colorCount = colorCount + 1;
    if ( colorCount == 4 ) {  colorCount=0;  }
});

