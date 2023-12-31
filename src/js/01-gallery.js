import SimpleLightbox from "simplelightbox";

import "simplelightbox/dist/simple-lightbox.min.css";

import { galleryItems } from './gallery-items';

function createMarkup(arr) {
    return arr.map(({ preview, original, description }) =>
    `
    <li class="gallery__item">
        <a class="gallery__link" href="${original}">
            <img class="gallery__image" src="${preview}" alt="${description}" />
        </a>
    </li>
    `).join("");
}

const list = document.querySelector(".gallery");
list.insertAdjacentHTML("beforeend", createMarkup(galleryItems));

const gallery = new SimpleLightbox('.gallery a', {
    captionsData: 'alt', 
    captionDelay: 250
});

console.log(galleryItems);
