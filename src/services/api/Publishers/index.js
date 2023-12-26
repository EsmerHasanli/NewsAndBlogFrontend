import axios from "axios";
import BASE_URL from "../BASE_URL";

//get all publishers
export const getAllPublishers = async () => {
  let publishers;
  await axios.get(`${BASE_URL}/publishers`).then((response) => {
    publishers = response.data;
  });
  return publishers;
};

//get publisher (id)
export const getPublisherByID = async (id) => {
  let publisher;
  await axios.get(`${BASE_URL}/publishers/${id}`).then((response) => {
    publisher = response.data;
  });
  return publisher;
};

//post publisher
export const postPublisher = async (payload) => {
  let newPublisher;
  await axios.post(`${BASE_URL}/publishers`, payload).then((response) => {
    newPublisher = response.data;
  });
  return newPublisher;
};