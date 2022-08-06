"use strict";

// animation after ready
$(document).ready(function () {
  // section load animation
  // web size animation
  if (window.matchMedia("(min-width: 992px)").matches) {
    $("#profile").css({
      "opacity": 0
    });
    $("#profile").animate({
      left: 0,
      opacity: 1
    }, 2000);
    $("#short").css({
      "opacity": 0
    });
    $("#spot").css({
      "opacity": 0
    }); // scroll animation

    $(window).scroll(function () {
      var topDivHeight = $("#profile").height();
      var viewPortSize = $(window).height();
      var lastDivHeight = $("#short").height() + viewPortSize - 500;
      var triggerHeight = topDivHeight - viewPortSize;

      if ($(window).scrollTop() >= triggerHeight && $(window).scrollTop() <= lastDivHeight) {
        $("#short").animate({
          opacity: 1
        }, 2000);
      } else {
        $("#spot").animate({
          opacity: 1
        }, 2000);
      }
    });
  } else {
    // pad and phone size animation
    $("#profile").css({
      "opacity": 0,
      "top": "-=100"
    });
    $("#profile").animate({
      top: 0,
      opacity: 1
    }, 2000);
    $("#short").css({
      "opacity": 0,
      "top": "-=100"
    });
    $("#spot").css({
      "opacity": 0,
      "top": "-=50"
    });
    $(window).scroll(function () {
      var topDivHeight = $("#profile").height();
      var viewPortSize = $(window).height();
      var lastDivHeight = $("#short").height() + viewPortSize - 500; // var triggerAt = 0;

      var triggerHeight = topDivHeight - viewPortSize; // + triggerAt;

      if ($(window).scrollTop() >= triggerHeight && $(window).scrollTop() <= lastDivHeight) {
        $("#short").animate({
          top: 0,
          opacity: 1
        }, 2000);
      } else {
        $("#spot").animate({
          top: 0,
          opacity: 1
        }, 2000);
      }
    });
  } // hambar open animation


  $('.menu-btn').click(function (e) {
    e.preventDefault();
    $('.navbar-list').toggleClass('show');
  }); // navbar scroll animation

  var title_offset = 100;
  $('h1').on('click', function () {
    $("html,body").animate({
      scrollTop: 0 //回到第一個區塊

    }, 800);
  }); //其它連到對應區塊

  $(".navbar-list a").on("click", function () {
    var hrefLink = $(this).attr("href");
    console.log(hrefLink);
    $("html,body").animate({
      scrollTop: $(hrefLink).offset().top - title_offset //直接到相對位置，再減掉標題的位置

    }, 800);
  }); // slick carousel

  $('.event-cards').slick({
    dots: true,
    infinite: false,
    arrows: false,
    speed: 300,
    slidesToShow: 4,
    slidesToScroll: 1,
    responsive: [{
      breakpoint: 992,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 1,
        dots: false
      }
    }, {
      breakpoint: 768,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
        infinite: true,
        dots: true
      }
    } // {
    //   breakpoint: 480,
    //   settings: {
    //     slidesToShow: 1,
    //     slidesToScroll: 1
    //   }
    // }
    ]
  });
}); // hambar close animation

$('.navbar-list li a').click(function (e) {
  $('.navbar-list').removeClass('show');
});
//# sourceMappingURL=all.js.map
