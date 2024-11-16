function toggleSidebar() {
  const sidebar = document.getElementById("sidebar");
  const content = document.querySelector(".container");

  // Alterna a classe "expanded"
  sidebar.classList.toggle("expanded");
  content.classList.toggle("expanded");
}
