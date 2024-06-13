import axios from 'axios';

// TODO

export const httpClient = axios.create({
  // baseURL: 'https://api.example.com',
});

export const get = async (url: string) => {
  return await httpClient.get(url);
};

export const post = async (url: string) => {
  return await httpClient.post(url);
};

export const put = async (url: string) => {
  return await httpClient.put(url);
};

export const patch = async (url: string) => {
  return await httpClient.patch(url);
};

export const _delete = async (url: string) => {
  return await httpClient.delete(url);
};
