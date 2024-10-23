// Smooth scroll effect
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function(e) {
    e.preventDefault();
    document.querySelector(this.getAttribute('href')).scrollIntoView({
      behavior: 'smooth'
    });
  });
});

// Form Submission (you can extend this with a real back-end or email API)
document.getElementById('contact-form').addEventListener('submit', function(e) {
  e.preventDefault();
  alert('Thank you for reaching out!');
});

// Project click animation
function showProject(card) {
  card.classList.add('animate');
  setTimeout(() => {
    window.location.href = "project-details.html";  // Replace with your project page link
  }, 1000);  // Time for the animation before redirect
}
