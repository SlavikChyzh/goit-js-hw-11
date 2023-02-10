import axios from 'axios';

const key = '33344589-afa1c8c0d7150dc22fd06ea0f';
const parameters = `?key=${key}&image_type=photo&orientation=horizontal&safesearch=true&per_page=40`;

axios.defaults.baseURL = 'https://pixabay.com/api/';

async function getImages(query, page) {
  const response = await axios
    .get(`${parameters}&q=${query}&page=${page}`)
    .then(({ data }) => {
      return data.hits;
    });
  return response;
}

export { getImages };
