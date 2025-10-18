import { getImagesByQuery, PER_PAGE } from './js/pixabay-api';
import * as render from './js/render-functions';
import { toastMessage } from './js/settings';

const formEl = document.querySelector('.form');
const inputEl = formEl.elements['search-text'];

let currentPage = 1;
let pagesAmount = 0;
let query = '';

formEl.addEventListener('submit', onSearch);

function onSearch(e) {
  e.preventDefault();
  handleImageSearch();
  formEl.reset();
}

async function handleImageSearch() {
  try {
    query = inputEl.value.trim();

    if (!query) {
      toastMessage('&#128269; enter the query to search');
      return;
    }

    currentPage = 1;
    render.hideLoadBtn();
    render.clearGallery();
    render.showLoader();

    const { data } = await getImagesByQuery(query, currentPage);
    const images = data.hits;

    render.hideLoader();

    if (images.length === 0) {
      toastMessage(
        'Sorry, there are no images matching your search query. Please try again!'
      );
      return;
    }

    render.createGallery(images);

    pagesAmount = Math.ceil(data.totalHits / PER_PAGE);
    if (pagesAmount > 1) {
      render.showLoadBtn();
      render.bindLoadMoreHandler(onLoadMore);
    } else {
      endOfListMsg();
    }
  } catch (error) {
    handleError(error);
  }
}

async function onLoadMore() {
  try {
    currentPage++;
    render.hideLoadBtn();
    render.unbindLoadMoreHandler(onLoadMore);
    render.showLoader();

    const { data } = await getImagesByQuery(query, currentPage);
    const images = data.hits;

    render.hideLoader();

    if (images.length === 0) {
      toastMessage(
        'Sorry, there are no images matching your search query. Please try again!'
      );
      return;
    }

    render.createGallery(images);
    render.scrollGallery();

    if (pagesAmount > currentPage) {
      render.showLoadBtn();
      render.bindLoadMoreHandler(onLoadMore);
    } else {
      endOfListMsg();
    }
  } catch (error) {
    handleError(error);
  }
}

function handleError(error) {
  render.hideLoader();
  toastMessage('Failed to fetch images. Please try again later.');
  console.log(error);
}

function endOfListMsg() {
  toastMessage("We're sorry, but you've reached the end of search results.");
}
