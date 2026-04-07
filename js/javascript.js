document.addEventListener('DOMContentLoaded', () => {

    // 1. Ring Interaction & Hover Effects
    const interactiveElements = document.querySelectorAll('.nav-item, .review-card');
    
    interactiveElements.forEach(el => {
        el.addEventListener('mouseenter', () => {
            cursor.style.transform = 'translate(-50%, -50%) scale(1.5)';
            cursor.style.backgroundColor = 'rgba(255, 140, 0, 0.1)';
        });
        el.addEventListener('mouseleave', () => {
            cursor.style.transform = 'translate(-50%, -50%) scale(1)';
            cursor.style.backgroundColor = 'transparent';
        });
    });

    // 2. Click effect for the cards
    const cards = document.querySelectorAll('.review-card');
    cards.forEach(card => {
        card.addEventListener('click', () => {
            cards.forEach(c => c.classList.remove('clicked'));
            card.classList.add('clicked');
        });
    });

    // 3. Navigation Item Active State
    const navItems = document.querySelectorAll('.nav-item');
    navItems.forEach(item => {
        item.addEventListener('click', () => {
            navItems.forEach(i => i.classList.remove('active'));
            item.classList.add('active');
        });
    });
});