import axios from "axios";

const API_URL = "http://localhost:4000/user/";

const register = (username, email, password) => {
  return axios.post(API_URL + "signup", {
    username,
    email,
    password,
  });
};

const login = (username, password) => {
  return axios
    .post(API_URL + "signin", {
      email:username,
      password,
    })
    .then((response) => {
      console.log(response);
      if (response.data.data) {
        localStorage.setItem("user", JSON.stringify(response.data.data));
      }

      return response.data;
    });
};


const deleteUser = (id) => {
  return axios
    .post(API_URL + "delete", {
      id
    })
    .then((response) => {
      console.log(response);
        localStorage.removeItem("user");

      return response.data;
    });
};

const logout = () => {
  localStorage.removeItem("user");
};

export default {
  register,
  login,
  logout,
  deleteUser
};
