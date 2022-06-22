<script>
import { mapActions, mapState, mapWritableState } from "pinia";
import { loginRegister } from "../stores/LoginRegister";

export default {
    name: "Login",
    data() {
        return {
            email: "",
            password: "",
        };
    },
    methods: {
        ...mapActions(loginRegister, ["login"]),

        methodLogin(email, password) {
            this.login(email, password)
                .then((res) => {
                    this.isLoggedIn = true;
                    this.$router.push("/main");
                })
                .catch((err) => {
                    console.log(err);
                })
                .finally(() => {
                    this.email = "";
                    this.password = "";
                });
        },
    },
    computed: {
        ...mapWritableState(loginRegister, ["isLoggedIn"]),
    },
};
</script>

<template>
    <section>
        <div id="login" class="max-w-screen-2xl mx-auto h-screen">
            <div class="max-w-sm w-full lg:max-w-full lg:flex justify-center pl-12 pt-20 pr-12">
                <div class="bg-orange-400 shadow-lg w-6/12 h-6/12 w-max-4/12 border-black">
                    <p class="mt-4 ml-8"><router-link to="/"> &lt&lt Back </router-link></p>
                    <img src="../assets/logowithtext.png" class="h-1/3 mt-2" />
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
                        @click.prevent="methodLogin(email, password)"
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

                <img src="../assets/loginimage.jpg" class="object-cover" />
            </div>
        </div>
    </section>
</template>
