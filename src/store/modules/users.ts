import _ from "lodash";
import Vue from "vue";
import axios from "axios";
interface User {
    firstName: string,
    secondName: string,
    patronymic: string,
    email: string,
    number: string
}

export interface State {
    isAuthenticated: boolean,
    user: User,
    status: number,
    avatar: string
}
const users = {
    namespaced: true,
    state: () => ({
        isAdmin: false,
        isAuthenticated: false,
        user: {} as User,
        avatar: '',
        status: 0
    }),

    getters: {
        getUserData(state: State) {
            return state.user
        },
        getAvatar(state: State) {
            return state.avatar
        }
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
        },
        SET_USER_DATA(state: State, data: User) {
            state.user = data;
        },
        SET_AVATAR(state: State, data: any) {
            state.avatar = data;
        },
        DELETE_AVATAR(state: State) {
            state.avatar = '';
        },
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
        userData({commit}: any) {
            return new Promise((resolve, reject) => {
                axios({url: '/api/v1/account ', method: 'GET', withCredentials: true})
                    .then(resp => {
                        commit('SET_USER_DATA', resp.data)
                        resolve(resp);
                    })
                    .catch(err => {
                        commit('ERR', err.response != null ? err.response.status : err);
                        reject(err);
                    })
            })
        },
        putUserData({commit}: any, data: {}) {
            return new Promise((resolve, reject) => {
                axios({url: '/api/v1/account/update-user', data: data, method: 'PUT', withCredentials: true})
                    .then(resp => {
                        commit('SET_USER_DATA', resp.data)
                        resolve(resp);
                    })
                    .catch(err => {
                        commit('ERR', err.response != null ? err.response.status : err);
                        reject(err);
                    })
            })
        },
        changePassword({commit}: any, data: {}) {
            return new Promise((resolve, reject) => {
                axios({url: '/api/v1/account/password', data: data, method: 'PUT', withCredentials: true})
                    .then(resp => {
                        resolve(resp);
                    })
                    .catch(err => {
                        commit('ERR', err.response != null ? err.response.status : err);
                        reject(err);
                    })
            })
        },
        userAvatar({commit}: any) {
            return new Promise((resolve, reject) => {
                axios({url: '/api/v1/account/logo ', method: 'GET', withCredentials: true, responseType: 'arraybuffer'})
                    .then(resp => {
                        const arrayBuffer = resp.data;
                        const base64String = btoa(
                            new Uint8Array(arrayBuffer)
                                .reduce((data, byte) => data + String.fromCharCode(byte), '')
                        );
                        commit('SET_AVATAR', `${base64String}`)
                        resolve(resp);
                    })
                    .catch(err => {
                        commit('ERR', err.response != null ? err.response.status : err);
                        reject(err);
                    })
            })
        },
        addAvatar({commit}: any, data: FormData) {
            return new Promise((resolve, reject) => {
                axios({url: `/api/v1/account/logo `,
                    method: 'POST',
                    data: data,
                    headers: {
                        'Content-Type': 'multipart/form-data',
                    },
                    withCredentials: true})
                    .then(resp => {
                        resolve(resp);
                    })
                    .catch(err => {
                        commit('ERR', err.response != null ? err.response.status : err);
                        reject(err);
                    })
            })
        },
    }
};

export default users
