import axios, {isAxiosError} from 'axios';

/*
const userRequest = axios.create({
  baseURL: 'https://wegohs.info/',
})
*/


const articleRequest = axios.create({
  baseURL: 'https://wegohs.info/',
})

export const getArticle =
  async (id: string) => {
    articleRequest.get(`/article/?id=${id}`).catch(err => {
      if (isAxiosError(err)) {
        console.error(err);
      }
    })
  }