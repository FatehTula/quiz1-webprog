document.addEventListener("DOMContentLoaded", function() {
    // Mencari elemen kotak profil di halaman
    const profileBox = document.querySelector('.profile-box');
    
    // Jika kotak profil ditemukan, jalankan animasi
    if (profileBox) {
        // Atur posisi awal (transparan dan agak ke bawah)
        profileBox.style.opacity = '0';
        profileBox.style.transform = 'translateY(30px)';
        profileBox.style.transition = 'all 0.8s ease-out';
        
        // Memunculkan kotak setelah jeda singkat (200 milidetik)
        setTimeout(() => {
            profileBox.style.opacity = '1';
            profileBox.style.transform = 'translateY(0)';
        }, 200);
    }
});