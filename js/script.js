
$(document).ready(function () {
    $("#123").addClass("animate__animated animate__rubberBand");
    $("#div1").hide();
    $("#btn1").click(function () {
        $("#te").remove();
        $("#div1").toggle("slow");
        });    
});
    
