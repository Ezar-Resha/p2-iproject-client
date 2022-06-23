<script>
import { RouterLink } from "vue-router";
import { loginRegister } from "../stores/LoginRegister";
import { mapStores, mapState, mapActions, mapWritableState } from "pinia";
export default {
    name: "Header",
    computed: {
        ...mapWritableState(loginRegister, ["isLoggedIn"]),
    },
    methods: {
        ...mapActions(loginRegister, ["logout"]),

        methodLogOut() {
            this.logout()
                .then((res) => {
                    this.$router.push("/");
                })
                .catch((err) => {
                    // Swal.fire({
                    //     title: `Error ${err.response.data.statusCode}`,
                    //     html: `${err.response.data.message}`,
                    //     icon: "error",
                    //     confirmButtonText: "Return",
                    // });
                });
        },
    },
};
</script>
<template>
    <section v-if="this.isLoggedIn === true">
        <div class="flex bg-orange-400 text-black mt-auto mb-auto pt-2 pb-2">
            <a href="#" class="ml-8 mr-8 uppercase text-3xl font-semibold hover:scale-125">
                <router-link to="/main"> Home </router-link>
            </a>
            <a href="#" class="ml-8 mr-8 text-3xl uppercase font-semibold hover:scale-125">
                <router-link to="/addpet"> Add Pet </router-link>
            </a>

            <a href="#" class="ml-8 mr-auto text-3xl uppercase font-semibold hover:scale-125">
                <router-link to="/match"> My Matches </router-link>
            </a>
            <button
                @click.prevent="methodLogOut"
                class="px-6 py-2 border-2 border-red-600 text-red-700 bg-white font-medium text-xs leading-tight uppercase rounded hover:scale-110 focus:outline-none focus:ring-0 transition duration-150 ease-in-out"
            >
                logout
            </button>

            <a href="#" class="ml-8 mr-8 text-3xl font-semibold hover:scale-125">
                <router-link to="/main"> PET.ME </router-link>
            </a>
        </div>
    </section>
    <section v-if="this.isLoggedIn === false">
        <div class="flex bg-orange-400 text-black mt-auto mb-auto pt-2 pb-2">
            <router-link class="ml-auto mr-8" to="/login">
                <button
                    class="px-6 py-2 border-2 border-red-600 text-red-700 bg-white font-medium text-xs leading-tight uppercase rounded hover:scale-110 focus:outline-none focus:ring-0 transition duration-150 ease-in-out"
                >
                    login
                </button>
            </router-link>

            <a href="#" class="ml-8 mr-8 text-3xl font-semibold hover:scale-125">
                <router-link to="/main"> PET.ME </router-link>
            </a>
        </div>
    </section>
</template>
