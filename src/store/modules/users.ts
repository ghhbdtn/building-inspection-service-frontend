import _ from "lodash";
import Vue from "vue";
import axios from "axios";
interface User {
    id: number,
    name: string,
    surname: string,
    patronymic: string,
    email: string,
    number: string
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
        status: 0

    }),

    getters: {
    },

    mutations: {
        SET_USER: (state: State, user: User) => {
            state.user = user;
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
        signIn({commit}: any, data: {}) {
            return new Promise((resolve, reject) => {
                axios({url: '/api/v1/auth/sign-in ', data: data, method: 'POST', withCredentials: true})
                    .then(resp => {
                        const user: User = resp.data;
                        commit('SET_USER', user);
                        resolve(resp);
                    })
                    .catch(err => {
                        commit('ERR', err.response != null ? err.response.status : err);
                        reject(err);
                    })
            })
        },
        signUp({commit}: any, data: {}) {
            return new Promise((resolve, reject) => {
                axios({url: '/api/v1/auth/sign-up ', data: data, method: 'POST', withCredentials: true})
                    .then(resp => {
                        resolve(resp);
                    })
                    .catch(err => {
                        commit('ERR', err.response != null ? err.response.status : err);
                        reject(err);
                    })
            })
        },
        logOut({commit}: any) {
            document.cookie = 'jwt' + '=; Path=/; Expires=Thu, 01 Jan 1970 00:00:01 GMT;';
            commit('LOG_OUT');
        },
    }
};

export default users
