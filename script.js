document.addEventListener("DOMContentLoaded", function() {
    const boxTitle = document.querySelector('.box-title');
    
    if (boxTitle) {
        boxTitle.style.opacity = '0';
        boxTitle.style.transform = 'translateY(40px)';
        boxTitle.style.transition = 'all 1s ease-out';
        
        setTimeout(() => {
            boxTitle.style.opacity = '1';
            boxTitle.style.transform = 'translateY(0)';
        }, 200);
    }
});
