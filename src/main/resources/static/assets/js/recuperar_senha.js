// Obtém o elemento do botão de alternância de tema
const themeToggle = document.getElementById('theme-toggle');

// Obtém o corpo da página para aplicar as classes do tema
const body = document.body;

// Obtém o elemento da imagem da logo pelo ID (você deve adicionar o id="logo-plato" no seu HTML)
const logoImage = document.getElementById('logo-plato');

// Função para aplicar o tema e a logo
function applyTheme(isDark) {
    if (isDark) {
        body.classList.add('dark-theme');
        logoImage.src = 'assets/img/logo_plato.png';
        localStorage.setItem('theme', 'dark');
    } else {
        body.classList.remove('dark-theme');
        logoImage.src = 'assets/img/logo_plato_preta.png';
        localStorage.setItem('theme', 'light');
    }
}

// Carrega a preferência do usuário ao carregar a página
const savedTheme = localStorage.getItem('theme');
if (savedTheme === 'dark') {
    applyTheme(true);
    themeToggle.checked = true;
} else {
    // Garante que o tema claro e a logo correta sejam aplicados por padrão
    applyTheme(false);
}