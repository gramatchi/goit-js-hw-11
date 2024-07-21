import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';
import SimpleLightbox from "simplelightbox";
import "simplelightbox/dist/simple-lightbox.min.css";
import { imageTemplate } from './render-functions';

const BASE_URL = 'https://pixabay.com/api/';
const API_KEY = '45042882-3b5507a901f9feb9cee5f866e';
const IMAGE_TYPE = 'photo';
const ORIENTATION = 'horizontal';
const SAFESEARCH = 'true';

const options = {
  method: 'GET',
};

export function onClickSearch(inputValue) {
  const galleryRef = document.querySelector('.gallery');
  galleryRef.innerHTML = ''; 

  fetch(
    `${BASE_URL}?key=${API_KEY}&q=${inputValue}&image_type=${IMAGE_TYPE}&orientation=${ORIENTATION}&safesearch=${SAFESEARCH}`,
    options
  )
    .then(response => {
      if (!response.ok) {
        throw new Error(response.status);
      }
      return response.json();
    })
    .then(data => {
      if (data.hits.length === 0) {
        iziToast.error({
          title: 'Error',
          message: 'Sorry, there are no images matching your search query. Please try again!',
        });
      } else {
        data.hits.forEach(image => {
          const imageMarkup = imageTemplate(image);
          galleryRef.insertAdjacentHTML('beforeend', imageMarkup);
        });
        iziToast.success({
          title: 'Success',
          message: 'Here we are',
        });
        const lightbox = new SimpleLightbox('.gallery a');
        lightbox.refresh();
      }
    })
    .catch(error => {
      iziToast.error({
        title: 'Error',
        message: `Oooops ${error.message}`,
      });
      console.log(error);
    });
}
