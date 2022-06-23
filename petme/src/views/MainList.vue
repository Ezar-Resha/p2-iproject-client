<script>
import { mapActions, mapState } from "pinia";
import ImageCard from "../components/ImageCard.vue";
import { petStore } from "../stores/pets";

export default {
    name: "MainList",
    components: { ImageCard },
    computed: {
        ...mapState(petStore, ["pets"]),
    },
    methods: {
        ...mapActions(petStore, ["getAllPets"]),
    },

    created() {
        this.getAllPets()
            .then((res) => {})
            .catch((err) => {
                console.log(err);
            });
    },
};
</script>

<template>
    <p class="max-w-screen-2xl mx-auto mt-8 bg-white outline-1 text-3xl uppercase font-bold text-center">PET LISTS</p>
    <div class="flex items-center pt-24 pl-16 pr-16 pb-24 bg-white">
        <div class="m-auto flex w-[1000px] flex-wrap">
            <ImageCard :listPets="pets"></ImageCard>
        </div>
    </div>
</template>
