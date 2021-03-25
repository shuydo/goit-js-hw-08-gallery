import collection from "./gallery-items.js";

const coll = collection.map((el) => el.description);
let currNumbChoice = 0;

const galContainer = document.querySelector(".js-gallery");
const modal = document.querySelector(".lightbox");
const closeModalBtn = document.querySelector('[data-action="close-lightbox"]');
const contentModal = document.querySelector(".lightbox__image");
// const backDrop = document.querySelector(".lightbox__overlay");

const cardsMarkUp = createGalCardsMarkUp(collection);

galContainer.insertAdjacentHTML("beforeend", cardsMarkUp);

galContainer.addEventListener("click", onGalContainerClick);
closeModalBtn.addEventListener("click", onCloseModal);
// backDrop.addEventListener("click", onbackDropClick);
function createGalCardsMarkUp(collection) {
  return collection
    .map(({ preview, original, description }) => {
      return `
        <li class="gallery__item">
          <a class="gallery__link" href="${original}">
            <img class="gallery__image"
              src="${preview}"
              data-source="${original}"
              alt="${description}"
            />
          </a>
        </li>       
            `;
    })
    .join("");
}

function onGalContainerClick(evt) {
  // console.log('onGalContainerClick');
  evt.preventDefault();

  window.addEventListener("keydown", onKeyPress);

  const isGalItem = evt.target.classList.contains("gallery__image");
  if (!isGalItem) {
    return;
  }

  contentModal.src = evt.target.dataset.source;
  contentModal.alt = evt.target.alt;

  modal.classList.add("is-open");

  currNumbChoice = coll.indexOf(contentModal.alt);
}
function onCloseModal() {
  window.removeEventListener("keydown", onKeyPress);

  modal.classList.remove("is-open");

  contentModal.src = "";
  contentModal.alt = "";
}
// function onbackDropClick(evt) {
//   console.log("Click on bDrop");
//   onCloseModal();
//   if (evt.currentTarget===evt.target)console.log('Target - bDrop');
// }
function onKeyPress(evt) {
  if (evt.code === "Escape") onCloseModal();
  if (evt.code === "ArrowLeft") pressKeyLeft();
  if (evt.code === "ArrowRight") pressKeyRight();
}
function pressKeyLeft() {
  if (currNumbChoice === 0) currNumbChoice = coll.length;
  currNumbChoice -= 1;

  changeImg();
}
function pressKeyRight() {
  if (currNumbChoice === coll.length - 1) currNumbChoice = -1;
  currNumbChoice += 1;

  changeImg();
}
function changeImg() {
  contentModal.src = collection[currNumbChoice].original;
  contentModal.alt = collection[currNumbChoice].original;
}
