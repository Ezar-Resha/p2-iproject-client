import { defineStore } from "pinia";
import axios from "axios";
import { data } from "autoprefixer";

export const loginRegister = defineStore({
    id: "loginRegister",
    state() {
        return {
            username: "",
            email: "",
            password: "",
            baseURL: "http://localhost:5555",
            isLoggedIn: false,
            loggedUser: "",
            loggedEmail: "",
        };
    },
    getters: {},
    actions: {
        login(email, password) {
            return new Promise(async (resolve, reject) => {
                try {
                    const response = await axios({
                        method: "POST",
                        url: `${this.baseURL}/login`,
                        data: { email, password },
                    });
                    localStorage.setItem("access_token", response.data.access_token);
                    localStorage.setItem("email", response.data.email);
                    localStorage.setItem("user", response.data.username);
                    this.loggedUser = response.data.username;
                    this.isLoggedIn = true;
                    resolve();
                } catch (err) {
                    reject(err);
                }
            });
        },
        register(email, username, password) {
            return new Promise(async (resolve, reject) => {
                try {
                    const response = await axios({
                        method: "POST",
                        url: `${this.baseURL}/register`,
                        data: { email, username, password },
                    });
                    resolve();
                } catch (err) {
                    reject(err);
                }
            });
        },
        OTPAuth(otp) {
            return new Promise(async (resolve, reject) => {
                try {
                    let response = await axios({
                        method: "post",
                        url: `${this.baseURL}/verifyOTP`,
                        headers: {
                            access_token: localStorage.getItem("access_token"),
                        },
                        data: {
                            otp: otp,
                        },
                    });
                    console.log(response);
                    resolve();
                } catch (err) {
                    reject(err);
                }
            });
        },

        requestOTP() {
            return new Promise(async (resolve, reject) => {
                try {
                    let response = await axios({
                        method: "post",
                        url: `${this.baseURL}/requestOTP`,
                        headers: {
                            access_token: localStorage.getItem("access_token"),
                        },
                    });
                    console.log(response);
                    resolve();
                } catch (err) {
                    reject(err);
                }
            });
        },
        logout() {
            return new Promise((resolve, reject) => {
                try {
                    localStorage.clear();
                    this.isLoggedIn = false;
                    this.loggedEmail = "";
                    this.loggedUser = "";
                    resolve();
                } catch (err) {
                    reject(err);
                }
            });
        },
    },
});
