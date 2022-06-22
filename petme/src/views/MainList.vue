<script>
import ImageCard from "../components/ImageCard.vue";

export default {
    name: "MainList",
    components: { ImageCard },
};
</script>

<template>
    <div class="flex items-center pt-24 pl-16 pr-16 pb-24 bg-white">
        <div class="m-auto flex w-[1000px] flex-wrap">
            <ImageCard></ImageCard>
        </div>
    </div>
</template>
