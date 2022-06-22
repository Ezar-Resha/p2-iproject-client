<script>
import { mapActions, mapWritableState } from "pinia";
import { onMounted } from "vue";
import { loginRegister } from "./stores/LoginRegister";
import { RouterLink, RouterView } from "vue-router";
import NavBarVue from "./components/NavBar.vue";
import Footer from "./components/Footer.vue";

export default {
    components: { NavBarVue, Footer },
    created() {
        if (localStorage.getItem("access_token")) {
            this.isLoggedIn = true;
            this.loggedUser = localStorage.getItem("user");
            this.loggedEmail = localStorage.getItem("email");
        } else {
            this.isLoggedIn = false;
        }
    },
    computed: {
        ...mapWritableState(loginRegister, ["isLoggedIn", "loggedEmail", "loggedUser"]),
    },
};
</script>

<template>
    <div id="back" class="min-w-screen bg-gray-100">
        <div id="main" class="max-w-screen-2xl mx-auto min-h-screen bg-white outline-1">
            <NavBarVue></NavBarVue>
            <RouterView></RouterView>
        </div>
        <Footer></Footer>
    </div>
</template>
