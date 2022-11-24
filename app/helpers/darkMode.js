export function darkMode() {
  let darkModeState = false;
  const toggleBtn = document.querySelector('.theme');
  const activeTheme = document.querySelector('.theme__btn');
  const getScheme = window.matchMedia('(prefers-color-scheme: dark)');
  function toggleDarkMode(state) {
    document.documentElement.classList.toggle('dark', state);
    darkModeState = state;
  }
  function setSchemeState(state) {
    localStorage.setItem('dark-mode', state);
  }
  toggleDarkMode(localStorage.getItem('dark-mode') === 'true');
  getScheme.addListener((evt) => toggleDarkMode(evt.matches));
  toggleBtn.addEventListener('click', () => {
    darkModeState = !darkModeState;
    toggleDarkMode(darkModeState);
    setSchemeState(darkModeState);
    activeTheme.classList.toggle('theme__btn-active');
    'true' === localStorage.getItem('dark-mode')
      ? toggleBtn.setAttribute('title', 'Tema Oscuro')
      : toggleBtn.setAttribute('title', 'Tema Claro');
  });

  'true' === localStorage.getItem('dark-mode')
    ? (document.documentElement.classList.add('dark'),
      activeTheme.classList.add('theme__btn-active'),
      toggleBtn.setAttribute('title', 'Tema Oscuro'))
    : toggleBtn.setAttribute('title', 'Tema Claro');
}
