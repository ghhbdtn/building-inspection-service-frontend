import {plug} from "./plug";
import users from "./modules/users";
import { createStore } from 'vuex';
import Vuex from 'vuex';
import Vue from "vue";
import inspections from "./modules/inspections";
import categories from "./modules/categories";

const store = createStore({
    modules: {
        users,
        inspections,
        categories
    },
   // plugins: [plug]
});
export default store;
