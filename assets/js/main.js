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
  $(".testimonial-slider").slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 4000,
    arrows: false,
    dots: true,
    infinite: true,
  });
  // emerging-technology
  $('.emerging-technology-slider').slick({
    dots: true,          
    infinite: true,     
    speed:2200,          
    slidesToShow: 3,
    prevArrow: $('.emerging-technology-left'),
    nextArrow: $('.emerging-technology-right'),     
    slidesToScroll: 1, 
    centerPadding: '0px',  
    autoplay: false,      
    autoplaySpeed: 1500,  
    centerMode: true,
    responsive: [
      {
        breakpoint: 991,
        settings: {
          slidesToShow: 2,
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
        }
      }
    ]
  });
  // awards
  $('.awards-recognitions-slider').slick({
    dots: true,          
    infinite: true,     
    speed: 1800,          
    slidesToShow: 3,
    prevArrow: $('.awards-left'),
    nextArrow: $('.awards-right'),     
    slidesToScroll: 1, 
    autoplay: true,      
    autoplaySpeed:1800,
    responsive: [
      {
        breakpoint:1120,
        settings: {
          slidesToShow: 2,
        }
      },
      {
        breakpoint:767,
        settings: {
          slidesToShow: 1,
        }
      }
    ]  
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
});
// loader
$(window).on("load", function () {
  $("#preloader").fadeOut();
  $("#preloader").delay(500).fadeOut("slow");
  $("body").delay(500).css({ opacity: 1 });
});
  var currentIndex = 0;
  var tablinks = document.getElementsByClassName("tablinks");
  var tabcontents = document.getElementsByClassName("tabcontent");
  function operations(evt, operations_country) {
  for (let i = 0; i < tabcontents.length; i++) {
    tabcontents[i].classList.remove("active");
    tablinks[i].classList.remove("active");
  }
  let currentTab = document.getElementById(operations_country);
  currentTab.classList.add("active");
  if (evt) {
    evt.currentTarget.classList.add("active");
    currentIndex = Array.from(tablinks).indexOf(evt.currentTarget);
  } else {
    tablinks[currentIndex].classList.add("active");
  }
}
// Function to cycle tabs automatically
function autoChangeTab() {
  currentIndex = (currentIndex + 1) % tablinks.length;
  tablinks[currentIndex].click();
}
// Set interval for auto tab change every 5 seconds
var autoTabInterval = setInterval(autoChangeTab, 3000);
// Stop auto change on user click, restart after inactivity
for (let i = 0; i < tablinks.length; i++) {
  tablinks[i].addEventListener("click", function () {
    clearInterval(autoTabInterval);
    autoTabInterval = setInterval(autoChangeTab, 5000);
  });
}
// Open the default tab initially
document.getElementById("defaultOpen").click();
