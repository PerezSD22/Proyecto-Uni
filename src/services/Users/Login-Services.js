import axios from "axios";

const baseURL = "https://poryectosantraelena.000webhostapp.com/";

export const registerRequest = (user) => axios.post(`${baseURL}Register/User/1"`,JSON.stringify({user}));
export const loginRequest = (user, password) => axios.post(`${baseURL}Login`, JSON.stringify({ user, password }));

