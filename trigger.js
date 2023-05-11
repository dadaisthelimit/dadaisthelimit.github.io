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

$(document).ready(function() {
  // Toggle mobile navbar
  $(".navbar-toggler").click(function() {
    $(".navbar-collapse").slideToggle(200);
  });
}
  // Add submit button function
  const form = document.getElementById('form');

  form.addEventListener('submit', (event) => {
    event.preventDefault();
    const yourName = document.getElementById('name').value;
    const yourEmail = document.getElementById('email').value;
    console.log(yourName);
    console.log(yourEmail);
  });


  