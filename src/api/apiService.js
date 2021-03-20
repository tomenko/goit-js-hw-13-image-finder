import { BASE_URL } from '../settings/baseUrl';
import { KEY_API } from '../settings/keyApi';

export default class ApiImages {
    constructor() {
        this.searchQuery = null;
        this.page = 1;
    }

    async fetchImages() {
        const response = await fetch(`${BASE_URL}&q=${this.searchQuery}&page=${this.augmentPage}&per_page=4&key=${KEY_API}`)

        if (!response.ok) {
            throw response;
        }
        
        return response
          .json()
          .then(({ hits }) => {
            this.augmentPage();

            return hits; 
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

