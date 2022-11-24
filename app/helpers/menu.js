export function menu() {
  const navbar = document.querySelector('.navbar');
  const menu = document.querySelector('.menu__img');
  document.addEventListener('click', (e) => {
    e.target.matches('.menu__img')
      ? (navbar.classList.toggle('navbar--active'),
        (e.target.textContent = 'menu'),
        navbar.classList.contains('navbar--active') &&
          (e.target.textContent = 'close'))
      : navbar.classList.remove('navbar--active'),
      (menu.textContent = 'menu');
  });

  window.onscroll = function () {
    scrollStyle();
  };
  function scrollStyle() {
    var windowscroll =
        document.body.scrollTop || document.documentElement.scrollTop,
      height =
        document.documentElement.scrollHeight -
        document.documentElement.clientHeight;
    document.querySelector('#header__bar').style.width =
      (windowscroll / height) * 100 + '%';
  }
}
