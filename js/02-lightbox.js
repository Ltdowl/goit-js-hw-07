import { galleryItems } from "./gallery-items.js";
// Change code below this line

console.log(galleryItems);

function createImageElement(array) {
  return array
    .map(({ preview, original, description }) => {
      return `
   <li>
    <a class="gallery__item" href="${original}">
    <img 
    style="display:block"
    class="gallery__image"
    src="${preview}"
    alt="${description}"
    />
  </a>
  </li>
    `;
    })
    .join("");
}

const galleryContainer = document.querySelector(".gallery");
const markup = createImageElement(galleryItems);

galleryContainer.insertAdjacentHTML("beforeend", markup);

let gallery = new SimpleLightbox(".gallery a", {
  captions: true,
  captionsData: "alt",
  captionPosition: "bottom",
  captionDelay: 250,
});
