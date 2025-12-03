const contactForm = document.getElementById('contactForm');

contactForm.addEventListener('submit', function(e) {
    e.preventDefault();

    contactForm.style.display = 'none';
    document.getElementById('contactSuccess').style.display = 'block';

    setTimeout(() => {
        window.location.href = 'index.html';
    }, 3000);
});