import axios from 'axios';
let baseOptions = {
  mode: 'no-cors',
  headers: {
    'Access-Control-Allow-Origin': '*',
    'Content-Type': 'application/json',
  },
};

class Interceptor {
  get(url, options) {
    if (localStorage.getItem("api_token")) {
      const authKey = localStorage.getItem('api_token');
      baseOptions.headers.Authorization = `Bearer ${authKey}`;
    }
    return axios.get(url, { ...baseOptions, ...options });
  }

  post(url, data, options) {
    if (localStorage.getItem("api_token")) {
      const authKey = localStorage.getItem('api_token');
      baseOptions.headers.Authorization = `Bearer ${authKey}`;
    }
    return axios.post(url, data, { ...baseOptions, ...options });
  }

  patch(url, data, options) {
    if (localStorage.getItem("api_token")) {
      const authKey = localStorage.getItem('api_token');
      baseOptions.headers.Authorization = `Bearer ${authKey}`;
    }
    return axios.patch(url, data, { ...baseOptions, ...options });
  }

  delete(url) {
    if (localStorage.getItem("api_token")) {
      const authKey = localStorage.getItem('api_token');
      baseOptions.headers.Authorization = `Bearer ${authKey}`;
    }
    return axios.delete(url, baseOptions);
  }
}

export default Interceptor;
