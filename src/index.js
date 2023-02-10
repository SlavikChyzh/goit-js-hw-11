import Notiflix from 'notiflix';
import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';

import { getImages } from './axiosImages';
import { createMarkUp } from './markUp';
const searchInputEl = document.getElementById('search-input');
const searchFormEl = document.getElementById('search-form');
const galleryEl = document.getElementById('gallery');
const loadMoreBtnEl = document.getElementById('load_more');
let simpleLightbox = new SimpleLightbox('.gallery a', {
  captionsData: 'alt',
  captionDelay: 500,
});

let page = 1;

searchFormEl.addEventListener('submit', submitFormHandler);
loadMoreBtnEl.addEventListener('click', loadMoreBtnElClickHandler);

function submitFormHandler(event) {
  event.preventDefault();
  page = 1;
  galleryEl.innerHTML = '';

  getImages(searchInputEl.value, page)
    .then(data => {
      if (data.length === 0) {
        loadMoreBtnEl.classList.add('invisible');
        throw new Error(
          'Sorry, there are no images matching your search query. Please try again.'
        );
      }
      return data;
    })
    .then(data => {
      createMarkUp(data, galleryEl);
      simpleLightbox.refresh();
      Notiflix.Notify.success(`"Hooray! We found ${data.length} images."`);
      loadMoreBtnEl.classList.remove('invisible');
    })
    .catch(err => Notiflix.Notify.failure(err.message));
}

function loadMoreBtnElClickHandler(event) {
  event.preventDefault();
  page += 1;
  getImages(searchInputEl.value, page)
    .then(data => {
      console.log(data.length);
      if (data.length === 0) {
        loadMoreBtnEl.classList.add('invisible');
        throw new Error(
          "We're sorry, but you've reached the end of search results."
        );
      }
      return data;
    })
    .then(data => {
      createMarkUp(data, galleryEl);
      simpleLightbox.refresh();
      Notiflix.Notify.success(
        `"Hooray! We found ${(page - 1) * 40 + data.length} images."`
      );
    })
    .catch(err => Notiflix.Notify.failure(err.message));
}
