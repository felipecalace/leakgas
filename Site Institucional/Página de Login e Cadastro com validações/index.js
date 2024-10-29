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
  var cnpjvar = cnpj.value;
  var socialNome = nomeSocial.value;
  var fantasiaNome = nomeFantasia.value;
  var email = emailCorp.value;
  var telefoneCorp = telCorp.value;
  var arrobaIndex = email.indexOf("@");
  var pontoIndex = email.indexOf(".");

  if (
    cnpjvar.length == 14 &&
    arrobaIndex != -1 &&
    pontoIndex != -1 &&
    arrobaIndex < pontoIndex &&
    arrobaIndex > 0 &&
    pontoIndex < email.length - 1 &&
    socialNome.length > 1 &&
    fantasiaNome.length > 1 &&
    telefoneCorp.length > 10
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
    if (cnpjvar.length != 14) {
      spanCnpj.innerHTML = `O CNPJ não possui 14 dígitos!`;
    }
    if (socialNome.length <= 1) {
      spanSocialNome.innerHTML = `O nome social deve ter mais de 1 caractere!`;
    }
    if (fantasiaNome.length <= 1) {
      spanFantasiaNome.innerHTML = `O nome fantasia deve ter mais de 1 caractere!`;
    }
    if (telefoneCorp.length < 10) {
      spanTelefone.innerHTML = `O telefone deve ter mais de 10 dígitos!`;
    }
    if (
      arrobaIndex == -1 ||
      pontoIndex == -1 ||
      arrobaIndex >= pontoIndex ||
      arrobaIndex <= 0 ||
      pontoIndex >= email.length - 1
    ) {
      spanEmail.innerHTML = `O e-mail deve ser válido!`;
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
    var pessoalSobrenome = sobrenomePessoal.value;
    var pessoalNome = nomePessoal.value;
    var pessoalTelefone = telefonePessoal.value;
    var pessoalSenha = senhaPessoal.value;
    var pessoalConfirmaSenha = confirmaSenhaPessoal.value;
    var email = emailLoginPessoal.value; // Captura o valor do campo de e-mail
    var arrobaIndex = email.indexOf("@");
    var pontoIndex = email.indexOf(".");
    
    // Captura o span de erro para o e-mail
    var spanEmailLoginPessoal = document.getElementById('spanEmailLoginPessoal');
    
    // Limpar mensagens de erro anteriores
    spanEmailLoginPessoal.innerHTML = '';
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
        pontoIndex >= email.length - 1
    ) {
        spanEmailLoginPessoal.innerHTML = `O e-mail deve ser válido!`;
    }

    // Validação do nome
    if (pessoalNome.length === 0) {
        spanNomePessoal.innerHTML = `O nome é obrigatório!`;
    }

    // Validação do sobrenome
    if (pessoalSobrenome.length === 0) {
        spanSobrenomePessoal.innerHTML = `O sobrenome é obrigatório!`;
    }

    // Validação do telefone
    if (pessoalTelefone.length === 0) {
        spanTelefonePessoal.innerHTML = `O telefone é obrigatório!`;
    }

    // Validação da senha
    if (pessoalSenha.length === 0) {
        spanSenhaPessoal.innerHTML = `A senha é obrigatória!`;
    }

    // Validação da confirmação da senha
    if (pessoalSenha !== pessoalConfirmaSenha) {
        spanConfirmaSenhaPessoal.innerHTML = `A senha não confere!`;
    }

}
function senhaLive(){
  var pessoalSenha = senhaPessoal.value;
  var tamanho_senha= pessoalSenha.length;
  var especiais = ["!", "@", "#", "$", "%", "^", "&", "*", "(" , ")", "_", "+", "[", "]", "{","}","|",";",":","'",".","<",">","?","/"]
  var indiceespecial;
      if (tamanho_senha >= 8) {
          verificaCaracter.style.color = "#008000";
      } else {
          verificaCaracter.style.color = "#ff0000";
      }

      for(var i = 0;i < 25; i++){
        if (pessoalSenha.indexOf(especiais[i]) != -1){
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
  senhaMaiuscula = pessoalSenha.toUpperCase();
  senhaMinuscula = pessoalSenha.toLowerCase();

  if(senhaMaiuscula != pessoalSenha){
    verificaMinuscula.style.color = "#008000";
  } else{
    verificaMinuscula.style.color = "#ff0000";
  }
  if(senhaMinuscula != pessoalSenha){
    verificaMaiusculo.style.color = "#008000";
  } else{
    verificaMaiusculo.style.color = "#ff0000";
  }
  if(tamanho_senha >= 8 && indice_especiais >= 0 && senhaMaiuscula != pessoalSenha && senhaMinuscula != pessoalSenha){
    return true;
  } else{
    return false;
  }
}