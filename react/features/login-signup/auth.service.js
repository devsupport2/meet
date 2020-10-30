import axios from "axios";

const API_URL = "http://localhost:3000/api/";

class AuthService {
  login(email, password) {
    return axios
      .post(API_URL + "login", {
        email,
        password
      })
      .then(response => {
        if (response.data.tokenData) {
          localStorage.setItem("token", response.data.tokenData);
        }
        return response.data;
      });
  }

  logout() {
    //localStorage.removeItem("user");
    localStorage.removeItem("token");
  }

  register(name, phone, email, password) {
    var profile_pic = "https://www.worldfuturecouncil.org/wp-content/uploads/2020/02/dummy-profile-pic-300x300-1.png";
    return axios.post(API_URL + "register", {
      name,
      email,
      phone,
      password,
      profile_pic
    });
  }

  validateLogin(email) {
    return axios.post(API_URL + "validateUser", {
      email
    });
  }


  getCurrentUser() {
    return JSON.parse(localStorage.getItem('token'));
  }
}

export default new AuthService();
