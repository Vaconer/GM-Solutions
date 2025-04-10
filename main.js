document.addEventListener('DOMContentLoaded', () => {
    const faqItems = document.querySelectorAll('.faq-item');

    faqItems.forEach(item => {
        const questionButton = item.querySelector('.faq-question');

        if (questionButton) {
            questionButton.addEventListener('click', () => {
                // Fecha todos os outros itens abertos
                faqItems.forEach(otherItem => {
                    if (otherItem !== item && otherItem.classList.contains('active')) {
                        otherItem.classList.remove('active');
                    }
                });

// Scroll Reveal Animation Logic
const scrollRevealObserver = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('is-visible');
            observer.unobserve(entry.target); // Stop observing once visible
        }
    });
}, {
    root: null, // relative to document viewport
    rootMargin: '0px',
    threshold: 0.1 // trigger when 10% of the element is visible
});

document.querySelectorAll('.scroll-reveal').forEach(section => {
    scrollRevealObserver.observe(section);
});

                // Abre ou fecha o item clicado
                item.classList.toggle('active');
            });

// Scroll Reveal Animation Logic
const scrollRevealObserver = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('is-visible');
            observer.unobserve(entry.target); // Stop observing once visible
        }
    });
}, {
    root: null, // relative to document viewport
    rootMargin: '0px',
    threshold: 0.1 // trigger when 10% of the element is visible
});

document.querySelectorAll('.scroll-reveal').forEach(section => {
    scrollRevealObserver.observe(section);
});
        }
    });

// Scroll Reveal Animation Logic
const scrollRevealObserver = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('is-visible');
            observer.unobserve(entry.target); // Stop observing once visible
        }
    });
}, {
    root: null, // relative to document viewport
    rootMargin: '0px',
    threshold: 0.1 // trigger when 10% of the element is visible
});

document.querySelectorAll('.scroll-reveal').forEach(section => {
    scrollRevealObserver.observe(section);
});
});

// Scroll Reveal Animation Logic
const scrollRevealObserver = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('is-visible');
            observer.unobserve(entry.target); // Stop observing once visible
        }
    });
}, {
    root: null, // relative to document viewport
    rootMargin: '0px',
    threshold: 0.1 // trigger when 10% of the element is visible
});

document.querySelectorAll('.scroll-reveal').forEach(section => {
    scrollRevealObserver.observe(section);
});