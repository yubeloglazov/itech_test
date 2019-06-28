$(function(){
    $("#modal_window_button").click(function() {
        $("#message_window").addClass('active');
    });
    $("#modal_close").click(function() {
        $("#message_window").removeClass('active');
    });
});


