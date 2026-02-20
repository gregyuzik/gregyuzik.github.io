document.addEventListener('DOMContentLoaded', () => {
    const glassPanel = document.querySelector('.glass-panel');
    const container = document.querySelector('.placeholder-container');

    // 3D Tilt Effect on mousemove
    container.addEventListener('mousemove', (e) => {
        const xAxis = (window.innerWidth / 2 - e.pageX) / 40;
        const yAxis = (window.innerHeight / 2 - e.pageY) / 40;

        glassPanel.style.transform = `rotateY(${xAxis}deg) rotateX(${yAxis}deg)`;
    });

    // Reset tilt on mouseleave
    container.addEventListener('mouseleave', () => {
        glassPanel.style.transition = 'transform 0.5s ease';
        glassPanel.style.transform = `rotateY(0deg) rotateX(0deg) translateY(0)`;

        // Remove the transition after it completes so mousemove is responsive again
        setTimeout(() => {
            glassPanel.style.transition = 'transform 0.1s ease-out';
        }, 500);
    });

    // Form Handling
    const form = document.querySelector('.notify-form');
    const emailInput = document.querySelector('.glass-input');

    form.addEventListener('submit', (e) => {
        // Prevent default submission since this is static
        e.preventDefault();

        if (emailInput.value) {
            const btn = form.querySelector('button');
            const originalText = btn.innerText;

            // Visual success state
            btn.innerText = 'Subscribed!';
            btn.classList.add('success');
            emailInput.disabled = true;

            // After some time, user can interact again (optional)
            /*
            setTimeout(() => {
                btn.innerText = originalText;
                btn.classList.remove('success');
                emailInput.disabled = false;
                emailInput.value = '';
            }, 3000);
            */
        }
    });
});
