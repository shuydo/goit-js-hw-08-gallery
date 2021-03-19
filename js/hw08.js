import collection from "./gallery-items.js";

const galContainer = document.querySelector(".js-gallery");
const cardsMarkUp = createGalCardsMarkUp(collection);

galContainer.insertAdjacentHTML("beforeend", cardsMarkUp);

// let target='';

galContainer.addEventListener("click", onGalContainerClick);
// console.log(target);

// console.dir(createGalCardsMarkUp(collection));
// const createGalCardsMarkUp =  items=>{
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
    console.log('onGalContainerClick');
    const isGalItem=evt.target.classList.contains('gallery__item')
    if (!isGalItem){
        return;
    }
    // target=evt.target;
    // console.log(evt.target);
}

/* <li class="gallery__item">
        <a
          class="gallery__link"
          href="https://cdn.pixabay.com/photo/2010/12/13/10/13/tulips-2546_1280.jpg"
        >
          <img
            class="gallery__image"
            src="https://cdn.pixabay.com/photo/2010/12/13/10/13/tulips-2546__340.jpg"
            data-source="https://cdn.pixabay.com/photo/2010/12/13/10/13/tulips-2546_1280.jpg"
            alt="Tulips"
          />
        </a>
      </li> */
