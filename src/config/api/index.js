const TOKEN = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpYXQiOjE0OTUwMTYxMTcsImV4cCI6MTQ5NTEwMjUxNywic3ViIjoyfQ.EKRjmBuh7sq47zzxDmfSqy3_BHGjLMppiLdpNw2B9pY';

const API_URL = 'https://ar-flask-posts-api.herokuapp.com';

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