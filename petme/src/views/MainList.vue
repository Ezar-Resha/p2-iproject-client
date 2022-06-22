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
    <div class="flex items-center pt-24 pl-16 pr-16 pb-24 bg-white">
        <div class="m-auto flex w-[1000px] flex-wrap">
            <ImageCard :listPets="pets"></ImageCard>
        </div>
    </div>
</template>
