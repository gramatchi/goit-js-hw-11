import { onClickSearch } from './js/pixabay-api';
import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';

const searchBtnRef = document.querySelector('.js-search-btn');
const inputRef = document.querySelector('.js-search-input');

searchBtnRef.addEventListener('click', () => {
  const inputValue = inputRef.value;
  if (inputValue.trim() !== '') {
    onClickSearch(inputValue);
  } else {
    iziToast.warning({
      title: 'Warning',
      message: 'Please enter a search query!',
    });
  }
});
