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
        <a class=" gallery-item" href="${largeImageURL}">
          <img class="gallery-item__img" src="${webformatURL}" alt="${tags}" loading="lazy" />
        <div class="info">
          <p class="info-item"><b>Likes</b>${likes}</p>
          <p class="info-item"><b>Views</b>${views}</p>
          <p class="info-item"><b>Comments</b>${comments}</p>
          <p class="info-item"><b>Downloads</b>${downloads}</p>
        </div>
        </a>
        
    `;

    return acc;
  }, '');
  gallery.insertAdjacentHTML('beforeend', markUp);
}

export { createMarkUp };
