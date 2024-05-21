import axios from "axios";

const api = async (url, method, body) => {
  axios.defaults.baseURL("http://localhost:9200/api/v1/");
  const res = await axios(url, method, body);
  return res;
};

export default api;
