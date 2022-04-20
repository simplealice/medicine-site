import axios from "axios";

const api_url = "https://telesfor-noauth.herokuapp.com/api/auth/login";

var patID;

class AuthService {

    async login(username, password) {
        const response = await axios.post(api_url, {
            login: username,
            password
        });
        if (response.data.accessToken) {
            localStorage.setItem("user", JSON.stringify(response.data));
        }
        return response.data;
    }

    // logout() {
    //     localStorage.removeItem("user");
    // }

    getCurrentUser() {
        console.log(JSON.parse(localStorage.getItem('user')));
        return JSON.parse(localStorage.getItem('user'));
    }
    

    // getPatient(patient) {
    //     console.log(patient.id);
    //     patID = patient.id;
    // }

    // setPat() {
    //     console.log(patID);
    // }
}

export default new AuthService();