import { defineStore } from "pinia";
import axios from "axios";

export const petStore = defineStore({
    id: "pet",
    state() {
        return {
            baseURL: "https://petdotme.herokuapp.com",
            breeds: [],
            pets: [],
            petDetail: {},
            requestAdopts: [],
        };
    },
    getters: {},
    actions: {
        getAllPets() {
            return new Promise(async (resolve, reject) => {
                try {
                    let response = await axios({
                        method: "get",
                        url: `${this.baseURL}/pets`,
                    });
                    this.pets = response.data.pets;
                    resolve();
                } catch (err) {
                    reject(err);
                }
            });
        },
        addMatch(id) {
            return new Promise(async (resolve, reject) => {
                try {
                    let response = await axios({
                        method: "post",
                        url: `${this.baseURL}/match/${id}`,
                        headers: {
                            access_token: localStorage.getItem("access_token"),
                        },
                    });
                    resolve();
                } catch (err) {
                    reject(err);
                }
            });
        },
        getPetDetail(id) {
            return new Promise(async (resolve, reject) => {
                try {
                    let response = await axios({
                        method: "get",
                        url: `${this.baseURL}/pets/${id}`,
                    });

                    this.petDetail = response.data.pet;
                    resolve();
                } catch (err) {
                    reject(err);
                }
            });
        },
        createPet(petObject) {
            return new Promise(async (resolve, reject) => {
                try {
                    const {
                        name,
                        gender,
                        age,
                        size,
                        primaryBreed,
                        secondaryBreed,
                        mixedBreed,
                        unknownBreed,
                        spayed,
                        houseTrained,
                        declawed,
                        specialNeed,
                        shots,
                        goodWithChildren,
                        goodWithDogs,
                        goodWithCats,
                        description,
                        imageUrl,
                    } = petObject;

                    const response = await axios({
                        method: "post",
                        url: `${this.baseURL}/pets/`,
                        data: {
                            name,
                            gender,
                            age,
                            size,
                            primaryBreed,
                            secondaryBreed,
                            mixedBreed,
                            unknownBreed,
                            spayed,
                            houseTrained,
                            declawed,
                            specialNeed,
                            shots,
                            goodWithChildren,
                            goodWithDogs,
                            goodWithCats,
                            specialNeed,
                            shots,
                            description,
                            imageUrl,
                        },

                        //headers
                    });

                    resolve();
                } catch (err) {
                    reject(err);
                }
            });
        },
        getMatch() {
            return new Promise(async (resolve, reject) => {
                try {
                    let response = await axios({
                        method: "get",
                        url: `${this.baseURL}/match`,
                        headers: {
                            access_token: localStorage.getItem("access_token"),
                        },
                    });
                    this.requestAdopts = response.data.data;
                    resolve();
                } catch (err) {
                    reject(err);
                }
            });
        },
        getBreed() {
            return new Promise(async (resolve, reject) => {
                try {
                    let response = await axios({
                        method: "get",
                        url: `${this.baseURL}/pets/breed`,
                    });

                    this.breeds = response.data.data;
                    resolve();
                } catch (err) {
                    reject(err);
                }
            });
        },
    },
});
