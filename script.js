/* Script JS - PS2 BIOS Interactivity */

document.addEventListener('DOMContentLoaded', () => {
    // Smooth Scroll for anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth'
                });
            }
        });
    });

    // Dynamic "Last Updated" date for freshness (SEO Signal)
    const updateDates = document.querySelectorAll('.dynamic-date');
    const today = new Date();
    const formattedDate = today.toLocaleDateString('en-US', {
        month: 'long',
        day: 'numeric',
        year: 'numeric'
    });

    updateDates.forEach(el => {
        el.textContent = formattedDate;
    });

    // Log the build version for debugging
    console.log('PS2 BIOS Hub - 2026 Edition Loaded');
});
