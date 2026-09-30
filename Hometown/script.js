document.addEventListener("DOMContentLoaded", function() {
    const hometownBox = document.querySelector('.hometown-box');
    
    if (hometownBox) {
        hometownBox.style.opacity = '0';
        hometownBox.style.transform = 'translateY(40px)';
        hometownBox.style.transition = 'all 0.8s ease-out';
        
        setTimeout(() => {
            hometownBox.style.opacity = '1';
            hometownBox.style.transform = 'translateY(0)';
        }, 150);
    }
});
