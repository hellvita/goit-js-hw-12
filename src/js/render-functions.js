import SimpleLightbox from 'simplelightbox';

const loaderEl = document.querySelector('.loader');
const galleryListEl = document.querySelector('.gallery');

const galleryLightbox = new SimpleLightbox('.gallery-link', {
  captionsData: 'alt',
  captionDelay: 250,
});

export function createGallery(images) {
  const photoCardsMarkup = images
    .map(image => createGalleryCard(image))
    .join('');

  galleryListEl.insertAdjacentHTML('beforeend', photoCardsMarkup);

  galleryLightbox.refresh();
}

function createGalleryCard(image) {
  return `
    <li class="gallery-card">
      <a class="gallery-link" href="${image.largeImageURL}">
        <img
          src="${image.webformatURL}"
          alt="${image.tags}"
        />
      </a>
      <div class="card-description">
        <div class="description-item">
          <h2 class="description-title">Likes</h2>
          <p class="description-value">${image.likes}</p>
        </div>
        <div class="description-item">
          <h2 class="description-title">Views</h2>
          <p class="description-value">${image.views}</p>
        </div>
        <div class="description-item">
          <h2 class="description-title">Comments</h2>
          <p class="description-value">${image.comments}</p>
        </div>
        <div class="description-item">
          <h2 class="description-title">Downloads</h2>
          <p class="description-value">${image.downloads}</p>
        </div>
      </div>
    </li>
  `;
}

export function clearGallery() {
  galleryListEl.innerHTML = '';
}

export function showLoader() {
  loaderEl.classList.remove('hidden');
}

export function hideLoader() {
  loaderEl.classList.add('hidden');
}
