const TOKEN = 'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJleHAiOjE0OTU1MzUzODMsInN1YiI6MiwiaWF0IjoxNDk1NDQ4OTgzfQ.x8loSH5epbZiP84BSbfFVhVeTM8f25sNAwY_3rGOf8Y';

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