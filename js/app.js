$(document).ready(function(){

    // Interval for changing the background
    window.setInterval(changebackground, 500);


});


// Change the background function
function changebackground(){
    
    var bodycolor = $("body").css('background-color');

    //bodycolor.val("blue");
    console.log(bodycolor);
}