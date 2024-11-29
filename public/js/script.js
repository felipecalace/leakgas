const questions = document.querySelectorAll('.faq-question');
const answers = document.querySelectorAll('.faq-answer');  // Seleciona todas as respostas

questions.forEach(question => {
  question.addEventListener('click', () => {
    // Esconde todas as respostas
    answers.forEach(answer => {
      answer.style.display = 'none';
    });

    // Alterna as classes + e - no ícone
    questions.forEach(q => {
      const icon = q.querySelector('i');
      const currentAnswer = q.nextElementSibling;
      
      // Se a pergunta não for a clicada, o ícone volta ao estado inicial e a resposta é escondida
      if (q !== question) {
        icon.classList.remove('minus');
        icon.classList.add('plus');
        currentAnswer.style.display = 'none';
      }
    });

    // Faz a resposta da pergunta clicada aparecer
    const answer = question.nextElementSibling;
    if (answer.style.display !== 'block') {
      answer.style.display = 'block';
    }

    // Alterna as classes + e - no ícone da pergunta clicada
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
