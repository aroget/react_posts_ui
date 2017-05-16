const TOKEN = 'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOjIsImV4cCI6MTQ5NTAxNTk3MSwiaWF0IjoxNDk0OTI5NTcxfQ.jmfbDosjVpoIVjrviUv3-JA6KrLDeEQ0hdVnvlVJams';

const API_URL = 'https://ar-flask-posts-api.herokuapp.com';

const API_RESOURCES = {
  'POSTS': 'posts',
  'ROLES': 'roles',
  'PROFILE': 'profile'
}

export const API = {
  TOKEN,
  URL: API_URL,
  RESOURCES: API_RESOURCES
}