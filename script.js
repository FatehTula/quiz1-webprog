document.addEventListener("DOMContentLoaded", function() {
    // Mencari elemen pembungkus teks judul di halaman utama
    const boxTitle = document.querySelector('.box-title');
    
    if (boxTitle) {
        // Mengatur posisi awal (transparan dan agak turun ke bawah)
        boxTitle.style.opacity = '0';
        boxTitle.style.transform = 'translateY(40px)';
        boxTitle.style.transition = 'all 1s ease-out';
        
        // Memunculkan elemen dengan mulus setelah halaman selesai dimuat
        setTimeout(() => {
            boxTitle.style.opacity = '1';
            boxTitle.style.transform = 'translateY(0)';
        }, 200);
    }
});