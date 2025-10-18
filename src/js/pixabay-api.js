import axios from 'axios';

const API_KEY = '52683370-9ae3cf283454fd0e20897a7f1';
const BASE_URL = 'https://pixabay.com/api/';
export const PER_PAGE = 9;

const API_PARAMS = {
  image_type: 'photo',
  orientation: 'horizontal',
  safesearch: true,
  per_page: PER_PAGE,
};

export function getImagesByQuery(query, page) {
  if (!query || typeof query !== 'string') {
    return Promise.reject(new Error('Invalid query parameter'));
  }

  const params = {
    key: API_KEY,
    q: query,
    page,
    ...API_PARAMS,
  };

  return axios.get(BASE_URL, { params });
}
