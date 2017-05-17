import { API } from '../config/api';

export class BaseService {

  buildHeaders() {
    let headers = new Headers();

    headers.append('Content-Type', 'application/json');
    headers.append('Authorization', `Token ${API.TOKEN}`);

    const options = {
      headers: headers
    }

    return options;
  }

  get(endpoint) {
    let options = this.buildHeaders();
    options = Object.assign({}, options, { method: 'GET' });

    return new Promise((resolve, reject) => {
      fetch(`${API.URL}/${endpoint}`, options)
        .then(res => resolve(res.json()))
        .catch(err => reject(err));
    })
  }

  delete(endpoint) {
    let options = this.buildHeaders();
    options = Object.assign({}, options, { method: 'DELETE' });

    return new Promise((resolve, reject) => {
      fetch(`${API.URL}/${endpoint}`, options)
        .then(res => resolve(res.json()))
        .catch(err => reject(err));
    })
  }

  post(data, endpoint) {
    let options = this.buildHeaders();
    options = Object.assign(
      {},
      options,
      {
        method: 'POST',
        processData: false,
        contentType: false,
        mimeType: 'multipart/form-data',
        body: JSON.stringify(data)
      }
    );

    return new Promise((resolve, reject) => {
      fetch(`${API.URL}/${endpoint}`, options)
        .then(res => resolve(res.json()))
        .catch(err => reject(err));
    })
  }

  postMedia(media, endpoint) {
    let headers = new Headers();
    let formData = new FormData();

    formData.append('file', media);

    headers.append('Authorization', `Token ${API.TOKEN}`);

    const options = {
      method: 'POST',
      headers: headers,
      body: formData
    }

    return new Promise((resolve, reject) => {
      fetch(`${API.URL}/${endpoint}`, options)
        .then(res => resolve(res.json()))
        .catch(err => reject(err));
    })
  }
}


