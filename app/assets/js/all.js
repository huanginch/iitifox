// animation after ready
$(document).ready(() => {

  // section load animation
  // web size animation
  if (window.matchMedia("(min-width: 992px)").matches) {
    $("#profile").css({ "opacity": 0});
    $("#profile").animate({ left: 0, opacity: 1 }, 2000);

    $("#short").css({ "opacity": 0});
    $("#spot").css({ "opacity": 0});

    // scroll animation
    $(window).scroll(function () {
      var topDivHeight = $("#profile").height();
      var viewPortSize = $(window).height();
      var lastDivHeight = $("#short").height() + viewPortSize - 500;

      var triggerHeight = (topDivHeight - viewPortSize);

      if ($(window).scrollTop() >= triggerHeight && $(window).scrollTop() <= lastDivHeight) {
        $("#short").animate({ opacity: 1 }, 2000);

      }
      else {
        $("#spot").animate({ opacity: 1 }, 2000);
      }
    })
  }
  else {
    // pad and phone size animation
    $("#profile").css({ "opacity": 0, "top": "-=100"});
    $("#profile").animate({top: 0, opacity: 1 }, 2000);

    $("#short").css({ "opacity": 0, "top": "-=100" });
    $("#spot").css({ "opacity": 0, "top": "-=50" });

    $(window).scroll(function () {
      var topDivHeight = $("#profile").height();
      var viewPortSize = $(window).height();
      var lastDivHeight = $("#short").height() + viewPortSize - 500;

      // var triggerAt = 0;
      var triggerHeight = (topDivHeight - viewPortSize); // + triggerAt;

      if ($(window).scrollTop() >= triggerHeight && $(window).scrollTop() <= lastDivHeight) {
        $("#short").animate({ top: 0, opacity: 1 }, 2000);

      }
      else {
        $("#spot").animate({ top: 0, opacity: 1 }, 2000);
      }
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

  // owl-carousel plugin
  $('.owl-carousel').owlCarousel({
    loop: true,
    margin: 10,
    nav: true,
    responsive: {
      0: {
        items: 1
      },
      768: {
        items: 2
      },
      // 992: {
      //   items: 2
      // }
    }
  })
});

// hambar close animation
$('.navbar-list li a').click(function (e) {
  $('.navbar-list').removeClass('show');
})

// $body = $("body");

  // $(window).load({
  //   ajaxStart: function () { $body.addClass("loading"); },
  //   ajaxStop: function () { $body.removeClass("loading"); }
  // });