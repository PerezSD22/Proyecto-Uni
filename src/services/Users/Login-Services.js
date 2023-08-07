import axios from "axios";

const baseURL = "https://poryectosantraelena.000webhostapp.com/";
//http://localhost/Api-php-slim/
//const baseURL = "http://localhost/Api-php-slim/";
export const requestRegisterCustomer = (register) => axios.post(`${baseURL}Customer`,JSON.stringify({register}));
export const requestRegisterCustomerUser = (user) => axios.post(`${baseURL}Register/User/1`,JSON.stringify({user}));

export const loginRequest = (user, password) => axios.post(`${baseURL}Login`, JSON.stringify({ user, password }));
/*
$app->post('/Api-php-slim/Customer',[RegisterController::class , 'Customer']);
$app->post('/Api-php-slim/Register/User/1',

*/