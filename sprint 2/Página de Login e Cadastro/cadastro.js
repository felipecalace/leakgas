// Seleciona todos os elementos de lista (li) que representam as etapas do formulário
const steps = document.querySelectorAll('.steps ul li');
// Seleciona todos os elementos do formulário que correspondem a cada etapa
const formSteps = document.querySelectorAll('.form-step');
// Seleciona todos os botões de "Próximo"
const nextBtns = document.querySelectorAll('.next-btn');
// Seleciona todos os botões de "Voltar"
const prevBtns = document.querySelectorAll('.prev-btn');
// Inicializa a variável currentStep para rastrear qual etapa do formulário está ativa
let currentStep = 0;

// Para cada botão "Próximo", adiciona um evento de clique
nextBtns.forEach((button) => {
    button.addEventListener('click', () => {
        // Verifica se a etapa atual não é a última
        if (currentStep < steps.length - 1) {
            // Remove a classe 'active' da etapa atual
            steps[currentStep].classList.remove('active');
            formSteps[currentStep].classList.remove('active');
            // Incrementa a etapa atual
            currentStep++;
            // Adiciona a classe 'active' à próxima etapa
            steps[currentStep].classList.add('active');
            formSteps[currentStep].classList.add('active');
        }
    });
});

// Para cada botão "Voltar", adiciona um evento de clique
prevBtns.forEach((button) => {
    button.addEventListener('click', () => {
        // Verifica se a etapa atual não é a primeira
        if (currentStep > 0) {
            // Remove a classe 'active' da etapa atual
            steps[currentStep].classList.remove('active');
            formSteps[currentStep].classList.remove('active');
            // Decrementa a etapa atual
            currentStep--;
            // Adiciona a classe 'active' à etapa anterior
            steps[currentStep].classList.add('active');
            formSteps[currentStep].classList.add('active');
        }
    });
});

// Adiciona a classe 'fade-in' ao corpo do documento quando a janela é carregada
window.onload = function() {
    document.body.classList.add('fade-in');
};
