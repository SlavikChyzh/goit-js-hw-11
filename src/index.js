import Notiflix from 'notiflix';
import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';

import { getImages } from './axiosImages';
import { createMarkUp } from './markUp';
const searchInputEl = document.getElementById('search-input');
const submitBtnEL = document.getElementById('submit-btn');
const searchFormEl = document.getElementById('search-form');
const galleryEl = document.getElementById('gallery');
let simpleLightbox = new SimpleLightbox('.gallery a');

searchFormEl.addEventListener('submit', submitFormHandler);

function submitFormHandler(event) {
  event.preventDefault();
  galleryEl.innerHTML = '';
  getImages(searchInputEl.value)
    .then(({ data }) => {
      console.log(data.hits);
      return data.hits;
    })
    .then(data => {
      createMarkUp(data, galleryEl);
      simpleLightbox.refresh();
    });
}
