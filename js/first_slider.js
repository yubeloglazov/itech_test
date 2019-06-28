function changeSlide(slide_index) {
    $(".first_slider_button").removeClass('active');
    $("#first_slider ul li").removeClass('active');
    $(".first_slider_button").eq(slide_index).addClass('active');
    $("#first_slider ul li").eq(slide_index).addClass('active');
}
/*
function nextSlide() {
    var index = $(".first_slider_button.active").index();
    index++;
    index = index % 3;
    changeSlide(index);
}

setInterval(nextSlide, 3000);
*/
$(function(){
    $(".first_slider_button").click(function() {
        //console.log($(this).index());
        changeSlide($(this).index());
    });
});


