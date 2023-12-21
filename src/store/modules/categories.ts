import axios from "axios";
import {Categories, Inspection} from "../../source/interfaces";

interface Category {
    id: number,
        name: string,
        photos: { id: number, name: string }[]
}
export interface State {
    category: Category
    allCategories: Category[],
    inspectionId: number,
}
const categories = {
    namespaced: true,
    state: () => ({
        category: {
            id: -1,
            name: "",
            photos: [] as { id: number, name: string }[]
        } as Category,
        allCategories: [] as Category[],
        inspectionId: -1,
    }),

    getters: {
        getAll(state: State){
            return state.allCategories;
        },
        getCategory(state: State){
            return state.category;
        },
    },

    mutations: {
        SET_CATEGORIES: (state: State, data: Category[]) => {
            state.allCategories = data;
        },
        SET_CATEGORY: (state: State, data: {id: number}) => {
            state.category.id = data.id;
        },
    },

    actions: {
        allCategories({commit}: any, id: number) {
            return new Promise((resolve, reject) => {
                axios({url: '/api/v1/inspections/' + id + '/categories', method: 'GET', withCredentials: true})
                    .then(resp => {
                        const categories: Inspection[] = resp.data;
                        commit('SET_CATEGORIES', resp.data);
                        resolve(resp);
                    })
                    .catch(err => {
                        commit('ERR', err.response != null ? err.response.status : err);
                        reject(err);
                    })
            })
        },
        createNewCategory({commit}: any, data: { inspectionId: number, name: string }) {
            return new Promise((resolve, reject) => {
                axios({url: '/api/v1/inspections/' + data.inspectionId + '/categories?name=' + data.name, method: 'POST', data: {}, withCredentials: true})
                    .then(resp => {
                        const categories: Inspection[] = resp.data;
                        commit('SET_CATEGORY', resp.data);
                        resolve(resp);
                    })
                    .catch(err => {
                        commit('ERR', err.response != null ? err.response.status : err);
                        reject(err);
                    })
            })
        },
        addCategoryPhoto({commit}: any, data: { inspectionId: number, id: string, file: FormData }) {
            return new Promise((resolve, reject) => {
                axios({ url: `/api/v1/inspections/${data.inspectionId}/categories/${data.id}/photos`,
                    method: 'POST',
                    data: data.file, // Используйте `data` для передачи `FormData`
                    headers: {
                        'Content-Type': 'multipart/form-data',
                    },
                    withCredentials: true})
                    .then(resp => {
                        const categories: Inspection[] = resp.data;
                        //commit('SET_CATEGORY', resp.data);
                        resolve(resp);
                    })
                    .catch(err => {
                        commit('ERR', err.response != null ? err.response.status : err);
                        reject(err);
                    })
            })
        },
        deleteCategory({commit}: any, data: { categoryId: number, id: string}) {
            return new Promise((resolve, reject) => {
                axios({ url: `/api/v1/inspections/${data.id}/categories/${data.categoryId}`,
                    method: 'DELETE',
                    withCredentials: true})
                    .then(resp => {
                        //commit('SET_CATEGORY', resp.data);
                        resolve(resp);
                    })
                    .catch(err => {
                        commit('ERR', err.response != null ? err.response.status : err);
                        reject(err);
                    })
            })
        },
        putCategory({commit}: any, data: { inspectionId: number, id: number,name: string }) {
            return new Promise((resolve, reject) => {
                axios({url: '/api/v1/inspections/' + data.inspectionId + '/categories/' + data.id + '?name=' + data.name, method: 'PUT', data: {}, withCredentials: true})
                    .then(resp => {
                        //commit('SET_CATEGORY', resp.data);
                        resolve(resp);
                    })
                    .catch(err => {
                        commit('ERR', err.response != null ? err.response.status : err);
                        reject(err);
                    })
            })
        },
        deleteCategoryPhoto({commit}: any, data: { inspectionId: number, id: string, fileId: number }) {
            return new Promise((resolve, reject) => {
                axios({ url: `/api/v1/inspections/${data.inspectionId}/categories/${data.id}/photos/${data.fileId}`,
                    method: 'DELETE',
                    withCredentials: true})
                    .then(resp => {
                        const categories: Inspection[] = resp.data;
                        //commit('SET_CATEGORY', resp.data);
                        resolve(resp);
                    })
                    .catch(err => {
                        commit('ERR', err.response != null ? err.response.status : err);
                        reject(err);
                    })
            })
        },
        createNewInspection({commit}: any, data: {}) {
            return new Promise((resolve, reject) => {
                axios({url: '/api/v1/inspections ', data: data, method: 'POST', withCredentials: true})
                    .then(resp => {
                        const inspectionId: number = resp.data;
                        commit('SET_INSPECTION', resp.data);
                        resolve(resp);
                    })
                    .catch(err => {
                        commit('ERR', err.response != null ? err.response.status : err);
                        reject(err);
                    })
            })
        }
    }
};

export default categories
