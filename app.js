// JavaScript to handle the active page
document.addEventListener('DOMContentLoaded', function() {
  let links = document.querySelectorAll('.sidebar ul li a');
  links.forEach(link => {
      link.addEventListener('click', function() {
          links.forEach(l => l.classList.remove('active'));
          this.classList.add('active');
      });
  });
});
