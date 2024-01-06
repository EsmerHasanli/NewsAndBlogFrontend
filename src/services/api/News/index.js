import axios from "axios";
import BASE_URL from "../BASE_URL";

//get all news
export const getAllNews = async () => {
  let news;
  await axios.get(`${BASE_URL}/news`).then((response) => {
    news = response.data;
  });
  return news;
};

//get news (id)
export const getNewsbyID = async (id) => {
  let news;
  await axios.get(`${BASE_URL}/news/${id}`).then((response) => {
    news = response.data;
  });
  return news;
};

//post news
export const postNews = async (payload) => {
  let news;
  await axios.post(`${BASE_URL}/news`, payload).then((response) => {
    news = response.data;
  });
  return news;
};