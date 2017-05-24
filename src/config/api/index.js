const TOKEN = 'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOjIsImV4cCI6MTQ5NTcxMDQzMCwiaWF0IjoxNDk1NjI0MDMwfQ.tNFZ1LWc9rXhpCw9EWOfb-8JD2H92gbwhXvAy-1duSk';

const API_URL = 'http://127.0.0.1:5000';

const API_RESOURCES = {
  'TAG': 'tag',
  'TAGS': 'tags',
  'POST': 'post',
  'POSTS': 'posts',
  'MEDIA': 'media',
  'ROLES': 'roles',
  'LOGIN': 'login',
  'PROFILE': 'profile'
}

export const API = {
  TOKEN,
  URL: API_URL,
  RESOURCES: API_RESOURCES
}