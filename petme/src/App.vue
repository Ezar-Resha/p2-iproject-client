<script>
import { Dropzone } from "dropzone";

window.onload = () => {
    let myDropzone = new Dropzone("#my-form", {
        method: "POST",
        url: "test",
        maxFileSize: 5,
        maxFiles: 5,
        uploadMultiple: true,
        parallelUploads: 5,
        autoProcessQueue: false,
        createImageThumbnail: true,
        thumbnailWidth: 200,
        thumbnailHeight: 200,
        thumbnailMethod: "contain",
        resizeWidth: 200,
        resizeHeight: 200,
        resizeMethod: "contain",
    });
};
</script>

<template>
    <div id="back" class="min-w-screen-2x">
        <!-- Header -->
        <section id="header">
            <div class="sticky top-0 left-0 flex flex-row justify-between items-center h-16 bg-orange-400 text-white">
                <img src="./assets/logo.png" class="h-full" />
                <a
                    href="#"
                    class="ml-8 mr-8 text-3xl font-semibold hover:scale-125"
                    v-on:click.prevent="changePage('Table')"
                >
                    MAIN
                </a>
                <a
                    href="#"
                    class="ml-8 mr-8 text-3xl font-semibold hover:scale-125"
                    v-on:click.prevent="changePage('createNews')"
                >
                    CREATE
                </a>
                <a
                    href="#"
                    class="ml-8 mr-auto text-3xl font-semibold hover:scale-125"
                    v-on:click.prevent="changePage('History')"
                >
                    HISTORY
                </a>
                <div class="inline-block mr-12">
                    <p class="text-right">{{ loggedEmail }}</p>
                    <p class="text-right">{{ role }}</p>
                </div>
            </div>
        </section>
        <!-- Header End-->
        <!-- Home -->
        <section id="home">
            <div class="flex content-center">
                <img src="./assets/logo.png" class="w mt-24 mb-24 ml-48 mr-24" id="mainLogo" />
                <div class="flex flex-col mt-24">
                    <p class="text-8xl">PET.ME</p>
                    <p class="mt-4 font-bold">Adopt your next pet and give them a second chance of life.</p>
                    <p class="mt-4 font-bold">or give your pet a chance to have a better life in your stead.</p>
                    <p class="mt-4 font-bold w-3/4 text-left">
                        PET ME help match people and pets ( currently dogs) to make the process of pet adoption much
                        simpler, while remaining in-style with the current Indonesian ways in hope to advance it.
                    </p>

                    <button class="mt-8 bg-red-600 pt-2 pb-2 pl-4 pr-4 text-white mr-auto">JOIN NOW</button>
                </div>
            </div>
        </section>
        <!-- Home -->
    </div>

    <!-- Login -->
    <section id="login">
        <div class="flex h-screen">
            <div class="flex-row bg-orange-400 ml-auto mt-auto mb-auto w-3/12 h-4/6">
                <p class="mt-4 ml-8"><router-link to="/"> &lt&lt Back </router-link></p>
                <img src="./assets/logowithtext.png" class="h-1/3 mt-2" />
                <p class="ml-8 mb-2 font-semibold tracking-tighter text-lg">E-MAIL</p>
                <input
                    type="text"
                    name="email"
                    v-model="email"
                    class="ml-8 frm-control w-9/12 block px-3 py-1.5 text-base font-normal text-black bg-white bg-clip-padding border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                />
                <p class="ml-8 mt-8 mb-2 tracking-tighter text-lg font-semibold">PASSWORD</p>

                <input
                    type="password"
                    name="password"
                    v-model="password"
                    class="ml-8 frm-control w-9/12 block px-3 py-1.5 text-base font-normal text-black bg-white bg-clip-padding border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                />
                <Button
                    class="mt-8 w-9/12 ml-8 mr-8 px-6 py-2 border-2 border-red-600 text-red-700 bg-white font-medium text-xs leading-tight uppercase rounded hover:scale-110 focus:outline-none focus:ring-0 transition duration-150 ease-in-out"
                    @click.prevent="methodLogin(username, password)"
                >
                    Login Button</Button
                >
                <p class="ml-8 mb-2">
                    not a member?
                    <a href="#" class="font-normal hover:font-medium underline text-red-600"
                        ><router-link to="/register">register </router-link></a
                    >
                    now.
                </p>
            </div>

            <div class="flex bg-blue-400 w-1/3 mr-auto h-4/6 mt-auto mb-auto">
                <img src="./assets/loginimage.jpg" class="object-cover" />
            </div>
        </div>
    </section>

    <section id="register">
        <div class="flex h-screen">
            <div class="flex-row bg-orange-400 ml-auto mt-auto mb-auto w-3/12 h-4/6">
                <p class="mt-4 ml-8"><router-link to="/"> &lt&lt Back </router-link></p>
                <img src="./assets/logowithtext.png" class="h-1/3 mt-2" />
                <p class="ml-8 mb-2 font-semibold tracking-tighter text-lg">E-MAIL</p>
                <input
                    type="text"
                    name="email"
                    v-model="email"
                    class="ml-8 mb-8 frm-control w-9/12 block px-3 py-1.5 text-base font-normal text-black bg-white bg-clip-padding border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                />
                <p class="ml-8 mb-2 font-semibold tracking-tighter text-lg">USERNAME</p>
                <input
                    type="text"
                    name="email"
                    v-model="email"
                    class="ml-8 frm-control w-9/12 block px-3 py-1.5 text-base font-normal text-black bg-white bg-clip-padding border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                />

                <p class="ml-8 mt-8 mb-2 tracking-tighter text-lg font-semibold">PASSWORD</p>

                <input
                    type="password"
                    name="password"
                    v-model="password"
                    class="ml-8 frm-control w-9/12 block px-3 py-1.5 text-base font-normal text-black bg-white bg-clip-padding border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                />
                <Button
                    class="mt-8 w-9/12 ml-8 mr-8 px-6 py-2 border-2 border-red-600 text-red-700 bg-white font-medium text-xs leading-tight uppercase rounded hover:scale-110 focus:outline-none focus:ring-0 transition duration-150 ease-in-out"
                    @click.prevent="methodLogin(username, password)"
                >
                    Register Button</Button
                >
            </div>

            <div class="flex bg-blue-400 w-1/3 mr-auto h-4/6 mt-auto mb-auto">
                <img src="./assets/registerimage.jpeg" class="object-cover" />
            </div>
        </div>
    </section>

    <section id="register">
        <div class="flex h-screen">
            <div class="flex-row bg-orange-400 m-auto w-1/4 h-1/3">
                <p class="mt-8 ml-8">a verification code has been sent to</p>
                <p class="mt-2 ml-8">please insert your 4-digit verification code:</p>
                <input type="text" class="mt-4 ml-8 w-1/4" maxlength="4" />
                <Button
                    class="mt-8 w-9/12 ml-8 mr-8 px-6 py-2 border-2 border-red-600 text-red-700 bg-white font-medium text-xs leading-tight uppercase rounded hover:scale-110 focus:outline-none focus:ring-0 transition duration-150 ease-in-out"
                    @click.prevent="methodLogin(username, password)"
                >
                    Submit Verification</Button
                >
                <Button
                    class="mt-8 w-9/12 ml-8 mr-8 px-6 py-2 border-2 border-red-600 text-red-700 bg-white font-medium text-xs leading-tight uppercase rounded hover:scale-110 focus:outline-none focus:ring-0 transition duration-150 ease-in-out"
                    @click.prevent="methodLogin(username, password)"
                >
                    Request a new OTP</Button
                >
            </div>
        </div>
    </section>
    <!-- Main Home-->

    <section id="mainHome">
        <div class="flex h-screen justify-center flex-wrap bg-gray-100">
            <div class="m-auto flex w-[1000px] flex-wrap">
                <img class="bg-red-100 h-[200px] w-[200px] hover:scale-125 hover:brightness-90" />
                <img class="bg-red-100 h-[200px] w-[200px] hover:scale-125 hover:brightness-90" />
                <img class="bg-red-100 h-[200px] w-[200px] hover:scale-125 hover:brightness-90" />
                <img class="bg-red-100 h-[200px] w-[200px] hover:scale-125 hover:brightness-90" />
                <img class="bg-red-100 h-[200px] w-[200px] hover:scale-125 hover:brightness-90" />
                <img class="bg-red-100 h-[200px] w-[200px] hover:scale-125 hover:brightness-90" />
                <img class="bg-red-100 h-[200px] w-[200px] hover:scale-125 hover:brightness-90" />
                <img class="bg-red-100 h-[200px] w-[200px] hover:scale-125 hover:brightness-90" />
                <img class="bg-red-100 h-[200px] w-[200px] hover:scale-125 hover:brightness-90" />
                <img class="bg-red-100 h-[200px] w-[200px] hover:scale-125 hover:brightness-90" />
                <img class="bg-red-100 h-[200px] w-[200px] hover:scale-125 hover:brightness-90" />
                <img class="bg-red-100 h-[200px] w-[200px] hover:scale-125 hover:brightness-90" />
                <img class="bg-red-100 h-[200px] w-[200px] hover:scale-125 hover:brightness-90" />
                <img class="bg-red-100 h-[200px] w-[200px] hover:scale-125 hover:brightness-90" />
                <img class="bg-red-100 h-[200px] w-[200px] hover:scale-125 hover:brightness-90" />
                <img class="bg-red-100 h-[200px] w-[200px] hover:scale-125 hover:brightness-90" />
                <img class="bg-red-100 h-[200px] w-[200px] hover:scale-125 hover:brightness-90" />
                <img class="bg-red-100 h-[200px] w-[200px] hover:scale-125 hover:brightness-90" />
            </div>
        </div>
    </section>

    <section id="add pet">
        <div class="flex h-screen bg-gray-100 justify-center">
            <div class="ml-12 mr-12 mt-auto mb-auto bg-white flex flex-col w-screen flex-wrap">
                <p class="mt-4 ml-8"><router-link to="/"> &lt&lt Back </router-link></p>
                <p class="text-center text-3xl">Add Pet Form</p>
                <p class="ml-8">items in * are required</p>
                <form>
                    <table class="ml-8">
                        <tr>
                            <td class="pl-8 pr-8 pt-4 pb-4">
                                <label for="name" class="text-xl uppercase mt-4 mb-4"> Name</label>
                            </td>
                            <td class="bg-amber-200 pl-8 pr-8 pt-4 pb-4">
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
                                <label for="Gender" class="text-xl uppercase mt-4 mb-4"> Gender</label>
                            </td>
                            <td class="bg-amber-200 pl-8 pr-8 pt-4 pb-4">
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
                                <label for="Age" class="text-xl uppercase mt-4 mb-4"> Age</label>
                            </td>
                            <td class="bg-amber-200 pl-8 pr-8 pt-4 pb-4">
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
                            <td class="bg-amber-200 pl-8 pr-8 pt-4 pb-4">
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
                            <td class="bg-amber-200 pl-8 pr-8 pt-4 pb-4">
                                <select
                                    class="frm-control block px-3 py-1.5 text text-base font-normal text-black bg-white bg-clip-padding outline-2 rounded"
                                >
                                    <option value="0">Will add from thedog.api</option>
                                </select>
                            </td>
                        </tr>
                        <tr>
                            <td class="pl-8 pr-8 pt-4 pb-4">
                                <label for="Secondary Breed" class="text-xl uppercase mt-4 mb-4">
                                    Secondary Breed</label
                                >
                            </td>
                            <td class="bg-amber-200 pl-8 pr-8 pt-4 pb-4">
                                <select
                                    class="frm-control block px-3 py-1.5 text text-base font-normal text-black bg-white bg-clip-padding outline-2 rounded"
                                >
                                    <option value="0">Will add from thedog.api</option>
                                </select>
                            </td>
                        </tr>
                        <tr>
                            <td class="pl-8 pr-8 pt-4 pb-4">
                                <label for="Mixed Breed" class="text-xl uppercase mt-4 mb-4"> Mixed Breed ?</label>
                            </td>
                            <td class="bg-amber-200 pl-8 pr-8 pt-4 pb-4"></td>
                        </tr>
                        <tr>
                            <td class="pl-8 pr-8 pt-4 pb-4">
                                <label for="Unknown Breed" class="text-xl uppercase mt-4 mb-4"> Unknown Breed ?</label>
                            </td>
                            <td class="bg-amber-200 pl-8 pr-8 pt-4 pb-4"></td>
                        </tr>
                        <tr>
                            <td class="pl-8 pr-8 pt-4 pb-4">
                                <label for="Unknown Breed" class="text-xl uppercase mt-4 mb-4"> PET CONDITION</label>
                            </td>
                            <td class="bg-amber-200 pl-8 pr-8 pt-4 pb-4">
                                <input class="mr-2" type="checkbox" name="Spayed" v-model="Spayed" id="Spayed" />
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
                                <label for="Unknown Breed" class="text-xl uppercase mt-4 mb-4"> PET PERSONALITY</label>
                            </td>
                            <td class="bg-amber-200 pl-8 pr-8 pt-4 pb-4">
                                <input
                                    class="mr-2"
                                    type="checkbox"
                                    name="Good With Children"
                                    v-model="goodWithChildren"
                                />
                                <label for="Good With Children" class="mr-8"> Good With Children </label>
                                <input
                                    class="mr-2"
                                    type="checkbox"
                                    id="Good With Dogs"
                                    name="Good With Dogs"
                                    v-model="goodWithDogs"
                                />
                                <label class="mr-8" for="Good With Dogs"> Good With Dogs </label>
                                <input
                                    class="mr-2"
                                    type="checkbox"
                                    name="Good With Cats"
                                    v-model="goodWithCats"
                                    id="Good With Cats"
                                />
                                <label class="mr-8" for="Good with Dogs"> Good With Cats </label>
                                <input class="mr-2" type="checkbox" name="Special Need" v-model="specialNeed" />
                                <label class="mr-8" for="Large"> Special Need </label>
                                <input class="mr-2" type="checkbox" name="Shots" v-model="shots" />
                                <label class="mr-8" for="Large"> Shots </label>
                            </td>
                        </tr>
                        <tr>
                            <td class="pl-8 pr-8 pt-4 pb-4">
                                <label for="Unknown Breed" class="text-xl uppercase mt-4 mb-4"> DESCRIPTION </label>
                            </td>
                            <td class="bg-amber-200 pl-8 pr-8 pt-4 pb-4">
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
                                <label for="Unknown Breed" class="text-xl uppercase mt-4 mb-4"> UPLOAD IMAGE </label>
                            </td>
                            <td class="bg-amber-200 pl-8 pr-8 pt-4 pb-4">
                                <div
                                    action="/target"
                                    id="my-form"
                                    class="dropzone bg-gray-500 h-[400px] h-max-[400px] ml-8 flex"
                                ></div>
                            </td>
                        </tr>
                        <tr>
                            <td class="pl-8 pr-8 pt-4 pb-4"></td>
                            <td class="bg-amber-200 pl-8 pr-8 pt-4 pb-4">
                                <Button
                                    class="mt-8 w-9/12 ml-8 mr-8 px-6 py-2 border-2 border-red-600 text-red-700 bg-white font-medium text-xs leading-tight uppercase rounded hover:scale-110 focus:outline-none focus:ring-0 transition duration-150 ease-in-out"
                                >
                                    Submit
                                </Button>
                            </td>
                        </tr>
                    </table>
                </form>
            </div>
        </div>
    </section>
</template>

<style>
#mainLogo {
    width: 40%;
}

dz-preview {
    display: flex;
}
</style>
