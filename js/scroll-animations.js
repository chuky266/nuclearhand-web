/**
 * Scroll Reveal Animations - Nuclear Hand
 * Uses Intersection Observer to add 'revealed' class to elements when they enter viewport.
 */

document.addEventListener('DOMContentLoaded', () => {
    const revealOptions = {
        threshold: 0.15,
        rootMargin: "0px 0px -50px 0px"
    };

    const revealObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('revealed');
                // Once revealed, stop observing to prevent repeated animations
                observer.unobserve(entry.target);
            }
        });
    }, revealOptions);

    // Target elements with the .scroll-reveal class
    const revealElements = document.querySelectorAll('.scroll-reveal');

    revealElements.forEach(el => {
        revealObserver.observe(el);
    });
});
