// declaring an array with name myCommutes
let myCommutes = ["Metro Bus", "UCSC Loop Bus", "My Sister & Family's Car", "My Feetsies"];
myPrimarycommute = {
mode: "Bus",
durationHrs: 2,
needtoTakeanotherBus: true,
home: "Watsonville",
likelyhoodofMiss: ["None","Somewhat","Likely", "Often", "All the time"]
};
let megaSentence = "<p>My two most used commutes are: "+ myCommutes[0] +" & "+ myCommutes[2] +"</p>";
megaSentence = megaSentence + "<p>My main commute can be described as: Home- "+ myPrimarycommute.home +", Mode- "+ myPrimarycommute.mode +", Duration-"+ myPrimarycommute.durationHrs +", Likelyhood of Missing the Bus- "+ myPrimarycommute.likelyhoodofMiss[2] +"</p>";
$("#output").html(megaSentence);