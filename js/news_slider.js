function changeNewsSlide(slide_index) {
    $(".news_slider_button").removeClass('active');
    $(".news_slider_button").eq(slide_index).addClass('active');
    $("#news_items_wrapper").css('left', '-' + String(slide_index * 100) + '%');
}
function nextNewsSlide() {
    var index = $(".news_slider_button.active").index();
    index++;
    index = index % 3;
    changeNewsSlide(index);
}
function prevNewsSlide() {
    var index = $(".news_slider_button.active").index();
    index--;
    if (index < 0)
        index = 2;
    changeNewsSlide(index);
}

$(function(){
    $(".news_slider_button").click(function() {
        changeNewsSlide($(this).index());
    });
    $("#news_arrow_right").click(nextNewsSlide);
    $("#news_arrow_left").click(prevNewsSlide);
});


