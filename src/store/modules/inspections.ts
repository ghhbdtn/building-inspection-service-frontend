import axios from "axios";
import {Inspection} from "../../source/interfaces";
import {da} from "vuetify/locale";

export interface State {
    allInspections: Inspection[],
    inspection: Inspection,
    newInspection: { inspectionId: number },
    totalPages: number,
    mainPhoto: string
}
const inspections = {
    namespaced: true,
    state: () => ({
        allInspections: [],
        inspection: {
            id: 0,
            name: "",
            address: "",
            script: "",
            isCulture: false,
            startDate: "",
            endDate: "",
            company: {
                id: 0,
                name: ""
            },
            employer: {
                id: 0,
                name: ""
            }
        },
        newInspection: {
            inspectionId: -1
        },
        mainPhoto: "",
        totalPages: 0
    }),

    getters: {
        getAll(state: State){
            return state.allInspections;
        },
        getPages(state: State){
            return state.totalPages;
        },
        getNewInspectionId(state: State) {
            return state.newInspection;
        },
        getInspectionData(state: State) {
            return state.inspection
        },
        getMainPhoto(state: State) {
            return state.mainPhoto;
        },
    },

    mutations: {
        SET_INSPECTIONS: (state: State, data: {}) => {
            state.allInspections = data['content'];
            state.totalPages = data['totalPages']
        },
        SET_INSPECTION: (state: State, data: {inspectionId: number}) => {
            state.newInspection = data;
        },
        SET_INSPECTION_DATA: (state: State, data: {}) => {
            state.inspection = data;
        },
        SET_INSPECTION_PHOTO: (state: State, data: any) => {
            state.mainPhoto = data;
        },
        DELETE_INSPECTION_PHOTO: (state: State) => {
            state.mainPhoto = '';
        },
    },

    actions: {
        allInspections({commit}: any, page: number) {
            return new Promise((resolve, reject) => {
                axios({url: `api/v1/inspections?pageNum=${page}&pageSize=9`, method: 'GET', withCredentials: true})
                    .then(resp => {
                        const inspections: Inspection[] = resp.data;
                        commit('SET_INSPECTIONS', resp.data);
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
        },
        deleteInspection({commit}: any, data: {id: number}) {
            return new Promise((resolve, reject) => {
                axios({url: `/api/v1/inspections/${data.id}`, data: data, method: 'DELETE', withCredentials: true})
                    .then(resp => {
                        resolve(resp);
                    })
                    .catch(err => {
                        commit('ERR', err.response != null ? err.response.status : err);
                        reject(err);
                    })
            })
        },
        addMainPhoto({commit}: any, data: {id: number, file: FormData}) {
            return new Promise((resolve, reject) => {
                axios({url: `/api/v1/inspections/${data.id}/main-photo`,
                    method: 'POST',
                    data: data.file,
                    headers: {
                        'Content-Type': 'multipart/form-data',
                    },
                    withCredentials: true})
                    .then(resp => {
                        //const inspectionId: number = resp.data;
                        //commit('SET_INSPECTION', resp.data);
                        resolve(resp);
                    })
                    .catch(err => {
                        commit('ERR', err.response != null ? err.response.status : err);
                        reject(err);
                    })
            })
        },
        inspectionMainData({commit}: any, id: number) {
            return new Promise((resolve, reject) => {
                axios({url: `/api/v1/inspections/${id}`, method: 'GET', withCredentials: true})
                    .then(resp => {
                        commit('SET_INSPECTION_DATA', resp.data);
                        resolve(resp);
                    })
                    .catch(err => {
                        commit('ERR', err.response != null ? err.response.status : err);
                        reject(err);
                    })
            })
        },
        putInspectionData({commit}: any, data: {id: number, data: {}}) {
            return new Promise((resolve, reject) => {
                axios({url: `/api/v1/inspections/${data.id}`, method: 'PUT', data: data.data, withCredentials: true})
                    .then(resp => {
                        commit('SET_INSPECTION_DATA', data.data);
                        resolve(resp);
                    })
                    .catch(err => {
                        commit('ERR', err.response != null ? err.response.status : err);
                        reject(err);
                    })
            })
        },
        inspectionMainPhoto({commit}: any, id: number) {
            return new Promise((resolve, reject) => {
                axios({url: `/api/v1/inspections/${id}/main-photo`, method: 'GET', withCredentials: true, responseType: 'arraybuffer',
                })
                    .then(resp => {
                        const arrayBuffer = resp.data;
                        const base64String = btoa(
                            new Uint8Array(arrayBuffer)
                                .reduce((data, byte) => data + String.fromCharCode(byte), '')
                        );
                        commit('SET_INSPECTION_PHOTO', `${base64String}`);
                        resolve(resp);
                    })
                    .catch(err => {
                        commit('ERR', err.response != null ? err.response.status : err);
                        reject(err);
                    })
            })
        },
        deleteMainPhoto({commit}: any, id: number) {
            return new Promise((resolve, reject) => {
                axios({url: `/api/v1/inspections/${id}/main-photo`, method: 'DELETE', withCredentials: true,
                })
                    .then(resp => {

                        commit('DELETE_INSPECTION_PHOTO');
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

export default inspections
