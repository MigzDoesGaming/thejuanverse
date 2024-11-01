document.addEventListener('scroll', function() {
    const cards = document.querySelectorAll('.project-card'); // Use project-card class
    const windowHeight = window.innerHeight;

    cards.forEach(card => {
        const cardTop = card.getBoundingClientRect().top;

        // Check if the card is in view
        if (cardTop < windowHeight - 100) { // Adjust threshold as needed
            card.classList.add('visible');
        } else {
            card.classList.remove('visible'); // Remove the class when out of view
        }
    });
});


document.addEventListener('DOMContentLoaded', () => {
    const navItems = document.querySelectorAll('.nav-right li'); // Select nav items

    // Add the fade-in class to all nav items
    navItems.forEach(item => {
        item.classList.add('fade-in-left');
    });
});

