import {plug} from "./plug";
import users from "./modules/users";
import { createStore } from 'vuex';
import inspections from "./modules/inspections";
import categories from "./modules/categories";
import equipment from "./modules/equipment";
import companies from "./modules/companies";

const store = createStore({
    modules: {
        users,
        inspections,
        categories,
        equipment,
        companies
    },
   // plugins: [plug]
});
export default store;
