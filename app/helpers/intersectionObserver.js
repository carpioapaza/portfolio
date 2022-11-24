// PALLARAX
export function startBackground(marimar) {
  const projects__grid = document.querySelector('.projects .container');
  const about__info = document.querySelector('.about__info');
  const projects__title = document.querySelector('.projects__title');
  const about__figure = document.querySelector('.about__figure');

  const chargeGrid = (entries, viewer) => {
    entries.forEach((entry) => {
      entry.isIntersecting
        ? entry.target.classList.add('active')
        : entry.target.classList.remove('active');
    });
  };

  const viewer = new IntersectionObserver(chargeGrid, {
    root: null,
    rootMargin: '',
    threshold: 0.2,
  });

  viewer.observe(projects__grid);
  viewer.observe(about__info);
  viewer.observe(projects__title);
  viewer.observe(about__figure);

  // Start Hero
  const background__images = document.querySelector('.background__images');
  const background__texts = document.querySelector('.background__texts');
  const background__social = document.querySelector('.background__social');

  background__social.classList.toggle('active');
  background__texts.classList.toggle('active');
  background__images.classList.toggle('active');
}
