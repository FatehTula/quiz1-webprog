document.addEventListener("DOMContentLoaded", function() {
    // Mencari kotak elemen hometown
    const hometownBox = document.querySelector('.hometown-box');
    
    if (hometownBox) {
        // Mengatur posisi awal kotak cerita (transparan & agak ke bawah)
        hometownBox.style.opacity = '0';
        hometownBox.style.transform = 'translateY(40px)';
        hometownBox.style.transition = 'all 0.8s ease-out';
        
        // Memunculkan kotak cerita dengan efek melayang setelah halaman dimuat
        setTimeout(() => {
            hometownBox.style.opacity = '1';
            hometownBox.style.transform = 'translateY(0)';
        }, 150);
    }
});