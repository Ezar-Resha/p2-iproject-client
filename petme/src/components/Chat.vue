<script>
import { mapActions, mapState } from "pinia";
import Talk from "talkjs";
import { petStore } from "../stores/pets";
export default {
    name: "Chat",
    methods: {
        ...mapActions(petStore, ["getPetDetail"]),
    },
    computed: {
        ...mapState(petStore, ["petDetail"]),
    },
    mounted: function () {
        this.getPetDetail(this.$route.params.id).then((res) => {
            let user = {
                name: localStorage.getItem("user"),
                email: localStorage.getItem("email"),
            };

            let user2 = {
                name: this.petDetail.name,
                photoUrl: this.petDetail.imageUrl,
                id: this.petDetail.id,
                OwnerId: this.petDetail.OwnerId,
            };
            Talk.ready.then(function () {
                var me = new Talk.User({
                    id: `${user.email}_${user.name}`,
                    name: user.name,
                    email: user.email,
                    welcomeMessage: "Hey there! How are you? :-)",
                    role: "default",
                });

                window.talkSession = new Talk.Session({
                    appId: import.meta.env.VITE_TALKJS,
                    me: me,
                });

                var other = new Talk.User({
                    id: `${user2.name}_${user2.id}_${user2.OwnerId}`,
                    name: user2.name,
                    photoUrl: user2.photoUrl,
                    welcomeMessage: `Hey, Owner of ${user2.name} Here. `,
                    role: "default",
                });

                var conversation = talkSession.getOrCreateConversation(Talk.oneOnOneId(me, other));
                conversation.setParticipant(me);
                conversation.setParticipant(other);
                var inbox = talkSession.createInbox();
                inbox.select(conversation);
                inbox.mount(document.getElementById("talkjs-container"));
            });
        });
    },
};
</script>
<template>
    <div id="talkjs-container" style="width: 90%; margin: 30px; height: 500px">
        <i>Loading chat...</i>
    </div>
</template>
