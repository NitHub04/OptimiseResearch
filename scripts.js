document.addEventListener("DOMContentLoaded", function() {
    const footerLinks = document.querySelectorAll('footer a');
    for (const link of footerLinks) {
        link.addEventListener('click', function(event) {
            event.preventDefault();
            const targetId = this.getAttribute('href');
            const targetElement = document.querySelector(targetId);
            if (targetElement) {
                window.scrollTo({
                    top: targetElement.offsetTop,
                    behavior: "smooth"
                });
            }
        });
    }

    const ctaButton = document.querySelector('.cta
