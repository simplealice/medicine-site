import axios from "axios";

const api_url = "https://telesfor.herokuapp.com/api/";

class AuthService {

    login(username, password) {
        return axios.post(api_url + "signin", {
            username,
            password
        }).then(response => {
            if (response.data.accessToken) {
                localStorage.setItem("user", JSON.stringify(response.data));
            }
            return response.data;
        });
    }

    logout() {
        localStorage.removeItem("user");
    }

    getCurrentUser() {
        return JSON.parse(localStorage.getItem('user'));;
    }
}

export default new AuthService();