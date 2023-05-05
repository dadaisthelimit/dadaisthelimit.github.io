const animationTrigger = document.querySelector('.animation-trigger');

function isElementInViewport(el) {
  const rect = el.getBoundingClientRect();
  return (
    rect.top >= 0 &&
    rect.left >= 0 &&
    rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
    rect.right <= (window.innerWidth || document.documentElement.clientWidth)
  );
}

function addAnimationClass() {
  if (isElementInViewport(animationTrigger)) {
    animationTrigger.classList.add('animate__fadeInLeft');
  }
}

window.addEventListener('scroll', addAnimationClass);

$(document).ready(function () {
    $(".navbar-toggler").click(function () {
      $(".navbar-collapse").slideToggle(200);
    });
  });

  $(document).ready(function () {
    // Add event listener to submit button
    $("#submit-btn").click(function (event) {
      event.preventDefault(); // prevent the default form submission behavior
      alert("Thank you for your message, we'll get back to you within 24 hours!"); // display confirmation message
      // Reset form
      $("#contact-form")[0].reset();
    });
  
    // Add animation to elements in viewport
    const animationTrigger = document.querySelector('.animation-trigger');
    function isElementInViewport(el) {
      const rect = el.getBoundingClientRect();
      return (
        rect.top >= 0 &&
        rect.left >= 0 &&
        rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
        rect.right <= (window.innerWidth || document.documentElement.clientWidth)
      );
    }
    function addAnimationClass() {
      if (isElementInViewport(animationTrigger)) {
        animationTrigger.classList.add('animate__fadeInLeft');
      }
    }
    window.addEventListener('scroll', addAnimationClass);
    
    // Toggle mobile navbar
    $(".navbar-toggler").click(function () {
      $(".navbar-collapse").slideToggle(200);
    });
  });
  
  
 
