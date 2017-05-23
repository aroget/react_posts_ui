import axios from 'axios';
import { API } from '../config/api';

axios.defaults.headers.common['Authorization'] = `Token ${API.TOKEN}`;

export class BaseService {
  get(endpoint) {
    let options = { headers: { 'Content-Type': 'application/json' }}

    return axios.get(`${API.URL}/${endpoint}`, options);
  }

  delete(endpoint) {
    let options = { headers: { 'Content-Type': 'application/json' }}

    return axios.delete(`${API.URL}/${endpoint}`, options);
  }

  post(data, endpoint) {
    let options = { headers: { 'Content-Type': 'application/json' }}

    return axios.post(`${API.URL}/${endpoint}`, JSON.stringify(data), options);
  }

  postMedia(media, endpoint) {
    let options = { headers: { 'Content-Type': 'application/json' }}

    let formData = new FormData();

    formData.append('file', media);

    return axios.post(`${API.URL}/${endpoint}`, formData,  options);
  }
}


