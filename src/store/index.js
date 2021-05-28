import { createStore } from "vuex" 
import axios from 'axios'

//to handle state
const state = {
    products: [],
    workers: [],
    user: {}
}

//to handle state
const getters = {}

//to handle actions
const actions = {
    async getProducts ({ commit }) {
        const res = await axios.get('http://localhost:3001/cakes')  
        commit('SET_PRODUCTS', res.data)
    },
    async getWorkers ({ commit }) {
       const res = await axios.get('http://localhost:3001/staff')
       console.log(res.data)
       commit('SET_WORKERS', res.data)
    },
    async login ({ commit }, creds) {
        const res = await axios.get("http://localhost:3001/customers")
        const db = res.data

        db.forEach(user => {
            if (creds[0] === user.email && creds[1] === user.password) {
                console.log("User:", user)
                commit("SET_USER", user)
            }
        });
    }
}

//to handle mutations
const mutations = {
    SET_PRODUCTS(state,products) {
        state.products = products
    },
    SET_WORKERS (state, workers) {
        state.workers = workers
    },
    SET_USER (state, user) {
        state.user = user
    }
}


const store = createStore({
   state,
   getters,
   actions,
   mutations
})

export default store
