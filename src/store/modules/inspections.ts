import axios from "axios";
import {Inspection} from "../../source/interfaces";

export interface State {
    allInspections: Inspection[],
    inspection: Inspection,
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

    }),

    getters: {
        getAll(state: State){
            return state.allInspections;
        }
    },

    mutations: {
        SET_INSPECTIONS: (state: State, inspections: []) => {
            state.allInspections = inspections;
        },
        SET_INSPECTION: (state: State, data: {inspectionId: number}) => {
            state.inspection.id = data.inspectionId
        },
    },

    actions: {
        allInspections({commit}: any) {
            return new Promise((resolve, reject) => {
                axios({url: '/api/v1/inspections ', method: 'GET', withCredentials: true})
                    .then(resp => {
                        const inspections: Inspection[] = resp.data.content;
                        commit('SET_INSPECTIONS', inspections);
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
                        commit('SET_INSPECTION', inspectionId);
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

export default inspections
