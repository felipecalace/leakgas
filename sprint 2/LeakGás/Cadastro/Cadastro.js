
function Login() {
    var senhaCadastrada = 'Sptech123@';
    var senha_colocada = inp_senha.value;
    console.log(senha_colocada);
    var mensagem = "";

    var tamanho_senha = senha_colocada.length;

    if (tamanho_texto >= 8) {
        mensagem += `Quantidade de caracteres ${tamanho_senha} <br>`
    } else {
        mensagem += `O texto NÃO POSSUI 8 caracteres <br>`;
    }

    // Verifica diretamente se o primeiro caractere é igual a ele mesmo em maiúscula
    if (senha_colocada[0].toUpperCase() === senhaCadastrada[0]) {
        console.log("A primeira letra é maiúscula.");
    } else {
        console.log("A primeira letra não é maiúscula.");
    }

    var indice_especiais = senhaCadastrada.indexOf("!@#$%^&*()_+[]{}|;:',.<>?/");

    if (indice_especiais == 0) {
        mensagem += `Contém Caractere especial na senha <br>`;
    } else {
        mensagem += `Insira ao menos um caractere especial <br>`;
    }
    for (var contador = 0; contador < senha.length; contador++) {
        // Verifica se o caractere é um número
        if (!isNaN(senha_colocada[i]) && senha_colocada[i] !== ' ') {  // utilizado para acessar o caractere individual da string senha_colocada na posição i.
            contador++;
        }
        // Se já encontrou 3 números, não precisa continuar
        if (contador >= 3) {
            return true;
        }
        // Retorna falso se não encontrou 3 números
        return false;
    }

}
function validarFormulario() {
    // Seleciona todos os inputs do formulário
    var inputs = document.querySelectorAll('#multiStepForm input');
    var mensagem = "";
    var valido = true;

    inputs.forEach(function(input) {
        // Verifica se o campo está vazio
        if (input.value.trim() === "") {
            mensagem += `O campo "${input.placeholder}" é obrigatório.<br>`;
            valido = false;
        }

        // Valida o CNPJ 
        if (input.id === 'cnpj' && !validarCNPJ(input.value)) {
            mensagem += `CNPJ inválido. Deve conter 14 dígitos.<br>`;
            valido = false;
        }

        // Valida o formato de email
        if (input.id === 'emailCorp' || input.id === 'email') {
            if (!validarEmail(input.value)) {
                mensagem += `O email "${input.value}" é inválido. Deve conter "@" e um domínio.<br>`;
                valido = false;
            }
        }

        // Valida o telefone
        if (input.id === 'telCorp' || input.id === 'phone') {
            if (input.value.length < 10) {
                mensagem += `O telefone deve ter pelo menos 10 dígitos.<br>`;
                valido = false;
            }
        }
    });

    // Exibe a mensagem de erro ou sucesso
    if (!valido) {
        console.log(mensagem);
        alert(mensagem);
    } else {
        console.log("Formulário válido!");
    }

    return valido;
}

// Função para validar o formato do CNPJ
function validarCNPJ(cnpj) {
    // Verifica se o CNPJ contém exatamente 14 dígitos numéricos
    return cnpj.length === 14 && !isNaN(cnpj);
}

// Função para validar o formato de email
function validarEmail(email) {
    // Verifica se o email contém um "@" e um ponto após isso
    var partes = email.split("@");
    if (partes.length === 2) {
        var dominio = partes[1];
        return dominio.includes(".") && dominio.indexOf(".") > 0; // Deve ter um ponto no domínio
    }
    return false;
}