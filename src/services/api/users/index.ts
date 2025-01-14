import axios from "axios";
import BASE_URL from "../BASE_URL";

//get all users
export const getAllUsers = async () => {
  let users;
  await axios.get(`${BASE_URL}/users`).then((response) => {
    users = response.data;
  });
  return users;
};

//get user (id)
export const getUserByID = async (id) => {
  let user;
  await axios.get(`${BASE_URL}/users/${id}`).then((response) => {
    user = response.data;
  });
  return user;
};

//post user
export const postUser = async (payload) => {
  let newUser;
  await axios.post(`${BASE_URL}/users`, payload).then((response) => {
    newUser = response.data;
  });
  return newUser;
};

//put User
export const putUser = async (id, payload) => {
  let editedUser;
  await axios.put(`${BASE_URL}/users/${id}`, payload).then((response) => {
    editedUser = response.data;
  });
  return editedUser;
};

export const deleteUser = async (id) => {
    let deletedUser;
    await axios.delete(`${BASE_URL}/users/${id}`).then((response) => {
      deletedUser = response.data;
    });
    return deletedUser; 
};

export const loginUser = async(currentUser: {email: string, password: string}) =>{
  // : Promise<{status: number,message: string, token?: string} | undefined>
  
    let result = undefined;
     await axios.post(`${BASE_URL}/users/login`, currentUser)
     .then((res: AxiosResponse)=>{
         result = res.data;
     });
     if (result) {
         return result;
     }
     else{
         return undefined;
     }
  }

  