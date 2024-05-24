import axios from "axios";

const api = async (url, method, body) => {
  axios.defaults.baseURL("http://104.198.228.54:9200/api/v1/");
  const res = await axios(url, method, body);
  return res;
};

export default api;
