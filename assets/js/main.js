
jQuery(document).ready(function ($) {
    // menu bg add
    function checkScroll() {
      if ($(window).scrollTop() > 50) {
          $(".header-area").addClass("menu-bg");
      } else {
          $(".header-area").removeClass("menu-bg");
      }
    }
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
// loader
$(window).on("load", function () {
  $("#preloader").fadeOut();
  $("#preloader").delay(500).fadeOut("slow");
  $("body").delay(500).css({ opacity:1 });
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
var autoTabInterval = setInterval(autoChangeTab,3000);
// Stop auto change on user click, restart after inactivity
for (let i = 0; i < tablinks.length; i++) {
    tablinks[i].addEventListener("click", function () {
        clearInterval(autoTabInterval);
        autoTabInterval = setInterval(autoChangeTab,10000);
    });
}
// Open the default tab initially
document.getElementById("defaultOpen").click();
