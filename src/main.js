import { getImagesByQuery } from './js/pixabay-api';
import * as render from './js/render-functions';
import { toastMessage } from './js/settings';

const formEl = document.querySelector('.form');
const inputEl = formEl.elements['search-text'];

formEl.addEventListener('submit', onSearch);

function onSearch(e) {
  e.preventDefault();
  handleImageSearch();
  formEl.reset();
}

function handleImageSearch() {
  const query = inputEl.value.trim();

  if (!query) {
    toastMessage('&#128269; enter the query to search');
    return;
  }

  render.clearGallery();
  render.showLoader();

  getImagesByQuery(query)
    .then(images => {
      render.hideLoader();

      if (images.length === 0) {
        toastMessage(
          'Sorry, there are no images matching your search query. Please try again!'
        );
        return;
      }

      render.createGallery(images);
    })
    .catch(error => {
      render.hideLoader();
      toastMessage('Failed to fetch images. Please try again later.');
      console.log(error);
    });
}
