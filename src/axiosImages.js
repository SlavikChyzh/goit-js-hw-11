import axios from 'axios';

const key = '33344589-afa1c8c0d7150dc22fd06ea0f';
const parameters = `?key=${key}&image_type=photo&orientation=horizontal&safesearch=true`;

axios.defaults.baseURL = 'https://pixabay.com/api/';

function getImages(query) {
  return axios.get(`${parameters}&q=${query}`);
}

export { getImages };
