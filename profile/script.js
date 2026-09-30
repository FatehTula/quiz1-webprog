document.addEventListener("DOMContentLoaded", function() {
    const profileBox = document.querySelector('.profile-box');
    
    if (profileBox) {
        profileBox.style.opacity = '0';
        profileBox.style.transform = 'translateY(30px)';
        profileBox.style.transition = 'all 0.8s ease-out';
        
        setTimeout(() => {
            profileBox.style.opacity = '1';
            profileBox.style.transform = 'translateY(0)';
        }, 200);
    }
});
