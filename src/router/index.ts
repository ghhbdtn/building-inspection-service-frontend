import App from "../App.vue";
import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'
import MainPage from "../components/menu/toolbar.components/MainPage.vue";
import AboutPage from "../components/menu/toolbar.components/AboutPage.vue";
import ContactsPage from "../components/menu/toolbar.components/ContactsPage.vue";
import RegisterPage from "../components/menu/toolbar.components/RegisterPage.vue";
import LoginPage from "../components/menu/toolbar.components/LoginPage.vue";
import PersonalAccount from "../components/menu/PersonalAccount.vue";
import ProjectsDashboard from "../components/menu/navigation.drawer.components/projects.dashboard/ProjectsDashboard.vue";
import ProjectEditPage
    from "../components/menu/navigation.drawer.components/create.new.project/ProjectEditPage.vue";
import ProjectSettings
    from "../components/menu/navigation.drawer.components/create.new.project/ProjectSettings.vue";
import InspectionPreparation
    from "../components/menu/navigation.drawer.components/create.new.project/InspectionPreparation.vue";
import ImportMaterialsPage
    from "../components/menu/navigation.drawer.components/create.new.project/ImportMaterialsPage.vue";
import ReportParameters from "../components/menu/navigation.drawer.components/create.new.project/ReportParameters.vue";
import DocExport from "../components/menu/navigation.drawer.components/create.new.project/DocExport.vue";

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
        name: 'Личный кабинет',
        component: PersonalAccount,
    },
    {
        path: '/personal-account/projects-dashboard',
        name: 'Мои проекты',
        component: ProjectsDashboard,
    },
    {
        path: '/personal-account/edit-project',
        name: 'NewProject',
        component: ProjectEditPage,
        children: [
            {
                path: '/personal-account/project-settings',
                name: 'ProjectSettings',
                component: ProjectSettings,
            },
            {
                path: '/personal-account/inspection-preparation',
                name: 'InspectionPreparation',
                component: InspectionPreparation,
            },
            {
                path: '/personal-account/import-materials',
                name: 'ImportMaterialsPage',
                component: ImportMaterialsPage,
            },
            {
                path: '/personal-account/report-parameters',
                name: 'ReportParameters',
                component: ReportParameters,
            },
            {
                path: '/personal-account/report-export',
                name: 'DocExport',
                component: DocExport,
            }
        ]
    },

]

const router = createRouter({
    history: createWebHistory(),
    routes
});

export default router
