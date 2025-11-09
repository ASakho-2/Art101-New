
//When the button is clicked (event)
$("#Ncreature").click(
    function () {
        // A variable for storing names; reach for this input field and grab the text from it
        let crName = $("#crName").val();
                //Check for the field value, do not add empty ones
        if ((crName == "") || (crName.length>20)) {
            //do nothing
        }
        else {
            $("#creature-list").append(crName + ", ");
        }
        // Remove the Name after it's added
        $("#crName").val("");
    });
