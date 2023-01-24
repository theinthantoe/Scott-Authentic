import axios from "axios";
const Base_url = "https://fakestoreapi.com";
export const getData = async (url) => {
  const { data } = await axios.get(`${Base_url}${url}`);
  return data;
};
