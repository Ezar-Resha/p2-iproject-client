<script>
export default {
    name: "ImageCard",
    props: {
        listPets: Array,
    },
    methods: {
        detail(id) {
            this.$router.push(`/detail/${id}`);
        },
    },
};
</script>

<template>
    <img
        v-for="pet in listPets"
        :src="pet.imageUrl"
        @click.prevent="detail(pet.id)"
        class="bg-red-100 h-[200px] w-[200px] hover:scale-125 hover:brightness-90 object-cover hover:cursor-pointer"
    />
</template>
