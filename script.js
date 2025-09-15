document.addEventListener('DOMContentLoaded', () => {
    const themeToggleBtn = document.getElementById('theme-toggle');
    const body = document.body;

    // Check for saved theme preference or set dark mode as default
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme === 'dark' || savedTheme === null) {
        body.classList.add('dark-mode');
        localStorage.setItem('theme', 'dark'); // Persist the default choice
    }

    // Dark mode toggle functionality
    themeToggleBtn.addEventListener('click', () => {
        body.classList.toggle('dark-mode');
        if (body.classList.contains('dark-mode')) {
            localStorage.setItem('theme', 'dark');
        } else {
            localStorage.setItem('theme', 'light');
        }
    });

    // Mobile menu toggle
    const menuToggleBtn = document.getElementById('menu-toggle');
    const mobileMenu = document.getElementById('mobile-menu');
    menuToggleBtn.addEventListener('click', () => {
        mobileMenu.classList.toggle('open');
    });
});
