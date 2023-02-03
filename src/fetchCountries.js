const url = '';
const parameters = ``;

function fetchCountries(nameOfCountry) {
  return fetch(`${url}${nameOfCountry}?fields=${parameters}`).then(res => {
    if (!res.ok) {
      throw new Error('Something went wrong 404');
    }
    return res.json();
  });
}

export { fetchCountries };
