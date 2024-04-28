import axios from "axios";

// axios.defaults.baseURL = "https://identitytoolkit.googleapis.com/v1";
const API_KEY = "AIzaSyBSpwIpuwztVuUmQ9g-Tod3SHx9ydkVeK8";
// const REGISTER_URL = `/accounts:signUp?key=${API_KEY}`;

let REGISTER_URL = `https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=${API_KEY}`;

export const RegisterApi = (input) => {
  let data = {
    displayName: String(input.name),
    email: String(input.email),
    password: String(input.password),
  };
  console.log(REGISTER_URL);
  console.log(data);

  return axios.post(REGISTER_URL, data);
};
