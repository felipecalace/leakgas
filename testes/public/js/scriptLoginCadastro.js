// Selecionar o botão "Entrar" e adicionar o evento para alternar para o formulário de login
const signInButton = document.getElementById("signIn");
const signUpButton = document.getElementById("signUp");
const container = document.getElementById("container");

// Quando o botão "Entrar" for clicado, ativa a transição para a área de login
signInButton.addEventListener("click", () => {
  container.classList.remove("right-panel-active");
});

// Quando o botão "Cadastrar" for clicado, ativa a transição para a área de cadastro
signUpButton.addEventListener("click", () => {
  container.classList.add("right-panel-active");
});

// Função chamada ao clicar em "Continuar", ativando um fade-out para a próxima tela
function goToNextPage() {
  divLogin.style.display = "none";
  divCadastro.style.display = "block";
}

// Seleciona todos os elementos de lista (li) que representam as etapas do formulário
const steps = document.querySelectorAll(".steps ul li");
// Seleciona todos os elementos do formulário que correspondem a cada etapa
const formSteps = document.querySelectorAll(".form-step");
// Seleciona todos os botões de "Próximo"
const nextBtns = document.querySelectorAll(".next-btn1");
// Seleciona todos os botões de "Voltar"
const prevBtns = document.querySelectorAll(".prev-btn");
// Inicializa a variável currentStep para rastrear qual etapa do formulário está ativa
let currentStep = 0;

// Para cada botão "Próximo", adiciona um evento de clique
function cadastroEmpresa() {
  var cnpjVar = cnpj.value;
  var nomeSocialVar = nomeSocial.value;
  var nomefantasiaVar = nomeFantasia.value;
  var emailVar = emailVarCorp.value;
  var telefoneCorporativoVar = telCorp.value;
  
  var arrobaIndex = emailVar.indexOf("@");
  var pontoIndex = emailVar.indexOf(".");

  if (
    cnpjVar.length == 14 &&
    arrobaIndex != -1 &&
    pontoIndex != -1 &&
    arrobaIndex < pontoIndex &&
    arrobaIndex > 0 &&
    pontoIndex < emailVar.length - 1 &&
    nomeSocialVar.length > 1 &&
    fantasiaNome.length > 1 &&
    telefoneCorporativoVar.length > 10
  ) {
    // Remove a classe 'active' da etapa atual
    steps[currentStep].classList.remove("active");
    formSteps[currentStep].classList.remove("active");
    // Incrementa a etapa atual
    currentStep++;
    // Adiciona a classe 'active' à próxima etapa
    steps[currentStep].classList.add("active");
    formSteps[currentStep].classList.add("active");
  } else {
    // Validações adicionais
    if (cnpjVar.length != 14) {
      spanCnpj.innerHTML = `O CNPJ não possui 14 dígitos!`;
    }
    if (nomeSocialVar.length <= 1) {
      spannomeSocialVar.innerHTML = `O nome social deve ter mais de 1 caractere!`;
    }
    if (fantasiaNome.length <= 1) {
      spanFantasiaNome.innerHTML = `O nome fantasia deve ter mais de 1 caractere!`;
    }
    if (telefoneCorporativoVar.length < 10) {
      spanTelefone.innerHTML = `O telefone deve ter mais de 10 dígitos!`;
    }
    if (
      arrobaIndex == -1 ||
      pontoIndex == -1 ||
      arrobaIndex >= pontoIndex ||
      arrobaIndex <= 0 ||
      pontoIndex >= emailVar.length - 1
    ) {
      spanEmailVar.innerHTML = `O e-mail deve ser válido!`;
    }
  }
}
    // Para cada botão "Voltar", adiciona um evento de clique
    prevBtns.forEach((button) => {
      button.addEventListener("click", () => {
        // Verifica se a etapa atual não é a primeira
        if (currentStep > 0) {
          // Remove a classe 'active' da etapa atual
          steps[currentStep].classList.remove("active");
          formSteps[currentStep].classList.remove("active");
          // Decrementa a etapa atual
          currentStep--;
          // Adiciona a classe 'active' à etapa anterior
          steps[currentStep].classList.add("active");
          formSteps[currentStep].classList.add("active");
        }
      });
    });

    // Adiciona a classe 'fade-in' ao corpo do documento quando a janela é carregada
    window.onload = function () {
      document.body.classList.add("fade-in");
    };

function etapaDois() {
  var enderecoLocal = endereco.value;
  var numeroLocal = numero.value;
  var cepLocal = cep.value;
  var estadoLocal = estado.value;
  var cidadeLocal = cidade.value;

  // Validação dos campos da segunda etapa
  if (
    enderecoLocal.length > 0 &&
    numeroLocal.length > 0 &&
    cepLocal.length == 8 &&
    estadoLocal.length > 0
  ) {
    // Remove a classe 'active' da etapa atual
    steps[currentStep].classList.remove("active");
    formSteps[currentStep].classList.remove("active");
    // Incrementa a etapa atual
    currentStep++;
    // Adiciona a classe 'active' à próxima etapa
    steps[currentStep].classList.add("active");
    formSteps[currentStep].classList.add("active");
  } else {
    // Validações adicionais
    if (enderecoLocal.length === 0) {
      spanEndereco.innerHTML = `O endereço é obrigatório!`;
    }
    if (numeroLocal.length === 0) {
      spanNumero.innerHTML = `O número é obrigatório!`;
    }
    if (cidadeLocal.length === 0) {
      spanCidade.innerHTML = `A Cidade é obrigatório!`;
    }
    if (cepLocal.length !== 8) {
      spanCEP.innerHTML = `O CEP deve ter 8 dígitos!`;
    }
    if (estadoLocal.length === 0) {
      spanEstado.innerHTML = `O estado é obrigatório!`;
    }
  }
}
function Finalizar() {
    var sobrenomePessoalVar = sobrenomePessoal.value;
    var nomePessoalVar = nomePessoal.value;
    var telefonePessoalVar = telefonePessoal.value;
    var senhaPessoalVar = senhaPessoal.value;
    var senhaConfirmaVar = confirmaSenhaPessoal.value;

    var emailVar = emailLoginPessoal.value; // Captura o valor do campo de e-mail
    var arrobaIndex = emailVar.indexOf("@");
    var pontoIndex = emailVar.indexOf(".");
    
    // Captura o span de erro para o e-mail
    var spanEmailVarLoginPessoal = document.getElementById('spanEmailLoginPessoal');
    
    // Limpar mensagens de erro anteriores
    spanEmailVarLoginPessoal.innerHTML = '';
    spanNomePessoal.innerHTML = '';
    spanSobrenomePessoal.innerHTML = '';
    spanTelefonePessoal.innerHTML = '';
    spanSenhaPessoal.innerHTML = '';
    spanConfirmaSenhaPessoal.innerHTML = '';

    // Validação do e-mail
    if (
        arrobaIndex === -1 ||
        pontoIndex === -1 ||
        arrobaIndex >= pontoIndex ||
        arrobaIndex <= 0 ||
        pontoIndex >= emailVar.length - 1
    ) {
        spanEmailLoginPessoal.innerHTML = `O e-mail deve ser válido!`;
    }

    // Validação do nome
    if (nomePessoalVar.length === 0) {
        spanNomePessoal.innerHTML = `O nome é obrigatório!`;
    }

    // Validação do sobrenome
    if (sobrenomePessoalVar.length === 0) {
        spanSobrenomePessoal.innerHTML = `O sobrenome é obrigatório!`;
    }

    // Validação do telefone
    if (telefonePessoalVar.length === 0) {
        spanTelefonePessoal.innerHTML = `O telefone é obrigatório!`;
    }

    // Validação da senha
    if (senhaPessoalVar.length === 0) {
        spanSenhaPessoal.innerHTML = `A senha é obrigatória!`;
    }

    // Validação da confirmação da senha
    if (senhaPessoalVar !== senhaConfirmaVar) {
        spanConfirmaSenhaPessoal.innerHTML = `A senha não confere!`;
    }

}
function senhaLive(){
  var senhaPessoalVar = senhaPessoal.value;
  var tamanho_senha = senhaPessoalVar.length;
  var especiais = ["!", "@", "#", "$", "%", "^", "&", "*", "(" , ")", "_", "+", "[", "]", "{","}","|",";",":","'",".","<",">","?","/"]
  var indiceespecial;
      if (tamanho_senha >= 8) {
          verificaCaracter.style.color = "#008000";
      } else {
          verificaCaracter.style.color = "#ff0000";
      }

      for(var i = 0;i < 25; i++){
        if (senhaPessoalVar.indexOf(especiais[i]) != -1){
          verificaCaracterEspecial.style.color = "#008000";
          break
        }else {
          verificaCaracterEspecial.style.color = "#ff0000";
        }
      }
      if (indiceespecial) {
          
      } else {
        
      }
  var senhaMaiuscula, senhaMinuscula;
  senhaMaiuscula = senhaPessoalVar.toUpperCase();
  senhaMinuscula = senhaPessoalVar.toLowerCase();

  if(senhaMaiuscula != senhaPessoalVar){
    verificaMinuscula.style.color = "#008000";
  } else{
    verificaMinuscula.style.color = "#ff0000";
  }
  if(senhaMinuscula != senhaPessoalVar){
    verificaMaiusculo.style.color = "#008000";
  } else{
    verificaMaiusculo.style.color = "#ff0000";
  }
  if(tamanho_senha >= 8 && indice_especiais >= 0 && senhaMaiuscula != senhaPessoalVar && senhaMinuscula != senhaPessoalVar){
    return true;
  } else{
    return false;
  }
}


function validateLogin(event) {
  // Impede o comportamento padrão do formulário
  event.preventDefault();
  
  // Obtém os valores dos campos de e-mail e senha
  const emailVar = document.querySelector('.sign-in-container input[type="email"]').value;
  const password = document.querySelector('.sign-in-container input[type="password"]').value;
  const mensagemErro = document.getElementById('error-message'); // Obtém a div de mensagem de erro

  // Verifica se o e-mail e senha correspondem aos valores esperados
  if (emailVar === 'admin@admin' && password === 'urubu100') {
      // Redireciona para a página desejada se os dados estiverem corretos
      window.location.href = './dashboard/dashboard.html'; // Página linkada
  } else {
      // Exibe uma mensagem de erro se o login falhar
      mensagemErro.textContent = 'Login ou senha inválida.'; // mensagem de erro
  }
}

// Adiciona um evento de clique ao botão de login para chamar a função de validação
const loginButton = document.querySelector('.sign-in-container button');
loginButton.addEventListener('click', validateLogin);