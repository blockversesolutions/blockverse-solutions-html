anime({
    targets: '.tag',
    translateX: function() {
      return anime.random(-60, 60);
    },
    translateY: function() {
      return anime.random(-30, 30);
    },
    rotate: function() {
      return anime.random(-10, 10);
    },
    duration: 3000,
    easing: 'easeInOutSine',
    loop: true,
    direction: 'alternate',
    delay: function(el, i) {
      return i * 100; // Stagger the animation
    }
  });

  // Hover effect using anime.js
  document.querySelectorAll('.tag').forEach(tag => {
    tag.addEventListener('mouseenter', () => {
      anime({
        targets: tag,
        scale: 1.1,
        rotate: anime.random(-15, 15),
        duration: 300,
        easing: 'easeInOutQuad'
      });
    });

    tag.addEventListener('mouseleave', () => {
      anime({
        targets: tag,
        scale: 1,
        rotate: 0,
        duration: 300,
        easing: 'easeInOutQuad'
      });
    });
  });