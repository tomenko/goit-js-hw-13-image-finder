import { BASE_URL } from '../settings/baseUrl';
import { KEY_API } from '../settings/keyApi';
import numberPage from '../components/numberPage';
import searchQuery from '../components/searchQuery';

function fetchImages (searchQuery, numberPage, ) {
    return fetch(`${BASE_URL}&q=${searchQuery()}&page=${numberPage()}&per_page=12&key=${KEY_API}`).then(response => {
        if (!response.ok) throw `Cтатус ошибки: ${response.status}`;
        return response.json();
    });
};

export default { fetchImages };