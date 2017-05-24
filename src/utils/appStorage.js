import { base64 } from './base64';

const STORAGE_KEYS = {
  'TOKEN': 'token',
};

const storageAvailable = function storageAvailable() {
  const test = 'test';
  try {
    localStorage.setItem(test, test);
    localStorage.removeItem(test);
    return true;
  } catch (e) {
    return false;
  }
};

const set = function set(key, value) {
  localStorage.setItem(base64.encode(key), base64.encode(value));
};

const get = function get(key) {
  const obj = localStorage.getItem(base64.encode(key));
  return obj ? base64.decode(obj) : null;
};

const remove = function remove(key) {
  localStorage.removeItem(base64.encode(key));
};

const clear = function clear() {
  localStorage.clear();
};

export const appStorage = {
  set,
  get,
  clear,
  remove,
  storageAvailable,
  keys: STORAGE_KEYS
};
