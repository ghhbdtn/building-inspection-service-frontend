import axios from "axios";

interface Company {
    id: number,
    name: string,
    legalAddress: string,
    city: string,

    verificationDate: string
}
export interface State {
    equipment: Company
    equipments: Company[],
}
const companies = {
    namespaced: true,
    state: () => ({
        equipment: {
            id: -1,
            name: "",
            serialNumber: "",
            verificationDate: ""
        } as Equipment,
        equipments: [] as Equipment[],
    }),

    getters: {
        getAll(state: State){
            return state.equipments;
        },
        getCategory(state: State){
            return state.equipment;
        },
    },

    mutations: {
        SET_EQUIPMENTS: (state: State, data: Equipment[]) => {
            state.equipments = data;
        },
        SET_EQUIPMENT: (state: State, data: Equipment) => {
            state.equipment = data;
        },
    },

    actions: {
        allEquipments({commit}: any) {
            return new Promise((resolve, reject) => {
                axios({url: '/api/v1/equipment', method: 'GET', withCredentials: true})
                    .then(resp => {
                        commit('SET_EQUIPMENTS', resp.data);
                        resolve(resp);
                    })
                    .catch(err => {
                        commit('ERR', err.response != null ? err.response.status : err);
                        reject(err);
                    })
            })
        },
        createNewEquipment({commit}: any, data: {}) {
            return new Promise((resolve, reject) => {
                axios({url: '/api/v1/equipment', method: 'POST', data: data, withCredentials: true})
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
    }
};

export default companies
