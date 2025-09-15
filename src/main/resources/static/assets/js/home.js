// Lógica para carregar a logo do restaurante
document.addEventListener('DOMContentLoaded', () => {
    const restaurantLogo = document.getElementById('restaurant-logo');
    
    // Suponha que o login retorne a URL da logo do restaurante
    // Você pode armazenar essa URL no localStorage, por exemplo.
    const logoUrl = localStorage.getItem('restaurantLogo');
    
    if (logoUrl) {
        restaurantLogo.src = logoUrl;
    } else {
        // Se não houver URL, use uma logo padrão ou esconda o elemento
        restaurantLogo.src = 'assets/img/logo_padrao.png'; // Exemplo
    }
});

// Lógica para o botão de sair
const logoutButton = document.querySelector('.logout-button');
logoutButton.addEventListener('click', () => {
    // Limpa a URL da logo e qualquer outra informação de login
    localStorage.removeItem('restaurantLogo');
    localStorage.removeItem('theme'); // Limpa a preferência de tema, se desejar
    
    // Redireciona para a página de login
    window.location.href = 'index.html';
});



document.addEventListener("DOMContentLoaded", () => {
  const menuButton = document.getElementById("menu-dots-button");
  const popupMenu = document.getElementById("popup-menu");

  // Alterna exibição ao clicar nos 3 pontos
  menuButton.addEventListener("click", (e) => {
    e.stopPropagation(); // evita fechar imediatamente
    popupMenu.classList.toggle("show");
  });

  // Fecha se clicar fora do menu
  document.addEventListener("click", (e) => {
    if (!popupMenu.contains(e.target) && !menuButton.contains(e.target)) {
      popupMenu.classList.remove("show");
    }
  });
});