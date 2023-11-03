import _ from "lodash";
import Vue from "vue";

interface User {
    id: number,
    login: string,
    fullName: string,
    terminationDate: string,
    isAdmin: boolean
}

export interface State {
    isAuthenticated: boolean,
    user: User,
    status: number
}
const users = {
    namespaced: true,
    state: () => ({

        isAdmin: false,
        isAuthenticated: false,
        user: {} as User,
        all: [] as User[],
        totalPages: 0,
        totalElements: 0,
        status: 0

    }),

    getters: {
        getUserRole: (state: State): boolean => {
            return state.user.isAdmin;
        }
    },

    mutations: {
        SET_USER: (state: State) => {
            // state.user.id = user.id;
            // state.user.login = user.fullName;
            // state.user.login = user.login;
            // state.user.isAdmin = user.isAdmin;
            // state.user.terminationDate = user.terminationDate;
            // state.isAdmin = user.isAdmin;
            state.isAuthenticated = true;
        },
        LOG_OUT(state: State) {
            state.user = {} as User;
            state.isAuthenticated = false;
        },
        ERR(state: State, data: number) {
            state.status = data;
        }
    },

    actions: {
        // signIn({commit}: any, data: {}) {
        //     return new Promise((resolve, reject) => {
        //         axios({url: '/api/auth/sign-in ', data: data, method: 'POST', withCredentials: true})
        //             .then(resp => {
        //                 const user: User = resp.data;
        //                 commit('SET_USER', user);
        //                 resolve(resp);
        //             })
        //             .catch(err => {
        //                 commit('ERR', err.response != null ? err.response.status : err);
        //                 reject(err);
        //             })
        //     })
        // },
        // signUp({commit}: any, data: {}) {
        //     return new Promise((resolve, reject) => {
        //         axios({url: '/api/auth/sign-up ', data: data, method: 'POST', withCredentials: true})
        //             .then(resp => {
        //                 resolve(resp);
        //             })
        //             .catch(err => {
        //                 commit('ERR', err.response != null ? err.response.status : err);
        //                 reject(err);
        //             })
        //     })
        // },
        // logOut({commit}: any) {
        //     document.cookie = 'jwt' + '=; Path=/; Expires=Thu, 01 Jan 1970 00:00:01 GMT;';
        //     commit('LOG_OUT');
        // },
    }
};

export default users
