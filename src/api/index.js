import axios from "axios";

const apiUrl = process.env.REACT_APP_API_URL;

export default async (input, params = {}) => {
  const { method, url } = input;
  return await axios({
    method,
    url: apiUrl + url
  })
    .then(response => {
      console.log(response);
    })
    .catch(error => {
      console.log(error);
    })
    .finally(function() {});
};
