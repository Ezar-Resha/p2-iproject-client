<script>
import { mapActions, mapState } from "pinia";
import { petStore } from "../stores/pets";

export default {
    name: "Detail",
    created() {
        let id = +this.$route.params.id;
        this.getPetDetail(id)
            .then(() => {})
            .catch((err) => {
                console.log(err);
            });
    },
    methods: {
        ...mapActions(petStore, ["getPetDetail"]),
    },
    computed: {
        ...mapState(petStore, ["petDetail"]),
    },
};
</script>
<template>
    <div class="flex items-end pt-24 pl-16 pr-16 pb-24 bg-white">
        <div class="m-auto flex flex-wrap relative">
            <img :src="petDetail.imageUrl" class="w-[720px] h-[720px] brightness-95 -z-0 object-cover" />
            <p class="absolute bottom-24 left-10 text-white uppercase font-extrabold text-3xl font-serifs shadow-xl">
                {{ petDetail.name }} / {{ petDetail.age }} Months // {{ petDetail.gender }}
            </p>
            <p
                class="absolute bottom-10 left-10 uppercase text-3xl bg-black bg-opacity-75 text-white pl-4 pr-4 pt-1 pb-1"
            >
                {{ petDetail.primaryBreed }}
            </p>
        </div>
        <div class="bg-gray-100 h-[720px] w-[720px]">
            <div class="h-2/3 ml-8 mr-8 flex items-center">
                <div>
                    <table>
                        <tr>
                            <td class="font-bold uppercase pl-8 pr-8 pt-4 pb-4">Mixed Breed</td>
                            <td class="pl-8 pr-8 pt-4 pb -4 bg-green-500" v-if="petDetail.mixedBreed === true">YES</td>
                            <td class="pl-8 pr-8 pt-4 pb-4 bg-red-500" v-if="petDetail.mixedBreed === false">NO</td>
                        </tr>
                        <tr>
                            <td class="font-bold uppercase pl-8 pr-8 pt-4 pb-4">Unknown Breed</td>
                            <td class="pl-8 pr-8 pt-4 pb-4 bg-green-500" v-if="petDetail.unknownBreed === true">YES</td>
                            <td class="pl-8 pr-8 pt-4 pb-4 bg-red-500" v-if="petDetail.unknownBreed === false">NO</td>
                        </tr>
                        <tr>
                            <td class="font-bold uppercase pl-8 pr-8 pt-4 pb-4">Spayed</td>
                            <td class="pl-8 pr-8 pt- 4 pb-4 bg-green-500" v-if="petDetail.spayed === true">YES</td>
                            <td class="pl-8 pr-8 pt-4 pb-4 bg-red-500" v-if="petDetail.spayed === false">NO</td>
                        </tr>
                        <tr>
                            <td class="font-bold uppercase pl-8 pr-8 pt-4 pb-4">House Trained</td>
                            <td class="pl-8 pr-8 pt-4 pb-4 bg-green-500" v-if="petDetail.houseTrained === true">YES</td>
                            <td class="pl-8 pr-8 pt-4 pb-4 bg-red-500" v-if="petDetail.houseTrained === false">NO</td>
                        </tr>
                        <tr>
                            <td class="font-bold uppercase pl-8 pr-8 pt-4 pb-4">Declawed</td>
                            <td class="pl-8 pr-8 pt-4 pb-4 bg-green-500" v-if="petDetail.specialNeeds === true">YES</td>
                            <td class="pl-8 pr-8 pt-4 pb-4 bg-red-500" v-if="petDetail.specialNeeds === false">NO</td>
                        </tr>
                    </table>
                </div>
                <div>
                    <table>
                        <tr>
                            <td class="font-bold uppercase pl-8 pr-8 pt-4 pb-4">Special Needs</td>
                            <td class="pl-8 pr-8 pt-4 pb-4 bg-green-500" v-if="petDetail.goodWithChildren === true">
                                YES
                            </td>
                            <td class="pl-8 pr-8 pt-4 pb-4 bg-red-500" v-if="petDetail.goodWithChildren === false">
                                NO
                            </td>
                        </tr>
                        <tr>
                            <td class="font-bold uppercase pl-8 pr-8 pt-4 pb-4">Shots</td>
                            <td class="pl-8 pr-8 pt-4 pb-4 bg-green-500" v-if="petDetail.goodWithDogs === true">YES</td>
                            <td class="pl-8 pr-8 pt-4 pb-4 bg-red-500" v-if="petDetail.goodWithDogs === false">NO</td>
                        </tr>
                        <tr>
                            <td class="font-bold uppercase pl-8 pr-8 pt-4 pb-4">Good With Children</td>
                            <td class="pl-8 pr-8 pt-4 pb-4 bg-green-500" v-if="petDetail.goodWithCats === true">YES</td>
                            <td class="pl-8 pr-8 pt-4 pb-4 bg-red-500" v-if="petDetail.mixedBreed === false">NO</td>
                        </tr>
                        <tr>
                            <td class="font-bold uppercase pl-8 pr-8 pt-4 pb-4">Good with Dogs</td>
                            <td class="pl-8 pr-8 pt-4 pb-4 bg-green-500" v-if="petDetail.mixedBreed === true">YES</td>
                            <td class="pl-8 pr-8 pt-4 pb-4 bg-red-500" v-if="petDetail.mixedBreed === false">NO</td>
                        </tr>
                        <tr>
                            <td class="font-bold uppercase pl-8 pr-8 pt-4 pb-4">Good With Cats</td>
                            <td class="pl-8 pr-8 pt-4 pb-4 bg-green-500" v-if="petDetail.mixedBreed === true">YES</td>
                            <td class="pl-8 pr-8 pt-4 pb-4 bg-red-500" v-if="petDetail.mixedBreed === false">NO</td>
                        </tr>
                    </table>
                </div>
            </div>
            <div class="h-1/3 mb-8 ml-8 mr-8">
                <p class="pb-8 text-2xl italic">{{ petDetail.description }}</p>
            </div>
        </div>
    </div>
</template>
