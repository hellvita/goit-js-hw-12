import { getImagesByQuery, PER_PAGE } from './js/pixabay-api';
import * as render from './js/render-functions';
import { toastMessage } from './js/settings';

const formEl = document.querySelector('.form');
const inputEl = formEl.elements['search-text'];
const loadBtnEl = document.querySelector('.load-btn');

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

    render.clearGallery();
    render.showLoader();

    currentPage = 1;
    hideLoadBtn();

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
    if (pagesAmount > 1) showLoadBtn();
  } catch (error) {
    handleError(error);
  }
}

async function onLoadMore() {
  try {
    currentPage++;
    hideLoadBtn();
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
    if (pagesAmount > currentPage) showLoadBtn();
    else
      toastMessage(
        "We're sorry, but you've reached the end of search results."
      );
  } catch (error) {
    handleError(error);
  }
}

function showLoadBtn() {
  loadBtnEl.addEventListener('click', onLoadMore);
  loadBtnEl.classList.remove('hidden');
}
function hideLoadBtn() {
  loadBtnEl.removeEventListener('click', onLoadMore);
  loadBtnEl.classList.add('hidden');
}

function handleError(error) {
  render.hideLoader();
  toastMessage('Failed to fetch images. Please try again later.');
  console.log(error);
}
