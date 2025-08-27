// assets/js/theme-toggle.js
document.addEventListener('DOMContentLoaded', () => {
    const themeToggle = document.getElementById('theme-toggle');
    const body = document.body;

    // Função para aplicar o tema
    const applyTheme = (theme) => {
        body.classList.remove('light-theme', 'dark-theme'); // Remove ambos primeiro
        body.classList.add(theme);
        localStorage.setItem('theme', theme);
        themeToggle.checked = (theme === 'dark-theme');
    };

    // Verifica o tema salvo no localStorage ou define um padrão
    const savedTheme = localStorage.getItem('theme') || 'light-theme';
    applyTheme(savedTheme);

    themeToggle.addEventListener('change', () => {
        if (themeToggle.checked) {
            applyTheme('dark-theme');
        } else {
            applyTheme('light-theme');
        }
    });
});