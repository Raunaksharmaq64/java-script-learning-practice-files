let selectedSubject = '';

function openSubject(subjectName) {
    selectedSubject = subjectName;
    document.getElementById('modalSubject').textContent = subjectName;
    document.getElementById('subjectModal').style.display = 'block';
}

function closeModal() {
    document.getElementById('subjectModal').style.display = 'none';
}

function orderService(serviceType) {
    window.location.href = `order.html?subject=${encodeURIComponent(selectedSubject)}&type=${serviceType}`;
}

window.onclick = function(event) {
    const modal = document.getElementById('subjectModal');
    if (event.target === modal) {
        closeModal();
    }
}