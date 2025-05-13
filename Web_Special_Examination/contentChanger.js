
  const navLinks = document.querySelectorAll('.nav-links');
  const mainContent = document.getElementById('main');

  navLinks.forEach(link => {
    link.addEventListener('click', function(event){
        event.preventDefault();
        const newContent = this.getAttribute('data-content');
        mainContent.innerHTML = `${this.textContent}`
    });
  })
