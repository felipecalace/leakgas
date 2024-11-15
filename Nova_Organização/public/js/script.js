const questions = document.querySelectorAll('.faq-question');
const answers = document.querySelectorAll('.faq-answer');  // Seleciona todas as respostas

questions.forEach(question => {
  question.addEventListener('click', () => {
    // Esconde todas as respostas
    answers.forEach(answer => {
      answer.style.display = 'none';
    });

    // Faz a resposta da pergunta clicada aparecer
    const answer = question.nextElementSibling;
    if (answer.style.display !== 'block') {
      answer.style.display = 'block';
    }

    // Alterna as classes + e - no ícone
    const icon = question.querySelector('i');
    if (icon.classList.contains('plus')) {
      icon.classList.remove('plus');
      icon.classList.add('minus');
    } else {
      icon.classList.remove('minus');
      icon.classList.add('plus');
      answer.style.display = 'none'; // Fecha a resposta se o ícone for clicado novamente
    }
  });
});