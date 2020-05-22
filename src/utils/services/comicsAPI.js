import { BASE_URL, COMICS_BASE_URL, API_KEY } from '../helper';

const getAllComicsAPI = (offset, success) => {

  let url =
    `${BASE_URL}/${COMICS_BASE_URL}?apikey=${API_KEY}&limit=40&offset=${offset}&hasDigitalIssue=${true}`;
  return fetch(url)
    .then(res => res.json())
    .then((resObj) => {
      try {
        if (resObj.code === 200) {
          return success(resObj);
        } else {
          throw new Error(`Marvel API bad response. Status code ${resObj.code}.`);
        }
      } catch (err) {
        console.error(err);
        return {
          data: {}
        };
      }
    });
}

const getComicDetailsAPI = (comicId, success) => {

  let url =
    `${BASE_URL}/${COMICS_BASE_URL}/${comicId}?apikey=${API_KEY}`;
  return fetch(url)
    .then(res => res.json())
    .then((resObj) => {
      try {
        if (resObj.code === 200) {
          return success(resObj);
        } else {
          throw new Error(`Marvel API bad response. Status code ${resObj.code}.`);
        }
      } catch (err) {
        console.error(err);
        return {
          data: {}
        };
      }
    });
}

export {
  getAllComicsAPI,
  getComicDetailsAPI,
};
  