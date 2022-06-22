<script>
import { createObjectProperty } from "@vue/compiler-core";
import { initializeApp } from "firebase/app";
import { getStorage, ref, uploadBytesResumable, getDownloadURL } from "firebase/storage";
import { mapActions, mapState } from "pinia";
import { petStore } from "../stores/pets";

export default {
    name: "AddPet",
    data() {
        return {
            name: "",
            gender: "",
            age: "",
            size: "",
            primaryBreed: "",
            secondaryBreed: "",
            mixedBreed: "",
            unknownBreed: "",
            spayed: false,
            houseTrained: false,
            declawed: false,
            specialNeed: false,
            shots: false,
            goodWithChildren: false,
            goodWithDogs: false,
            goodWithCats: false,
            description: "",
            uploading: false,
            imageUrl: "",
        };
    },
    created() {
        this.getBreed().catch((err) => {
            console.log(err);
        });
    },
    methods: {
        ...mapActions(petStore, ["getBreed", "createPet"]),
        methodSubmitCreate() {
            if (this.primaryBreed && this.primaryBreed !== "" && this.secondaryBreed && this.secondaryBreed !== "") {
                this.mixedBreed = true;
                this.unknownBreed = false;
            } else if (this.primaryBreed === "" && this.secondaryBreed === "") {
                this.unknownBreed = true;
            }

            let pet = {
                name: this.name,
                gender: this.gender,
                age: this.age,
                size: this.size,
                primaryBreed: this.primaryBreed,
                secondaryBreed: this.secondaryBreed,
                mixedBreed: this.mixedBreed,
                unknownBreed: this.unknownBreed,
                spayed: this.spayed,
                houseTrained: this.houseTrained,
                declawed: this.declawed,
                specialNeed: this.specialNeed,
                shots: this.shots,
                goodWithChildren: this.goodWithChildren,
                goodWithDogs: this.goodWithDogs,
                goodWithCats: this.goodWithCats,
                description: this.description,
                imageUrl: this.imageUrl,
            };

            this.createPet(pet)
                .then((res) => {
                    this.$router.push("/main");
                })
                .catch((err) => {
                    console.log(err);
                })
                .finally(() => {
                    this.name = "";
                    this.gender = "";
                    this.age = "";
                    this.size = "";
                    this.primaryBreed = "";
                    this.secondaryBreed = "";
                    this.mixedBreed = false;
                    this.unknownBreed = false;
                    this.spayed = false;
                    this.houseTrained = false;
                    this.declawed = false;
                    this.specialNeed = false;
                    this.shots = false;
                    this.goodWithChildren = false;
                    this.goodWithDogs = false;
                    this.goodWithCats = false;
                    this.description = "";
                    this.imageUrl = "";
                });
        },

        async uploadImage(event) {
            const firebaseConfig = {
                apiKey: import.meta.env.VITE_apiKey,
                authDomain: import.meta.env.VITE_authDomain,
                projectId: import.meta.env.VITE_projectId,
                storageBucket: "petme-b0a5c.appspot.com",
                messagingSenderId: import.meta.env.VITE_messangingSenderId,
                appId: import.meta.env.VITE_appId,
            };

            const firebaseApp = initializeApp(firebaseConfig);
            const storage = getStorage(firebaseApp);

            this.uploading = true;
            let file = event.target.files[0];
            const storageRef = ref(storage, file.name);
            const uploadTask = uploadBytesResumable(storageRef, file);

            uploadTask.on(
                "state_changed",
                (snapshot) => {
                    // Get task progress, including the number of bytes uploaded and the total number of bytes to be uploaded
                    const progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
                    console.log("Upload is " + progress + "% done");
                    switch (snapshot.state) {
                        case "paused":
                            console.log("Upload is paused");
                            break;
                        case "running":
                            console.log("Upload is running");
                            break;
                    }
                },
                (error) => {
                    // A full list of error codes is available at
                    // https://firebase.google.com/docs/storage/web/handle-errors
                    switch (error.code) {
                        case "storage/unauthorized":
                            // User doesn't have permission to access the object
                            break;
                        case "storage/canceled":
                            // User canceled the upload
                            break;

                        // ...

                        case "storage/unknown":
                            // Unknown error occurred, inspect error.serverResponse
                            break;
                    }
                },
                () => {
                    // Upload completed successfully, now we can get the download URL
                    getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {
                        this.imageUrl = downloadURL;
                        this.uploading = false;
                        console.log("upload finished");
                    });
                }
            );
        },
    },
    computed: {
        ...mapState(petStore, ["breeds"]),
    },
};
</script>

<template>
    <pre></pre>
    <div id="login" class="max-w-screen-2xl mx-auto pb-8">
        <div class="max-w-sm w-full lg:max-w-full lg:flex justify-center pl-12 pt-20 pr-12">
            <div class="bg-orange-400 shadow-lg w-max-6/12 border-black">
                <p class="mt-4 ml-8"><router-link to="/"> &lt&lt Back </router-link></p>
                <p class="text-center text-3xl uppercase font-bold">Add Pet Form</p>
                <p class="ml-8">items in * are required</p>
                <form>
                    <table class="ml-8">
                        <tr>
                            <td class="pl-8 pr-8 pt-4 pb-4">
                                <label for="name" class="text-xl uppercase mt-4 mb-4"> Name*</label>
                            </td>
                            <td class="pl-8 pr-8 pt-4 pb-4">
                                <input
                                    type="text"
                                    name="name"
                                    v-model="name"
                                    class="mt-4 mb-4 frm-control w-9/12 block px-3 py-1.5 text-base font-normal text-black bg-white bg-clip-padding outline-2 rounded"
                                />
                            </td>
                        </tr>
                        <tr>
                            <td class="pl-8 pr-8 pt-4 pb-4">
                                <label for="Gender" class="text-xl uppercase mt-4 mb-4"> Gender*</label>
                            </td>
                            <td class="pl-8 pr-8 pt-4 pb-4">
                                <input
                                    class="mr-2"
                                    type="radio"
                                    name="gender"
                                    value="Male"
                                    id="Male"
                                    v-model="gender"
                                />
                                <label for="Male" class="mr-8"> Male </label>
                                <input
                                    class="mr-2"
                                    type="radio"
                                    name="gender"
                                    value="Female"
                                    id="Female"
                                    v-model="gender"
                                />
                                <label class="mr-8" for="Female"> Female </label>
                            </td>
                        </tr>
                        <tr>
                            <td class="pl-8 pr-8 pt-4 pb-4">
                                <label for="Age" class="text-xl uppercase mt-4 mb-4"> Age*</label>
                            </td>
                            <td class="pl-8 pr-8 pt-4 pb-4">
                                <input
                                    type="number"
                                    name="age"
                                    v-model="age"
                                    class="mr-4 frm-control px-3 py-1.5 text-base font-normal text-black bg-white bg-clip-padding outline-2 rounded"
                                />
                                <label for="age" class="mr-8"> Months </label>
                            </td>
                        </tr>
                        <tr>
                            <td class="pl-8 pr-8 pt-4 pb-4">
                                <label for="Size" class="text-xl uppercase mt-4 mb-4"> Size</label>
                            </td>
                            <td class="pl-8 pr-8 pt-4 pb-4">
                                <input class="mr-2" type="radio" name="size" value="Small" id="Small" v-model="size" />
                                <label for="Small" class="mr-8"> Small </label>
                                <input
                                    class="mr-2"
                                    type="radio"
                                    name="size"
                                    value="Medium"
                                    id="Medium"
                                    v-model="size"
                                />
                                <label class="mr-8" for="Medium"> Medium </label>
                                <input class="mr-2" type="radio" name="size" value="Large" id="Large" v-model="size" />
                                <label class="mr-8" for="Large"> Large </label>
                            </td>
                        </tr>
                        <tr>
                            <td class="pl-8 pr-8 pt-4 pb-4">
                                <label for="Primary Breed" class="text-xl uppercase mt-4 mb-4"> Primary Breed</label>
                            </td>
                            <td class="pl-8 pr-8 pt-4 pb-4">
                                <select
                                    v-model="primaryBreed"
                                    class="frm-control block px-3 py-1.5 text text-base font-normal text-black bg-white bg-clip-padding outline-2 rounded"
                                >
                                    <option selected="selected" value="">Select a breed if known</option>
                                    <option v-for="breed in breeds" :value="breed.name">{{ breed.name }}</option>
                                </select>
                            </td>
                        </tr>
                        <tr>
                            <td class="pl-8 pr-8 pt-4 pb-4">
                                <label for="Secondary Breed" class="text-xl uppercase mt-4 mb-4">
                                    Secondary Breed</label
                                >
                            </td>
                            <td class="pl-8 pr-8 pt-4 pb-4">
                                <select
                                    v-model="secondaryBreed"
                                    class="frm-control block px-3 py-1.5 text text-base font-normal text-black bg-white bg-clip-padding outline-2 rounded"
                                >
                                    <option selected="selected" value="">Select a breed if known</option>
                                    <option v-for="breed in breeds" :value="breed.name">{{ breed.name }}</option>
                                </select>
                            </td>
                        </tr>

                        <tr>
                            <td class="pl-8 pr-8 pt-4 pb-4">
                                <label for="Pet Condition" class="text-xl uppercase mt-4 mb-4"> PET CONDITION</label>
                            </td>
                            <td class="pl-8 pr-8 pt-4 pb-4">
                                <input class="mr-2" type="checkbox" name="Spayed" v-model="spayed" id="Spayed" />
                                <label for="Spayed" class="mr-8"> Spayed </label>
                                <input
                                    class="mr-2"
                                    type="checkbox"
                                    name="House Trained"
                                    v-model="houseTrained"
                                    id="House Trained"
                                />
                                <label class="mr-8" for="House Trained"> House Trained </label>
                                <input class="mr-2" type="checkbox" name="Declawed" v-model="declawed" id="Declawed" />
                                <label class="mr-8" for="Declawed"> Declawed </label>
                                <input
                                    class="mr-2"
                                    type="checkbox"
                                    name="Special Need"
                                    v-model="specialNeed"
                                    id="Special Need"
                                />
                                <label class="mr-8" for="Special Need"> Special Need </label>
                                <input class="mr-2" type="checkbox" name="Shots" v-model="shots" id="Shots" />
                                <label class="mr-8" for="Shots"> Shots </label>
                            </td>
                        </tr>
                        <tr>
                            <td class="pl-8 pr-8 pt-4 pb-4">
                                <label for="Pet Personality" class="text-xl uppercase mt-4 mb-4">
                                    PET PERSONALITY</label
                                >
                            </td>
                            <td class="pl-8 pr-8 pt-4 pb-4">
                                <input
                                    class="mr-2"
                                    type="checkbox"
                                    name="Good With Children"
                                    id="Good With Children"
                                    v-model="goodWithChildren"
                                />
                                <label for="Good With Children" class="mr-8"> Good With Children </label>
                                <input
                                    class="mr-2"
                                    type="checkbox"
                                    name="Good With Dogs"
                                    id="Good With Dogs"
                                    v-model="goodWithDogs"
                                />
                                <label for="Good With Dogs" class="mr-8"> Good With Dogs </label
                                ><input
                                    class="mr-2"
                                    type="checkbox"
                                    name="Good With Cats"
                                    id="Good With Cats"
                                    v-model="goodWithCats"
                                />
                                <label for="Good With Cats" class="mr-8"> Good With Cats </label>
                            </td>
                        </tr>
                        <tr>
                            <td class="pl-8 pr-8 pt-4 pb-4">
                                <label for="Description" class="text-xl uppercase mt-4 mb-4"> DESCRIPTION </label>
                            </td>
                            <td class="pl-8 pr-8 pt-4 pb-4">
                                <textarea
                                    id="textarea"
                                    name="description"
                                    class="frm-control w-full block px-3 py-1.5 text text-base font-normal text-black bg-white bg-clip-padding outline-2 rounded"
                                    v-model="description"
                                />
                            </td>
                        </tr>
                        <tr>
                            <td class="pl-8 pr-8 pt-4 pb-4">
                                <label for="Upload Image" class="text-xl uppercase mt-4 mb-4"> UPLOAD IMAGE </label>
                            </td>
                            <td>
                                <input
                                    type="file"
                                    @change="uploadImage($event)"
                                    id="imageUrl"
                                    name="imageUrl"
                                    accept="image/png, image/jpeg, image/jpg"
                                />
                            </td>
                        </tr>
                        <tr>
                            <td class="pl-8 pr-8 pt-4 pb-4"></td>
                            <td v-if="uploading === false" class="pl-8 pr-8 pt-4 pb-4">
                                <Button
                                    @click.prevent="methodSubmitCreate"
                                    class="mt-8 w-9/12 ml-8 mr-8 px-6 py-2 border-2 border-red-600 text-red-700 bg-white font-medium text-xs leading-tight uppercase rounded hover:scale-110 focus:outline-none focus:ring-0 transition duration-150 ease-in-out"
                                >
                                    Submit
                                </Button>
                            </td>
                            <td v-if="uploading === true" class="pl-8 pr-8 pt-4 pb-4">
                                <Button
                                    disabled="disabled"
                                    @click.prevent="methodSubmitCreate"
                                    class="mt-8 w-9/12 ml-8 mr-8 px-6 py-2 border-2 border-gray-600 text-gray-700 bg-white font-medium text-xs leading-tight uppercase rounded hover:scale-110 focus:outline-none focus:ring-0 transition duration-150 ease-in-out"
                                >
                                    Submit
                                </Button>
                            </td>
                        </tr>
                    </table>
                </form>
            </div>
        </div>
    </div>
</template>
