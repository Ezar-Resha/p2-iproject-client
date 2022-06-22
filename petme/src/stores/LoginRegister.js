import { defineStore } from "pinia";
import axios from "axios";

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
                        url: `${this.baseURL}/public/register`,
                        data: { email, username, password },
                    });
                    resolve();
                } catch (err) {
                    reject(err);
                }
            });
        },

        // handleCredentialResponse(response) {
        //     return new Promise(async (resolve, reject) => {
        //         try {
        //             const res = await axios({
        //                 method: "POST",
        //                 url: `${this.baseURL}/public/googlelogin`,
        //                 headers: {
        //                     google_token: response.credential,
        //                 },
        //             });
        //             localStorage.setItem("access_token", res.data.access_token);
        //             localStorage.setItem("role", res.data.role);
        //             localStorage.setItem("email", res.data.email);
        //             localStorage.setItem("user", res.data.user);
        //             this.loggedUser = res.data.user;
        //             this.isLoggedIn = true;
        //             this.router.push("/");
        //             resolve();
        //         } catch (err) {
        //             reject(err);
        //         }
        //     });
        // },

        logout() {
            return new Promise((resolve, reject) => {
                try {
                    this.isLoggedIn = false;
                    this.loggedEmail = "";
                    this.loggedUser = "";
                    google.accounts.id.disableAutoSelect();
                    google.accounts.id.revoke(localStorage.getItem("email"), (done) => {
                        localStorage.clear();
                        console.log("consent revoked");
                        resolve();
                    });
                } catch (err) {
                    reject(err);
                }
            });
        },
    },
});
