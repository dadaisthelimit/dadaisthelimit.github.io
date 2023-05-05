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

document.getElementById("submit-btn").addEventListener("click", function(event){
    event.preventDefault();
    alert("Thank you for your message, we'll get back to you withing 24 hours!");
  });
  