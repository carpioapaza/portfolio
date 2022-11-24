import { drawProfile } from './components/User.js';
import { drawRepos } from './components/Repos.js';
import { darkMode } from './helpers/darkMode.js';
import { startBackground } from './helpers/intersectionObserver.js';
import { menu } from './helpers/menu.js';
export function App() {
  drawProfile();
  drawRepos();
  darkMode();
  startBackground();
  menu();
}
