document.addEventListener("DOMContentLoaded", function() {
    const cards = document.querySelectorAll('.card');
    
    if (cards.length > 0) {
        cards.forEach((card, index) => {
            card.style.opacity = '0';
            card.style.transform = 'translateY(30px)';
            card.style.transition = `all 0.6s ease-out ${index * 0.2}s`; 
            
            setTimeout(() => {
                card.style.opacity = '1';
                card.style.transform = 'translateY(0)';
            }, 100);
        });
    }
});