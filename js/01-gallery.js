import { galleryItems } from './gallery-items.js';
// Change code below this line

console.log(galleryItems);

const galleryContainer = document.querySelector(".gallery");
const markup = createImageElement(galleryItems);

galleryContainer.insertAdjacentHTML("beforeend", markup);

galleryContainer.addEventListener("click", onCLickImage);

const instance = basicLightbox.create(
  `
    <img src="" />
`,
  {
    onShow: () => {
      window.addEventListener("keydown", keydownEscape);
    },
    onClose: () => {
      window.removeEventListener("keydown", keydownEscape);
    },
  }
);

function createImageElement(array) {
  return array
    .map(({ preview, original, description }) => {
      return `
    <div class="gallery__item">
  <a class="gallery__link" href="large-image.jpg">
    <img
      class="gallery__image"
      src="${preview}"
      data-source="${original}"
      alt="${description}"
    />
  </a>
</div>
    `;
    })
    .join("");
}

function keydownEscape(event) {
  console.log(event);
  if (event.key === "Escape") {
    instance.close();
    return;
  }
}

function onCLickImage(event) {
  event.preventDefault();
  const bigImage = event.target.dataset.source;

  if (!event.target.classList.contains("gallery__image")) {
    return;
  }
  instance.element().querySelector("img").src = bigImage;
  instance.show();
}
