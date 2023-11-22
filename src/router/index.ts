import App from "../App.vue";
import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'
import MainPage from "../components/app.components/toolbar.components/MainPage.vue";
import AboutPage from "../components/app.components/toolbar.components/AboutPage.vue";
import ContactsPage from "../components/app.components/toolbar.components/ContactsPage.vue";
import RegisterPage from "../components/app.components/toolbar.components/RegisterPage.vue";
import LoginPage from "../components/app.components/toolbar.components/LoginPage.vue";
import PersonalAccount from "../components/app.components/PersonalAccount.vue";
import ProjectsDashboard from "../components/app.components/project.components/projects.dashboard/ProjectsDashboard.vue";
import ProjectEditPage
    from "../components/app.components/project.components/project.stages/ProjectEditPage.vue";
import ProjectSettings
    from "../components/app.components/project.components/project.stages/ProjectSettings.vue";
import InspectionPreparation
    from "../components/app.components/project.components/project.stages/InspectionPreparation.vue";
import ImportMaterialsPage
    from "../components/app.components/project.components/project.stages/ImportMaterialsPage.vue";
import ReportParameters from "../components/app.components/project.components/project.stages/ReportParameters.vue";
import DocExport from "../components/app.components/project.components/project.stages/DocExport.vue";
import PersonalData from "../components/app.components/personal.account/PersonalData.vue";
import CompaniesData from "../components/app.components/personal.account/CompaniesData.vue";
import UserEquipment from "../components/app.components/personal.account/UserEquipment.vue";

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
        path: '/personal-account/personal-data',
        name: 'PersonalData',
        component: PersonalData,
    },
    {
        path: '/personal-account/companies',
        name: 'CompaniesData',
        component: CompaniesData,
    },
    {
        path: '/personal-account/equipment',
        name: 'UserEquipment',
        component: UserEquipment,
    },
    {
        path: '/personal-account/:id/edit-project',
        name: 'NewProject',
        component: ProjectEditPage,
        children: [
            {
                path: '/personal-account/:id/project-settings',
                name: 'ProjectSettings',
                component: ProjectSettings,
            },
            {
                path: '/personal-account/:id/inspection-preparation',
                name: 'InspectionPreparation',
                component: InspectionPreparation,
            },
            {
                path: '/personal-account/:id/import-materials',
                name: 'ImportMaterialsPage',
                component: ImportMaterialsPage,
            },
            {
                path: '/personal-account/:id/report-parameters',
                name: 'ReportParameters',
                component: ReportParameters,
            },
            {
                path: '/personal-account/:id/report-export',
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
