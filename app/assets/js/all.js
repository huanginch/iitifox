// animation after ready
$(document).ready(() => {

  // section load animation
  // web size animation
  if (window.matchMedia("(min-width: 992px)").matches) {
    $("#profile").css({ "left": -350, "opacity": 0});
    $("#profile").animate({ left: 0, opacity: 1 }, 2000);

    $("#fan").css({ "right": -350, "opacity": 0});

    // scroll animation
    $(window).scroll(function () {
      $("#fan").animate({ right: 0, opacity: 1 }, 2000);
    })
  }
  else {
    // pad and phone size animation
    $("#profile").css({ "opacity": 0, "top": "-=100"});
    $("#profile").animate({top: 0, opacity: 1 }, 2000);

    $("#fan").css({ "opacity": 0, "top": "-=100" });

    $(window).scroll(function () {
      $("#fan").animate({ top: 0, opacity: 1 }, 2000);
    })
  }

  // hambar open animation
  $('.menu-btn').click(function (e) {
    e.preventDefault();
    $('.navbar-list').toggleClass('show');
  });

  // navbar scroll animation
  var title_offset = 100

  $('h1').on('click', function () {
    $("html,body").animate(
      {
        scrollTop: 0 //回到第一個區塊
      },
      800
    );
  })
  //其它連到對應區塊
  $(".navbar-list a").on("click", function () {
    var hrefLink = $(this).attr("href");
    console.log(hrefLink);
    $("html,body").animate(
      {
        scrollTop: $(hrefLink).offset().top - title_offset//直接到相對位置，再減掉標題的位置
      },
      800
    );
  });

  // slick carousel
  $('.event-cards').slick({
    dots: true,
    infinite: false,
    arrows: false,
    speed: 300,
    slidesToShow: 4,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 992,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          dots: false,
        }
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
        }
      },
    ]
  });
});

// hambar close animation
$('.navbar-list li a').click(function (e) {
  $('.navbar-list').removeClass('show');
})

// swiper
const swiper = new Swiper('.swiper', {
  // Optional parameters
  effect: "Fade",
  loop: true,
  slidesPerView: 1,
  centeredSlides: true,
  spaceBetween: 10,
  breakpoints: {
    767: {
      spaceBetween: 50,
    },
    995: {
      spaceBetween: 100,
    }
  },

  // If we need pagination
  pagination: {
    el: '.swiper-pagination',
    clickable: true,
  },

  // Navigation arrows
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
});