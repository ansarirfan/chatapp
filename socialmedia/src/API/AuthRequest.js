import axios from 'axios'

const API = axios.create({baseURL: "http://localhost:5000/"})
export const logIn  = (formData) => API.post('/auth/login', formData )
export const singUp  = (formData) => API.post('/auth/register', formData )