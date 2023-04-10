// Add imports above this line
import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';
import { galleryItems } from './gallery-items';

console.log(galleryItems);

const galleryRef = document.querySelector('.gallery');

galleryRef.innerHTML = galleryItems
  .map(({preview, original, description}) => {
    return `
    <div class = "gallery__item">
    <a class = "gallery__link" href= "${original}">
    <img  
    class = "gallery__image" 
    data-source = "${original}" 
    src = ${preview} 
    alt = "${description}">
    </a>
    </div>
    `;
  })
  .join('');

const lightbox = new SimpleLightbox('.gallery a', {
  captionsPosition: 'bottom',
  captionsData: 'alt',
  captionDelay: 250,
});
// Change code below this line

console.log(galleryItems);
