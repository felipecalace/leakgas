
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
