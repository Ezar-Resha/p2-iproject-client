<script>
import { mapActions, mapWritableState } from "pinia";

import { petStore } from "../stores/pets";
export default {
    name: "Match",
    methods: {
        ...mapActions(petStore, ["getMatch"]),

        chat(id) {
            this.$router.push(`/chat/${id}`);
        },
    },
    created() {
        this.getMatch().catch((err) => {
            console.log(err);
        });
    },

    computed: {
        ...mapWritableState(petStore, ["requestAdopts"]),
    },
};
</script>
<template>
    <p class="max-w-screen-2xl mx-auto mt-8 bg-white outline-1 text-3xl uppercase font-bold text-center">MY MATCHES</p>
    <div class="flex items-center pt-24 pl-16 pr-16 pb-24 bg-white">
        <div class="m-auto flex w-[1000px] flex-wrap">
            <img
                v-for="pet in requestAdopts"
                :src="pet.Pet.imageUrl"
                @click.prevent="chat(pet.Pet.id)"
                class="bg-red-100 h-[200px] w-[200px] hover:scale-125 hover:brightness-90 object-cover hover:cursor-pointer"
            />
        </div>
    </div>
</template>
