document.addEventListener('DOMContentLoaded', () => {
    const sections = document.querySelectorAll('section');

    sections.forEach(section => {
        section.addEventListener('mouseenter', () => {
            section.style.backgroundColor = '#e0f7fa';
        });

        section.addEventListener('mouseleave', () => {
            section.style.backgroundColor = 'transparent';
        });
    });
});
