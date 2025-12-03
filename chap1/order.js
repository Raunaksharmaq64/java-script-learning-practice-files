const pagesInput = document.getElementById('pages');
const totalPriceElement = document.getElementById('totalPrice');
const orderForm = document.getElementById('orderForm');

const urlParams = new URLSearchParams(window.location.search);
const preSelectedSubject = urlParams.get('subject');
if (preSelectedSubject) {
    document.getElementById('subject').value = preSelectedSubject;
}

function updatePrice() {
    const pages = parseInt(pagesInput.value) || 1;
    const price = pages * 10;
    totalPriceElement.textContent = `₹${price}`;
}

pagesInput.addEventListener('input', updatePrice);

orderForm.addEventListener('submit', function(e) {
    e.preventDefault();

    orderForm.style.display = 'none';
    document.getElementById('successMessage').style.display = 'block';

    setTimeout(() => {
        window.location.href = 'index.html';
    }, 3000);
});

updatePrice();