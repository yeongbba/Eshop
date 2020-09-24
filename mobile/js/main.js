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
    //홈 카테고리 슬라이드
    if($('.category_menus').length){

        // var menuswiper = new Swiper('.category_menus', {
        //     slidesPerView: 2.5,
        //     spaceBetween: 27           
        // });

        $('.swiper-wrapper').slick({
            dots: false,
            arrows : false,
            infinite: true,
            speed: 300,
            slidesToShow: 1,
            centerMode: false,
            variableWidth: true
        });
    }
    //히스토리 뒤로가기
    $('.go_back').click(function(e){
        e.preventDefault();

        if(window.history.length > 1){
            window.history.back();
        } else{
            location.href = './index.html';
        }        
       
    });

    //Aside Menu
    if($('.aside_menu_toggle').length){
        var asideToggleBtn = $('.aside_menu_toggle');

        asideToggleBtn.click(function(){
            $('body').toggleClass('aside_active');
        });

        //Aside Menu Accodion
        var asideMenuList = $('.categories > li');
        asideMenuList.click(function(){
            $(this).find('ul').slideToggle();
            $(this).siblings('li').find('ul').slideUp();
        });

    }
    