function toggleSidebar() {
  const sidebar = document.getElementById("sidebar");
  const content = document.querySelector(".container");

  // Alterna a classe "expanded"
  sidebar.classList.toggle("expanded");
  content.classList.toggle("expanded");
}

// Abrir o pop-up
function toggleButton() {
  const popup = document.getElementById('popup');
  popup.style.display = 'flex';
}

// Fechar o pop-up
function closePopup() {
  const popup = document.getElementById('popup');
  popup.style.display = 'none';
}

// Formulário de envio (opcional)
const supportForm = document.getElementById('supportForm');
supportForm.addEventListener('submit', function (e) {
  e.preventDefault();
  alert('Formulário enviado com sucesso!');
  closePopup();
});
