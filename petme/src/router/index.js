import { createRouter, createWebHistory } from "vue-router";
import Home from "../views/Home.vue";
import Register from "../views/Register.vue";
import MainList from "../views/MainList.vue";
import Login from "../views/Login.vue";
import AddPet from "../views/AddPet.vue";
import Detail from "../views/Detail.vue";
import OTPAuth from "../views/OTPAuth.vue";
import Match from "../views/Match.vue";
import Chat from "../components/Chat.vue";

const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes: [
        {
            path: "/",
            name: "home",
            component: Home,
        },
        {
            path: "/register",
            name: "register",
            component: Register,
        },
        {
            path: "/OTPAuth",
            name: "OTPAuth",
            component: OTPAuth,
        },
        {
            path: "/login",
            name: "login",
            component: Login,
        },
        {
            path: "/main",
            name: "mainlist",
            component: MainList,
        },
        {
            path: "/addPet",
            name: "addPet",
            component: AddPet,
        },
        {
            path: "/detail/:id",
            name: "detail",
            component: Detail,
        },
        {
            path: "/match",
            name: "match",
            component: Match,
        },
        {
            path: "/chat/:id",
            name: "chat",
            component: Chat,
        },
    ],
});

export default router;
