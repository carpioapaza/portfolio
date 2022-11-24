import { getUser } from '../helpers/api.js';
export async function drawProfile() {
  const $socialItems = document.querySelector('.social__item');
  const $templateGithubCard = document.getElementById('card__github__template');
  const $fragment = document.createDocumentFragment();

  const users = await getUser();
  const clone = $templateGithubCard.content.cloneNode(true);
  clone.querySelector('.github__img').src = `${users.avatar_url}`;
  clone.querySelector('.github__user').textContent = `@${users.login}`;
  clone.querySelector('.github__user').href = `${users.html_url}`;
  $fragment.appendChild(clone);
  $socialItems.appendChild($fragment);
}
