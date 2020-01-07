import axios from "axios";
import QS from "qs";

const apiUrl = process.env.REACT_APP_API_URL;

axios.interceptors.request.use(
  function(config) {
    config.headers = {
      "content-type": "application/json"
    };
    return config;
  },
  function(error) {
    // Do something with request error
    return Promise.reject(error);
  }
);

// Add a response interceptor
axios.interceptors.response.use(
  function(response) {
    const res = {
      data: response.data,
      status: response.status
    };
    return res;
  },
  function(error) {
    return Promise.reject(error);
  }
);

export default async (input, params = {}) => {
  const { method, url } = input;
  const queryString =
    method.toLowerCase() === "get" ? `?${QS.stringify(params)}` : "";
  return await axios({
    method,
    url: apiUrl + url + queryString
  })
    .then(response => {
      return response;
    })
    .catch(error => {
      console.log(error);
      return { isError: true, data: null };
    })
    .finally(function() {});
};
