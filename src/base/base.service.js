import { API } from '../config/api';

export class BaseService {

  buildHeaders() {
    let headers = new Headers();

    headers.append('Content-Type', 'application/json');
    headers.append('Authorization', `Token ${API.TOKEN}`);

    const options = {
      method: 'GET',
      headers: headers
    }

    return options;
  }

  get(endpoint) {
    const options = this.buildHeaders();

    return new Promise((resolve, reject) => {
      fetch(`${API.URL}/${endpoint}`, options)
        .then(res => resolve(res.json()))
        .catch(err => reject(err));
    })
  }
}


