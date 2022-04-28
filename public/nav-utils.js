document.getElementById("menu-btn").addEventListener("click", () => {
    document.getElementById("nav").classList.add("hamburger-icon");
  });
  
document.getElementById("exit-btn").addEventListener("click", () => {
    document.getElementById("nav").classList.remove("open-nav");
  });
  
  function displayWindowSize() {
    var w = window.innerWidth;
    if (w > 775) {
      document.getElementById("navigation").classList.add("large-screen");
    } else {
      document
        .getElementById("navigation")
        .classList.remove("large-screen");
    }
  }



function toggleMobileMenu(menu) {
    menu.classList.toggle('open');
}