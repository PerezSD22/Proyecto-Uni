import axios from "axios";

const baseURL = "https://poryectosantraelena.000webhostapp.com";

export const registerRequest = (user) => axios.post(baseURL, user);
export const loginRequest = (user, password) => axios.post(`${baseURL}/Login`, { user, password });