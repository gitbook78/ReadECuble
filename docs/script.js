function toggleTheme() {
    const body = document.body;
    if (body.style.backgroundColor === "white") {
      body.style.backgroundColor = "#1e1e2f";
      body.style.color = "#fff";

    } else {
      body.style.backgroundColor = "white";
      body.style.color = "#000";
    }
  }

  function toggleMenu() {
    const navLinks = document.querySelector('.nav-links');
    navLinks.classList.toggle('active');
}
