
jQuery(document).ready(function ($) {
  if ($('.data-show-table').length) {  
    $('.data-show-table').DataTable({
        responsive: true,
        searching: false,
        ordering: false,
        info: false,
        paging: false,
    });
  }
    // menu bg add
    function checkScroll() {
      if ($(window).scrollTop() > 50) {
          $(".header-area").addClass("menu-bg");
      } else {
          $(".header-area").removeClass("menu-bg");
      }
    }
    $('.product-slider').slick({
      slidesToShow:3,
      slidesToScroll: 1,
      autoplay:false,
      arrows: true,
      centerMode: true,
      prevArrow: $('.testimonial-left'),
      nextArrow: $('.testimonial-right'),
      responsive: [ 
        {
          breakpoint:991,
          settings: {
            slidesToShow: 2,
            centerMode: false,
          },
        },
        {
          breakpoint:580,
          settings: {
            slidesToShow: 1,
            centerMode: false,
            dots:true,
          },
        },
      ],
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
function handleResize() {
  // Select all tables with the class "mobile-view-table"
  const elements = document.querySelectorAll('.mobile-view-table');
  elements.forEach((element) => {
    // Add or remove the "nowrap" class based on the window size
    if (window.innerWidth <= 991) {
      element.classList.add('nowrap');
    } else {
      element.classList.remove('nowrap');
    }
  });
}

// Run handleResize on page load and attach it to the resize event
handleResize();
window.addEventListener('resize', handleResize);
 // Smooth scroll with offset
 document.querySelectorAll('.nav-link').forEach(link => {
  link.addEventListener('click', event => {
    event.preventDefault();
    const targetId = event.currentTarget.getAttribute('data-target');
    const targetSection = document.getElementById(targetId);
    if (targetSection) {
      const offset = 120; // Adjust the gap size as needed
      const sectionPosition = targetSection.getBoundingClientRect().top + window.scrollY;
      window.scrollTo({
        top: sectionPosition - offset,
        behavior: 'smooth'
      });
    }
  });
});
// ScrollSpy: Add active class to nav links
const sections = document.querySelectorAll('section[id]'); // Ensure each section has a unique ID
const navLinks = document.querySelectorAll('.nav-link');
// IntersectionObserver setup
const observer = new IntersectionObserver(
  entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        // Highlight the corresponding nav link
        const targetId = entry.target.id;

        navLinks.forEach(link => {
          link.classList.remove('active'); // Remove active class from all links
          if (link.getAttribute('data-target') === targetId) {
            link.classList.add('active'); // Add active class to the current link
          }
        });
      }
    });
  },
  {
    threshold: 0.6, // At least 60% of the section is visible to activate it
    rootMargin: `-120px 0px 0px 0px` // Account for the offset
  }
);
// Observe all sections
sections.forEach(section => observer.observe(section));
// Activate "About" section on page load
window.addEventListener('DOMContentLoaded', () => {
  // Trigger the IntersectionObserver manually for the "About" section
  const aboutSection = document.getElementById('about');
  if (aboutSection) {
    const targetId = aboutSection.id;

    navLinks.forEach(link => {
      link.classList.remove('active'); // Remove active class from all links
      if (link.getAttribute('data-target') === targetId) {
        link.classList.add('active'); // Add active class to the "About" link
      }
    });
  }
});
window.addEventListener('load', () => {
  const preloader = document.getElementById('preloader');
  preloader.classList.add('loader-hide');
});

$('.counter').counterUp({
  delay: 20,
  time: 1500
});
