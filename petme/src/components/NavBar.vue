<script>
import { RouterLink } from "vue-router";
import { loginRegister } from "../stores/LoginRegister";
import { mapStores, mapState, mapActions } from "pinia";
export default {
    Name: "NavBar",
    methods: {
        ...mapActions(loginRegister, ["logout"]),

        methodLogOut() {
            this.logout()
                .then((res) => {
                    this.$router.push("/");
                })
                .catch((err) => {
                    Swal.fire({
                        title: `Error ${err.response.data.statusCode}`,
                        html: `${err.response.data.message}`,
                        icon: "error",
                        confirmButtonText: "Return",
                    });
                });
        },
        computed: {
            ...mapState(loginRegister, ["isLoggedIn, loggedUser"]),

            currentUser() {
                return this.loggedUser;
            },
        },
    },
};
</script>

<template>
    <pre>test what</pre>
    <div class="flex bg-orange-400 text-black mt-auto mb-auto pt-2 pb-2">
        <a href="#" v-if="!isLoggedIn" class="ml-auto mr-8 text-3xl font-semibold hover:scale-125">
            <router-link to="/main"> PET.ME </router-link>
        </a>
    </div>
</template>
