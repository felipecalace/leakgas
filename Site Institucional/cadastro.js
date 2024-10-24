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
        if (currentStep < steps.length - 1) {
            steps[currentStep].classList.remove('active');
            formSteps[currentStep].classList.remove('active');
            currentStep++;
            steps[currentStep].classList.add('active');
            formSteps[currentStep].classList.add('active');
        }
    });
});

// Para cada botão "Voltar", adiciona um evento de clique
prevBtns.forEach((button) => {
    button.addEventListener('click', () => {
        if (currentStep > 0) {
            steps[currentStep].classList.remove('active');
            formSteps[currentStep].classList.remove('active');
            currentStep--;
            steps[currentStep].classList.add('active');
            formSteps[currentStep].classList.add('active');
        }
    });
});

// Adiciona evento de clique nos itens da lista (li) para navegação direta
steps.forEach((step, index) => {
    step.addEventListener('click', () => {
        // Remove a classe 'active' da etapa atual
        steps[currentStep].classList.remove('active');
        formSteps[currentStep].classList.remove('active');
        // Atualiza a etapa atual para a que foi clicada
        currentStep = index;
        // Adiciona a classe 'active' à nova etapa
        steps[currentStep].classList.add('active');
        formSteps[currentStep].classList.add('active');
    });
});

// Adiciona a classe 'fade-in' ao corpo do documento quando a janela é carregada
window.onload = function() {
    document.body.classList.add('fade-in');
};
