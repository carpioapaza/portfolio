import { getRepos, getReposByName } from '../helpers/api.js';
export async function drawRepos() {
  const $projectsGrid = document.querySelector('.projects__grid');
  const $templateCard = document.querySelector('#project__grid__template');
  const $fragment = document.createDocumentFragment();
  const repos = await getRepos();
  repos.forEach((repo) => {
    const thumbnailWebMaster = `https://raw.githubusercontent.com/carpioapaza/${repo.name}/master/thumbnailWeb.webp`;

    const clone = $templateCard.content.cloneNode(true);
    clone
      .querySelector('.project__grid')
      .setAttribute('data-id', `${repo.name}`);

    clone.querySelector(
      '.project__title'
    ).textContent = `🌐 ${repo.name.replace(/-/g, ' ')}`;
    clone.querySelector('.project__img').src = thumbnailWebMaster;
    clone.querySelector('.project__img').alt = `${repo.name}`;
    clone.querySelector('.project__title').href = `${repo.homepage}`;
    $fragment.appendChild(clone);
  });
  $projectsGrid.appendChild($fragment);

  $projectsGrid.addEventListener('click', (e) => {
    if (e.target.matches('.project__header *')) {
      const dataId = e.target.parentNode.parentNode.getAttribute('data-id');
      openModal(dataId);
    }
  });
}

async function openModal(dataId) {
  const loader = document.querySelector('.loader');
  loader.style.display = 'block';

  const $projects = document.getElementById('projects');
  const $templateModal = document.getElementById('modal__template');
  const $fragment = document.createDocumentFragment();
  const repo = await getReposByName(dataId);
  let tecs = repo.topics;

  const thumbnailWebMaster = `https://raw.githubusercontent.com/carpioapaza/${repo.name}/master/thumbnailWeb.webp`;
  const thumbnailMobileMaster = `https://raw.githubusercontent.com/carpioapaza/${repo.name}/master/thumbnailMobile.webp`;
  const clone = $templateModal.content.cloneNode(true);

  clone.querySelector('.project__link').href = `${repo.homepage}`;
  clone.querySelector('.project__link').textContent = `🌐 ${repo.homepage}`;
  clone.querySelector('.modal__img-web').src = thumbnailWebMaster;
  clone.querySelector('.modal__img-web').alt = `${repo.name}`;

  clone.querySelector('.modal__img-mobile').src = thumbnailMobileMaster;
  clone.querySelector('.modal__img-mobile').alt = `${repo.name}`;
  clone.querySelector('.modal__view-code').href = `${repo.html_url}`;

  clone.querySelector('.modal__title').textContent = `${repo.name.replace(
    /-/g,
    ' '
  )}`;
  clone.querySelector(
    '.modal__description'
  ).textContent = `${repo.description}`;
  clone.querySelector(
    '.modal__description'
  ).textContent = `${repo.description}`;

  // Technologies
  const $ul = clone.querySelector('.modal__technologies');
  tecs.forEach((tec) => {
    $ul.innerHTML += `<li class="project__technology">${tec.toUpperCase()}</li>`;
  });

  $ul.childNodes.forEach((e) => {
    e.textContent.includes('JAVASCRIPT')
      ? e.classList.add('js')
      : e.textContent.includes('REACT')
      ? e.classList.add('react')
      : e.textContent.includes('CSS')
      ? e.classList.add('css')
      : e.textContent.includes('SASS')
      ? e.classList.add('sass')
      : e.textContent.includes('HTML')
      ? e.classList.add('html')
      : e.textContent.includes('BEM')
      ? e.classList.add('bem')
      : e.textContent.includes('API')
      ? e.classList.add('api')
      : e.textContent.includes('WORDPRESS')
      ? e.classList.add('wordpress')
      : e.textContent.includes('STRIPE')
      ? e.classList.add('stripe')
      : e.textContent.includes('PAYPAL')
      ? e.classList.add('paypal')
      : e.textContent.includes('TAILWIND') && e.classList.add('tailwind');
  });

  // $body.classList.add('stop__scroll');

  $fragment.appendChild(clone);
  $projects.appendChild($fragment);

  $projects.addEventListener('click', (e) => {
    if (e.target.matches('.modal__close')) {
      const modal = e.target.parentNode.parentNode.parentNode;
      const modalcontent = e.target.parentNode.parentNode;
      modalcontent.style.animationName = 'exitModal';
      setTimeout(() => {
        modal.remove();
      }, 700);

      loader.style.display = 'none';
    } else if (e.target.matches('.modal__background')) {
      const hijo = e.target.childNodes[1];
      hijo.style.animationName = 'exitModal';
      setTimeout(() => {
        e.target.remove();
      }, 700);
      loader.style.display = 'none';
    }
  });
}
