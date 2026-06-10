import { PageFlip } from 'page-flip';
import './style.css';

const pageFlip = new PageFlip(document.getElementById('book'), {
  width: 600,
  height: 850,
  size: 'fixed',
  showCover: false,
  mobileScrollSupport: false,
});

pageFlip.loadFromImages([
  '/paginas/paginas1.jpeg',
  '/paginas/paginas2.jpeg',
  '/paginas/paginas3.jpeg',
  '/paginas/paginas4.jpeg',
  '/paginas/paginas5.jpeg',
  '/paginas/paginas6.jpeg',
]);