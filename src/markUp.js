function createMarkUp(arr, gallery) {
  const markUp = arr.reduce((acc, el) => {
    const {
      id,
      largeImageURL,
      webformatURL,
      tags,
      likes,
      views,
      comments,
      downloads,
    } = el;
    acc += `
    <a class="gallery__link col" href="${largeImageURL}">
      <div class="gallery-item" id="${id}">
        <img class="gallery-item__img" src="${webformatURL}" alt="${tags}" loading="lazy" />
          <div class="info row row-cols-4">
            <p class="info-item col"><b>Likes</b>${likes}</p>
            <p class="info-item col"><b>Views</b>${views}</p>
            <p class="info-item col"><b>Comments</b>${comments}</p>
            <p class="info-item col"><b>Downloads</b>${downloads}</p>
            </div>
          </div>
        </a>
      `;
    return acc;
  }, '');
  gallery.insertAdjacentHTML('beforeend', markUp);
}

export { createMarkUp };
