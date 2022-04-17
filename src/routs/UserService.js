import axios from 'axios';
import authHeader from './auth-header';

const API_URL = 'https://telesfor.herokuapp.com/api/users/';

// https://telesfor.herokuapp.com/api/questionnaire/patient?id=1
class UserService {

  getCurrentUser() {
    return axios.get(API_URL + 'current', { headers: authHeader() });
  }

  getDoctors() {
    return axios.get(API_URL + 'doctors');
  }

  getPatients() {
    return axios.get(API_URL + 'patients', { headers: authHeader() });
  }

  getTable() {
    return axios.get('https://telesfor-noauth.herokuapp.com/api/questionnaire/patients-all', { headers: authHeader() });
  }
}

export default new UserService();