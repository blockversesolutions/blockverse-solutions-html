
jQuery(document).ready(function ($) {
    // menu bg add
    function checkScroll() {
      if ($(window).scrollTop() > 50) {
          $(".header-area").addClass("menu-bg");
      } else {
          $(".header-area").removeClass("menu-bg");
      }
    }
    // testimonial slider 
    $('.testimonial-slider').slick({
      slidesToShow: 1,
      slidesToScroll: 1,
      autoplay: true,
      autoplaySpeed: 4000,
      arrows: false,
      dots: true,
      infinite: true,
      });

    $(document).on("click", function (event) {
      const $div = $("#outside-click");
      const $navbarText = $("#navbarText");
      if (!$div.is(event.target) && $div.has(event.target).length === 0) {
        $navbarText.removeClass("show");
      }
    });
    // Run on page load
    $(document).ready(function () {
      checkScroll();
    });
    // Run on scroll
    $(window).on("scroll", function () {
      checkScroll();
    });
})
 
 
// loader
$(window).on("load", function () {
  $("#preloader").fadeOut();
  $("#preloader").delay(500).fadeOut("slow");
  $("body").delay(500).css({ opacity:1 });
 });
 
