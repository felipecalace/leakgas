// Obtendo os elementos do DOM
const container = document.getElementById('container');
const registerBtn = document.getElementById('register');
const LoginBtn = document.getElementById('Login');
const addressForm = document.getElementById('addressForm');
const continueButton = document.querySelector('.continue-button');


// Alternar para o formulário de cadastro (quando clicar em "Cadastre-se")
registerBtn.addEventListener('click', () => {
    // Adiciona a classe 'active' para alternar para a tela de cadastro
    container.classList.add("active");
});

// Alternar para o formulário de login (quando clicar em "Entrar")
LoginBtn.addEventListener('click', () => {
    container.classList.remove("active");
});

// Mostrar o formulário de endereço após clicar em "Continuar"
continueButton.addEventListener('click', (event) => {
    event.preventDefault();
    document.querySelector('.sign-up').style.display = 'none'; // Oculta o formulário de cadastro
    addressForm.style.display = 'block'; // Exibe o formulário de endereço
});

