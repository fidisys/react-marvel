import { BASE_URL, SERIES_BASE_URL, API_KEY } from '../helper';

const getAllSeriesAPI = (offset, success) => {

  let url =
    `${BASE_URL}/${SERIES_BASE_URL}?apikey=${API_KEY}&limit=40&offset=${offset}`;
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

const getSeriesDetailsAPI = (seriesId, success) => {

  let url =
    `${BASE_URL}/${SERIES_BASE_URL}/${seriesId}?apikey=${API_KEY}`;
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
  getAllSeriesAPI,
  getSeriesDetailsAPI,
};
  