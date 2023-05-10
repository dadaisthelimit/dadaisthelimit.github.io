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
  
  // Add submit button function
  function confirmSubmit(event) {
    event.preventDefault(); // prevent the default form submission behavior
    
    var confirmation = confirm("Are you sure you want to submit the form?");
    if (confirmation) {
      // submit the form
      document.getElementById("myForm").submit();
      
      // reset the form
      document.getElementById("myForm").reset();
      
      // display a success message
      alert("Form submitted successfully!");
      
      // return to the top of the page
      window.scrollTo(0, 0);
    }
    return confirmation;
  }
});
