import axios from "axios";

interface Equipment {
    id: number,
    name: string,
    serialNumber: string,
    verificationDate: string
}
export interface State {
    equipment: Equipment
    equipments: Equipment[],
}
const equipment = {
    namespaced: true,
    state: () => ({
        equipment: {
            id: -1,
            name: "",
            serialNumber: "",
            verificationNumber: "",
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
        putEquipment({commit}: any, data: {data: {}, id: number}) {
            return new Promise((resolve, reject) => {
                axios({url: `/api/v1/equipment/${data.id}`, method: 'PUT', data: data.data, withCredentials: true})
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
        deleteEquipment({commit}: any, id: number) {
            return new Promise((resolve, reject) => {
                axios({url: `/api/v1/equipment/${id}`, method: 'DELETE', withCredentials: true})
                    .then(resp => {
                        resolve(resp);
                    })
                    .catch(err => {
                        commit('ERR', err.response != null ? err.response.status : err);
                        reject(err);
                    })
            })
        },
        addEquipmentScan({commit}: any, data: {file: FormData, id: number}) {
            return new Promise((resolve, reject) => {
                axios({url: `/api/v1/equipment/${data.id}/pic`,
                    method: 'POST',
                    data: data.file,
                    withCredentials: true,
                    headers: {
                        'Content-Type': 'multipart/form-data',
                    },
                })
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

export default equipment
