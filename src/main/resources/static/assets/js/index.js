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

// Evento de clique no botão
themeToggle.addEventListener('change', () => {
    applyTheme(themeToggle.checked);
});
// Obtém o elemento do botão "Entrar"
const loginButton = document.querySelector('.btn-enter');

// Adiciona um evento de clique ao botão
loginButton.addEventListener('click', (event) => {
    // Evita o comportamento padrão de envio do formulário
    event.preventDefault(); 

    // Aqui você adicionaria sua lógica de autenticação
    // Por exemplo, pegar os valores dos campos de login e senha
    const username = document.getElementById('login').value;
    const password = document.getElementById('senha').value;

    // Simulação de login bem-sucedido
    // No seu projeto real, você faria uma chamada para a sua API Spring aqui
    if (username === 'garcom' && password === '123') {
        
        // Simulação de que a API retornou a URL da logo do restaurante
        const restaurantLogoUrl = 'assets/img/logo_cebola_brava.png';
        
        // Salva a URL da logo no armazenamento local para a próxima página
        localStorage.setItem('restaurantLogo', restaurantLogoUrl);

        // Redireciona para a página home
        window.location.href = 'pages/home.html';
    } else {
        alert('Login ou senha incorretos.');
    }
});