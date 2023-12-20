import axios from "axios";

interface Company {
    id: number,
    name: string,
    legalAddress: string,
    city: string,
    sro: Sro[],
    employers: Employer[],
    licenses: License[],
}
interface Employer {
    id: number,
    name: string,
    positionName: string
}
interface License {
    id: number,
    name: string,
    number: number
}
interface Sro {
    id: number,
    name: string
}
export interface State {
    company: Company
    companies: Company[],
    newId: number
}
const companies = {
    namespaced: true,
    state: () => ({
        company: {
            id: -1,
            name: "",
            legalAddress: "",
            city: "",
            sro: [] as Sro[],
            employers: [] as Employer[],
            licenses: [] as License[]
        } as Company,
        companies: [] as Company[],
        newId: -1
    }),

    getters: {
        getAll(state: State){
            return state.companies;
        },
        getCompany(state: State){
            return state.company;
        },
        getID(state: State) {
            return state.newId
        }
    },

    mutations: {
        SET_COMPANIES: (state: State, data: Company[]) => {
            state.companies = data;
        },
        SET_COMPANY: (state: State, data: Company) => {
            state.company = data;
        },
        SET_COMPANY_ID: (state: State, data: number) => {
            state.newId = data;
        },
    },

    actions: {
        allCompanies({commit}: any) {
            return new Promise((resolve, reject) => {
                axios({url: '/api/v1/company', method: 'GET', withCredentials: true})
                    .then(resp => {
                        commit('SET_COMPANIES', resp.data);
                        resolve(resp);
                    })
                    .catch(err => {
                        commit('ERR', err.response != null ? err.response.status : err);
                        reject(err);
                    })
            })
        },
        createNewCompany({commit}: any, data: {}) {
            return new Promise((resolve, reject) => {
                axios({url: '/api/v1/company', method: 'POST', data: data, withCredentials: true})
                    .then(resp => {
                        commit('SET_COMPANY_ID', resp.data.id);
                        resolve(resp);
                    })
                    .catch(err => {
                        commit('ERR', err.response != null ? err.response.status : err);
                        reject(err);
                    })
            })
        },
        putCompany({commit}: any, data: { data: {}, id: number }) {
            return new Promise((resolve, reject) => {
                axios({url: `/api/v1/company/${data.id}`, method: 'PUT', data: data.data, withCredentials: true})
                    .then(resp => {
                        commit('SET_COMPANY', data.data);
                        resolve(resp);
                    })
                    .catch(err => {
                        commit('ERR', err.response != null ? err.response.status : err);
                        reject(err);
                    })
            })
        },
        getCompanyData({commit}: any, id: number) {
            return new Promise((resolve, reject) => {
                axios({url: `/api/v1/company/${id}`, method: 'GET', withCredentials: true})
                    .then(resp => {
                        commit('SET_COMPANY', resp.data);
                        resolve(resp);
                    })
                    .catch(err => {
                        commit('ERR', err.response != null ? err.response.status : err);
                        reject(err);
                    })
            })
        },
        addLicense({commit}: any, data: {id: number, data: {}}) {
            return new Promise((resolve, reject) => {
                axios({url: `/api/v1/company/${data.id}/license`, method: 'POST', data: data.data, withCredentials: true})
                    .then(resp => {
                        //commit('SET_COMPANY', resp.data);
                        resolve(resp);
                    })
                    .catch(err => {
                        commit('ERR', err.response != null ? err.response.status : err);
                        reject(err);
                    })
            })
        },
        addLicenseScan({commit}: any, data: {id: number, licId: number, file: FormData}) {
            return new Promise((resolve, reject) => {
                axios({url: `/api/v1/company/${data.id}/license/${data.licId}/scan?scanNumber=0`,
                    method: 'POST',
                    data: data.file,
                    headers: {
                        'Content-Type': 'multipart/form-data',
                    },
                    withCredentials: true
                })
                    .then(resp => {
                        //commit('SET_COMPANY', resp.data);
                        resolve(resp);
                    })
                    .catch(err => {
                        commit('ERR', err.response != null ? err.response.status : err);
                        reject(err);
                    })
            })
        },
        putLicense({commit}: any, data: {id: number, licId: number, data: {}}) {
            return new Promise((resolve, reject) => {
                axios({url: `/api/v1/company/${data.id}/license/${data.licId}`,
                    method: 'PUT',
                    data: data.data,
                    withCredentials: true
                })
                    .then(resp => {
                        //commit('SET_COMPANY', resp.data);
                        resolve(resp);
                    })
                    .catch(err => {
                        commit('ERR', err.response != null ? err.response.status : err);
                        reject(err);
                    })
            })
        },
        deleteCompany({commit}: any, id: number) {
            return new Promise((resolve, reject) => {
                axios({url: `/api/v1/company/${id}`, method: 'DELETE', withCredentials: true})
                    .then(resp => {
                        commit('SET_COMPANY', resp.data);
                        resolve(resp);
                    })
                    .catch(err => {
                        commit('ERR', err.response != null ? err.response.status : err);
                        reject(err);
                    })
            })
        },
        deleteLicense({commit}: any, data: {id: number, licId: number}) {
            return new Promise((resolve, reject) => {
                axios({url: `/api/v1/company/${data.id}/license/${data.licId}`,
                    method: 'DELETE',
                    withCredentials: true
                })
                    .then(resp => {
                        //commit('SET_COMPANY', resp.data);
                        resolve(resp);
                    })
                    .catch(err => {
                        commit('ERR', err.response != null ? err.response.status : err);
                        reject(err);
                    })
            })
        },
        deleteLicenseScan({commit}: any, data: {id: number, licId: number, scanId: number}) {
            return new Promise((resolve, reject) => {
                axios({url: `/api/v1/company/${data.id}/license/${data.licId}/scan/${data.scanId}`,
                    method: 'DELETE',
                    withCredentials: true
                })
                    .then(resp => {
                        //commit('SET_COMPANY', resp.data);
                        resolve(resp);
                    })
                    .catch(err => {
                        commit('ERR', err.response != null ? err.response.status : err);
                        reject(err);
                    })
            })
        },
        addSro({commit}: any, data: {id: number, file: FormData}) {
            return new Promise((resolve, reject) => {
                axios({url: `/api/v1/company/${data.id}/sro?scanNumber=0`,
                    method: 'POST',
                    data: data.file,
                    headers: {
                        'Content-Type': 'multipart/form-data',
                    },
                    withCredentials: true
                })
                    .then(resp => {
                        //commit('SET_COMPANY', resp.data);
                        resolve(resp);
                    })
                    .catch(err => {
                        commit('ERR', err.response != null ? err.response.status : err);
                        reject(err);
                    })
            })
        },
        deleteSro({commit}: any, data: {id: number, sroId: number}) {
            return new Promise((resolve, reject) => {
                axios({url: `/api/v1/company/${data.id}/sro/${data.sroId}`,
                    method: 'DELETE',
                    withCredentials: true
                })
                    .then(resp => {
                        //commit('SET_COMPANY', resp.data);
                        resolve(resp);
                    })
                    .catch(err => {
                        commit('ERR', err.response != null ? err.response.status : err);
                        reject(err);
                    })
            })
        },
        addEmployee({commit}: any, data: {id: number, file: FormData, name: string, position: string}) {
            return new Promise((resolve, reject) => {
                axios({url: `/api/v1/company/${data.id}/employer?name=${data.name}&position=${data.position}`,
                    method: 'POST',
                    data: data.file,
                    headers: {
                        'Content-Type': 'multipart/form-data',
                    },
                    withCredentials: true
                })
                    .then(resp => {
                        //commit('SET_COMPANY', resp.data);
                        resolve(resp);
                    })
                    .catch(err => {
                        commit('ERR', err.response != null ? err.response.status : err);
                        reject(err);
                    })
            })
        },
        putEmployee({commit}: any, data: {id: number, empId: number, data: {}}) {
            return new Promise((resolve, reject) => {
                axios({url: `/api/v1/company/${data.id}/employer/${data.empId}`,
                    method: 'PUT',
                    data: data.data,
                    withCredentials: true
                })
                    .then(resp => {
                        //commit('SET_COMPANY', resp.data);
                        resolve(resp);
                    })
                    .catch(err => {
                        commit('ERR', err.response != null ? err.response.status : err);
                        reject(err);
                    })
            })
        },
        deleteEmployee({commit}: any, data: {id: number, empId: number, data: {}}) {
            return new Promise((resolve, reject) => {
                axios({url: `/api/v1/company/${data.id}/employer/${data.empId}`,
                    method: 'DELETE',
                    withCredentials: true
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

export default companies
