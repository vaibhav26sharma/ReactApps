import axios from 'axios';
import logger from './logService';
import { toast } from 'react-toastify';

axios.interceptors.response.use(null, (error) => {
  //executed everytime there is a response with error
  //handling unexpected errors here only
  const expectedError =
    error.response &&
    error.response.status >= 400 &&
    error.response.status < 500;

  if (!expectedError) {
    logger.log(error);
    toast.error('An Unexpected error occurred');
  }
  return Promise.reject(error);
});

function setJwt(jwt) {
  axios.defaults.headers.common['x-auth-token'] = jwt;
}

export default {
  //Exposing these axios methods from here for reusability
  get: axios.get,
  post: axios.post,
  put: axios.put,
  delete: axios.delete,
  setJwt,
};
