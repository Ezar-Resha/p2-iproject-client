import { defineStore } from "pinia";
import axios from "axios";

export const petStore = defineStore({
    id: "pet",
    state() {
        return {
            baseURL: "http://localhost:5555",
            breeds: [],
        };
    },
    getters: {},
    actions: {
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

                    const response = axios({
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
                    console.log(response);
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
