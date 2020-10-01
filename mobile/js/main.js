$(function () {
  //메인화면
  if ($(".main_slide_wrapper").length) {
    var swiper = new Swiper(".main_slide_container", {
      slidesPerView: 1,
      spaceBetween: 25,
      width: 270,
      pagination: {
        el: ".swiper-pagination",
        clickable: true,
      },
    });
  }
  //홈 카테고리 슬라이드
  if ($(".category_menus").length) {
    // var menuswiper = new Swiper('.category_menus', {
    //     slidesPerView: 2.5,
    //     spaceBetween: 27
    // });

    $(".swiper-wrapper").slick({
      dots: false,
      arrows: false,
      infinite: true,
      speed: 300,
      slidesToShow: 1,
      centerMode: false,
      variableWidth: true,
    });
  }
  //히스토리 뒤로가기
  $(".go_back").click(function (e) {
    e.preventDefault();

    if (window.history.length > 1) {
      window.history.back();
    } else {
      location.href = "./index.html";
    }
  });

  //Aside Menu
  if ($(".aside_menu_toggle").length) {
    var asideToggleBtn = $(".aside_menu_toggle");

    asideToggleBtn.click(function () {
      $("body").toggleClass("aside_active");
    });

    //Aside Menu Accodion
    var asideMenuList = $(".categories > li");
    asideMenuList.click(function () {
      $(this).find("ul").slideToggle();
      $(this).siblings("li").find("ul").slideUp();
    });
  }

  //상세페이지 썸네일 슬라이드
  if ($(".product_thumb_slides").length) {
    var swiper = new Swiper(".product_thumb_container", {
      slidesPerView: 2.5,
      spaceBetween: 13,
    });

    //이미지 변경하기
    var thumbImg = $(".product_thumb_slides li img");
    var tartgetImg = $(".product_img_top img");

    thumbImg.click(function () {
      var targetImgUrl = $(this).attr("src");
      tartgetImg.attr("src", targetImgUrl);
    });
  }

  //상세페이지 별표
  if ($(".review_content").length) {
    var rating = $(".review_content li .rating");

    /*
            rating 마다 할일
                각각이 가지고 있는 별점을 변수명 starscore 3에 저장한다.
                svg nth:child 몇번째 1 ~ 3번째 
                color를 F05522로 변경한다.
        */
    rating.each(function () {
      var starscore = $(this).attr("data-rate");
      $(this)
        .find("svg:nth-child(-n+" + starscore + ")")
        .css({ color: "#F05522" });
    });
  }

  //장바구니 합계 구하기
  if ($(".cart_list").length) {
    var cartList = $(".cart_list li");
    var tartgetTotal = $(".total_price .price");
    var shippingCost = parseInt($(".shipping .price").text().replace("$ ", ""));
    var totalprice = 0;
    var itemDelBtn = cartList.find(".cart_item_del");

    //열리자 마자 합계 다시 계산
    calcTotal();

    //수량을 바꾸면 합계 다시 계산
    $(".qty input").change(calcTotal);

    //x눌러서 item삭제 합계 다시 계산
    itemDelBtn.click(function () {
      var userAction = confirm("정말로 지울건가요?");
      if (userAction) {
        $(this).parent().remove();
        calcTotal();
      }
    });

    //합계구하기 함수
    function calcTotal() {
      cartList = $(".cart_list li");
      console.log(cartList.length);
      totalprice = 0;

      if (cartList.length > 0) {
        cartList.each(function () {
          var unitPrice = parseInt(
            $(this).find(".unit_price").text().replace("$ ", "")
          );
          var unitCount = $(this).find("input").val();

          //totalprice = totalprice + (unitPrice * unitCount);
          totalprice += unitPrice * unitCount;
          var subtotal =
            (totalprice + shippingCost).toLocaleString("en") + ".00";
          var grandTotal = "$ " + subtotal;

          tartgetTotal.text(grandTotal);
        });
      } else {
        tartgetTotal.text("$ 0.00");
      }
    } //calcTotal
  } //장바구니 합계 구하기 끝

  //검색
}); //document.ready
