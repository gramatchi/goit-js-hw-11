export function imageTemplate({largeImageURL, tags, likes, views, comments, downloads, webformatURL}) {
    return `
      <a href="${largeImageURL}" class="gallery__item">
        <div class="item-gallery">
          <img src="${webformatURL}" alt="${tags}">
          <p>${tags}</p>
          <p>Likes: ${likes}</p>
          <p>Views: ${views}</p>
          <p>Comments: ${comments}</p>
          <p>Downloads: ${downloads}</p>
        </div>
      </a>
    `;
  }
  