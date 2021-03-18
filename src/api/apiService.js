import { BASE_URL } from '../settings/baseUrl';
import { KEY_API } from '../settings/keyApi';

export default class ApiImages {
    constructor() {
        this.searchQuery = '';
        this.page = 1;
    }

    async fetchImages() {
        const response = await fetch(`${BASE_URL}&q=${this.searchQuery}&page=${this.numberPage}&per_page=12&key=${KEY_API}`)

        if (!response.ok) {
            throw response;
        }
        /* if (!response.ok) throw `Cтатус ошибки: ${response.status}`; */  
        return response
          .json()
          .then(({ hits }) => {
            this.augmentPage();

            return hits; /* hits---resultingValue*/
          })
          .catch(error => {
            console.warn(error);
          });
    }

    augmentPage() {
      this.page += 1; 
    }

    resetPage() {
      this.page = 1;
    }

    get query() {
        return this.searchQuery;
    }

    set query(newQuery) {
        this.searchQuery = newQuery;
    }
};

/* --------------------------------------------------- */
/* export default class ImagesApiService {
  constructor() {
    this.searchQuery = '';
    this.page = 1;
  }

  async fetchImages() {
    const url = `${BASE_URL}/?image_type=photo&orientation=horizontal&q=${this.searchQuery}&page=${this.page}&per_page=12&key=${API_KEY}`;

    const response = await fetch(url);

    if (!response.ok) {
      throw response;
    }

    return response
      .json()
      .then(({ hits }) => {
        this.incrementPage();

        return hits;
      })
      .catch(err => {
        console.warn(err);
      });
  }

  incrementPage() {
    this.page += 1;
  }

  resetPage() {
    this.page = 1;
  }

  get query() {
    return this.searchQuery;
  }

  set query(newQuery) {
    this.searchQuery = newQuery;
  }
} */