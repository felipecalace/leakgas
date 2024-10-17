// Obtendo os elementos do DOM
const container = document.getElementById('container');
const registerBtn = document.getElementById('register');
const LoginBtn = document.getElementById('Login');
const addressForm = document.getElementById('addressForm');



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
// continueButton.addEventListener('click', (event) => {
//     event.preventDefault();
//     document.querySelector('.sign-up').style.display = 'none'; // Oculta o formulário de cadastro
//     addressForm.style.display = 'flex'; // Exibe o formulário de endereço
// });

// Captura o botão e os formulários
const continueButton = document.getElementById('continue-btn');
const formCadastro = document.getElementById('form_cadastro');
const formEndereco = document.getElementById('form_endereco');

// Função para alternar entre os formulários
function continuar() {
    // Verifique se os elementos foram capturados corretamente
    if (formCadastro && formEndereco) {
        // Oculta o formulário de cadastro
        formCadastro.style.display = 'none';
        // Exibe o formulário de endereço
        formEndereco.style.display = 'flex';
    } else {
        console.error('Não foi possível encontrar os formulários.');
    }
}

function continuar() {
    console.log('Botão Continuar clicado'); // Teste para ver se a função está sendo chamada

    if (formCadastro && formEndereco) {
        formCadastro.style.display = 'none';
        formEndereco.style.display = 'flex';
    } else {
        console.error('Não foi possível encontrar os formulários.');
    }
}

