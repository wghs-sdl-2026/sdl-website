import axios, {isAxiosError} from 'axios';

const instance = axios.create({
  baseURL: 'https://wegohs.info',
})

export const getArticle = async (id: string) => {
  try {
    axios.get(`/${instance}/article?id=${id}`)
      .then((res) => {
        console.log(res.data);
      })
  }
  catch (e) {
    if (isAxiosError(e)) {
      return e.status || 500;
    }
    return 500;
  }
}