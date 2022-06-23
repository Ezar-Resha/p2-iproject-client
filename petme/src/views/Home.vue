<script>
import { RouterLink } from "vue-router";
export default {
    name: "Home",
};
</script>

<template>
    <div class="flex content-center mt-24 ml-24 mr-24">
        <div><img src="../assets/logo.png" id="mainLogo" /></div>
        <div class="ml-8">
            <p class="text-8xl">PET.ME</p>
            <p class="mt-4">There is an increasing amount of wild homeless pets in Indonesia.</p>
            <p class="mt-4 text-justify">
                There are many factors that causes pets to be homeless. Their current owners might be unable to care for
                them anymore due to personal reasons. there are also extreme cases where pets are stolen to be
                slaughtered for their meat, illegally. Additionally, the overall public awareness of animal shelters are
                quite low, yet the maintenance cost for them keeps increasing over time.
            </p>
            <p class="mt-4 text-justify">
                PET.ME is created to help facilitate some smaller nuances that may cause pets to be abandoned. with a
                simple interface, we hope to help you adopt a pet, or find a better home for other animals.
                <b> Join now</b> to be able to list pets for adoption, or simply click <b> Browse</b> to see a list of
                animals in our database!
            </p>

            <router-link to="/register"
                ><button class="mt-8 mr-8 bg-red-500 pt-2 pb-2 pl-4 pr-4 text-white">JOIN NOW</button>
            </router-link>

            <router-link to="/login">
                <button class="mt-8 mr-8 bg-red-500 pt-2 pb-2 pl-4 pr-4 text-white" router-link to="/main">
                    LOGIN
                </button>
            </router-link>

            <router-link to="/main">
                <button class="mt-8 bg-red-500 pt-2 pb-2 pl-4 pr-4 text-white">BROWSE</button>
            </router-link>
        </div>
    </div>
</template>
