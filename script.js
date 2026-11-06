const themeBtn = document.getElementById('theme-btn');
const body = document.body;
const card = document.querySelector('.card');

themeBtn.addEventListener('click', function() {
    // Toggle (nyalakan/matikan) class 'dark-mode'
    body.classList.toggle('dark-mode');
    card.classList.toggle('dark-mode');

    // Mengubah teks pada tombol sesuai dengan mode yang aktif
    if (body.classList.contains('dark-mode')) {
        themeBtn.textContent = 'Tema Terang';
    } else {
        themeBtn.textContent = 'Tema Gelap';
    }
});