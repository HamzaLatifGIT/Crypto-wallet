import axios from 'axios';

// Determine the base URL based on the environment
const baseURL = import.meta.env.VITE_APP_ENV === 'development'
  ? import.meta.env.VITE_APP_BASE_URL_DEVELOPMENT
  : import.meta.env.VITE_APP_BASE_URL_PRODUCTION;

// Create an Axios instance with the base URL
const Instance = axios.create({
  baseURL: `${baseURL}/api`
});

window.location.CustomURL = baseURL

export default Instance;
