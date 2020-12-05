import App from './components/app';
import './sass/styles.scss';
import './assets/img/favicon.png';

window.onload = () => {
  const app = new App();
  app.init();
};
