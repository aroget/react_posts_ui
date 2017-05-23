const TOKEN = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpYXQiOjE0OTU1MzczMjIsInN1YiI6MiwiZXhwIjoxNDk1NjIzNzIyfQ.7Sc90Plyey817wYquOqRNAVsZh5aS7SPDTUlrnMLHDc';

const API_URL = 'http://127.0.0.1:5000';

const API_RESOURCES = {
  'TAGS': 'tags',
  'POST': 'post',
  'POSTS': 'posts',
  'MEDIA': 'media',
  'ROLES': 'roles',
  'PROFILE': 'profile'
}

export const API = {
  TOKEN,
  URL: API_URL,
  RESOURCES: API_RESOURCES
}