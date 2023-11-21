import {plug} from "./plug";
import users from "./modules/users";
import { createStore } from 'vuex';
import Vuex from 'vuex';
import Vue from "vue";
import inspections from "./modules/inspections";

const store = createStore({
    modules: {
        users,
        inspections
    },
   // plugins: [plug]
});
export default store;
