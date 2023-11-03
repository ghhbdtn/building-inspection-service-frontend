import App from "../App.vue";
import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'
import MainPage from "../components/menu/toolbar.components/MainPage.vue";
import AboutPage from "../components/menu/toolbar.components/AboutPage.vue";
import ContactsPage from "../components/menu/toolbar.components/ContactsPage.vue";
import RegisterPage from "../components/menu/toolbar.components/RegisterPage.vue";
import LoginPage from "../components/menu/toolbar.components/LoginPage.vue";
import PersonalAccount from "../components/menu/toolbar.components/PersonalAccount.vue";



const routes: Array<any> = [
    {
        path: '/',
        name: 'App',
        component: App
    },
    {
        path: '/main-page',
        name: 'MainPage',
        component: MainPage,
    },
    {
        path: '/about-us',
        name: 'AboutPage',
        component: AboutPage,
    },
    {
        path: '/contacts',
        name: 'ContactsPage',
        component: ContactsPage,
    },
    {
        path: '/register',
        name: 'RegisterPage',
        component: RegisterPage,
    },
    {
        path: '/login',
        name: 'LoginPage',
        component: LoginPage,
    },
    {
        path: '/personal-account',
        name: 'PersonalAccount',
        component: PersonalAccount,
    },

]

const router = createRouter({
    history: createWebHistory(),
    routes
});

export default router
