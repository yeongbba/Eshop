$(function(){

    //메인화면
    if($('.main_slide_wrapper').length){

        var swiper = new Swiper('.main_slide_container', {
            slidesPerView: 1,
            spaceBetween: 25,
            width:270,
            pagination: {
              el: '.swiper-pagination',
              clickable: true,
            },
        });

    }