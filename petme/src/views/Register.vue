<script>
import { mapActions, mapState } from "pinia";
import { loginRegister } from "../stores/LoginRegister";

export default {
    name: "Register",
    data() {
        return {
            email: "",
            username: "",
            password: "",
        };
    },
    methods: {
        ...mapActions(loginRegister, ["register", "login"]),
        methodRegister() {
            this.register(this.email, this.username, this.password)
                .then((res) => {
                    this.login(this.email, this.password);
                })
                .then((res) => {
                    this.$router.push("/OTPAuth");
                })
                .catch((err) => {
                    Swal.fire({
                        title: `Error ${err.response.data.statusCode}`,
                        html: `${err.response.data.message}. `,
                        icon: "error",
                        confirmButtonText: "Return",
                    });
                })
                .finally(() => {
                    this.email = "";
                    this.username = "";
                    this.password = "";
                });
        },
    },
};
</script>

<template>
    <section id="register">
        <div id="login" class="max-w-screen-2xl mx-auto h-screen">
            <div class="max-w-sm w-full lg:max-w-full lg:flex justify-center pl-12 pt-20 pr-12">
                <div class="bg-orange-400 shadow-lg w-4/12 h-6/12 w-max-4/12 border-black">
                    <p class="mt-4 ml-8"><router-link to="/"> &lt&lt Back </router-link></p>
                    <img src="../assets/logowithtext.png" class="h-1/3 mt-2" />
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
                        name="username"
                        v-model="username"
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
                        @click.prevent="methodRegister"
                    >
                        Register Button</Button
                    >
                </div>
                <div class="bg-orange-400 shadow-lg w-9/12 h-6/12 border-black">
                    <img src="../assets/registerimage.jpeg" class="object-cover" />
                </div>
            </div>
        </div>
    </section>
</template>
