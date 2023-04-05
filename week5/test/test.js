function toggleDarkMode() {
    const body = document.querySelector('body');
    body.classList.toggle('dark-mode');
  }
  
  const modeSwitcher = document.querySelector('#mode-switcher');
  
  modeSwitcher.addEventListener('click', () => {
    toggleDarkMode();
    if (document.body.classList.contains('dark-mode')) {
      modeSwitcher.textContent = 'Switch to Light Mode';
    } else {
      modeSwitcher.textContent = 'Switch to Dark Mode';
    }
  });
  