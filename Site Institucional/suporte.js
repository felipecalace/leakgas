function toggleSidebar() {
    const sidebar = document.getElementById("sidebar");
    const content = document.querySelector(".content");
  
    // Alterna entre as classes "expanded" para expandir ou recolher a sidebar
    sidebar.classList.toggle("expanded");
    content.classList.toggle("expanded");
  }
  
  function toggleButton() {
    const button = document.querySelector('.floating-button');
    button.classList.toggle('expanded');
  }
  