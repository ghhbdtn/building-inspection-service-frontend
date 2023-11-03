import {plug} from "./plug";
import users from "./modules/users";
import { createStore } from 'vuex';
import Vuex from 'vuex';
import Vue from "vue";

const store = createStore({
    modules: {
        users: users
    },
   // plugins: [plug]
});
export default store;
