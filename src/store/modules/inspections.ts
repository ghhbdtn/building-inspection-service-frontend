import axios from "axios";
import {Inspection} from "../../source/interfaces";

export interface State {
    allInspections: Inspection[],
    inspection: Inspection,
    newInspection: { inspectionId: number },
    totalPages: number
}
const inspections = {
    namespaced: true,
    state: () => ({
        allInspections: [],
        inspection: {
            id: -1,
            name: "",
            startDate: "",
            endDate: "",
            address: "",
            buildingType: "",
            companyID: -1,
            mainPhotoName: "",
            mainPhotoID: -1,
            status: "",
            reportName: "",
            script: "",
            result: "",
            categoriesCount: -1
        },
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
        }
    },

    mutations: {
        SET_INSPECTIONS: (state: State, data: {}) => {
            state.allInspections = data['content'];
            state.totalPages = data['totalPages']
        },
        SET_INSPECTION: (state: State, data: {inspectionId: number}) => {
            state.newInspection = data;
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
    }
};

export default inspections
