// Selecionar o botão "Entrar" e adicionar o evento para alternar para o formulário de login
const signInButton = document.getElementById('signIn');
const signUpButton = document.getElementById('signUp');
const container = document.getElementById('container');

// Quando o botão "Entrar" for clicado, ativa a transição para a área de login
signInButton.addEventListener('click', () => {
    container.classList.remove("right-panel-active");
});

// Quando o botão "Cadastrar" for clicado, ativa a transição para a área de cadastro
signUpButton.addEventListener('click', () => {
    container.classList.add("right-panel-active");
});

// Função chamada ao clicar em "Continuar", ativando um fade-out para a próxima tela
function goToNextPage() {
    document.body.classList.add('fade-out');
    setTimeout(() => {
        window.location.href = "cadastro.html";
    }, 1000);
}

// Função para validação do login
function validateLogin(event) {
    // Impede o comportamento padrão do formulário
    event.preventDefault();
    
    // Obtém os valores dos campos de e-mail e senha
    const email = document.querySelector('.sign-in-container input[type="email"]').value;
    const password = document.querySelector('.sign-in-container input[type="password"]').value;
    const mensagemErro = document.getElementById('error-message'); // Obtém a div de mensagem de erro

    // Verifica se o e-mail e senha correspondem aos valores esperados
    if (email === 'admin@admin' && password === 'urubu100') {
        // Redireciona para a página desejada se os dados estiverem corretos
        window.location.href = 'dashboard.html'; // Página linkada
    } else {
        // Exibe uma mensagem de erro se o login falhar
        mensagemErro.textContent = 'Login ou senha inválida.'; // mensagem de erro
    }
}

// Adiciona um evento de clique ao botão de login para chamar a função de validação
const loginButton = document.querySelector('.sign-in-container button');
loginButton.addEventListener('click', validateLogin);
