import { createStore } from "vuex" 
import axios from 'axios'

const generateID = () => {
    return ([1e7]+-1e3+-4e3+-8e3+-1e11).replace(/[018]/g, c =>
        (c ^ crypto.getRandomValues(new Uint8Array(1))[0] & 15 >> c / 4).toString(16)
    );
}

const store = createStore({
    state () {
        return {
            products: [],
            workers: [],
            
            user: {},
            cart: []
        }
    },

    getters: {
        isLoggedIn: state => {
            console.log(state.user.email)
            return state.user.email != undefined
        }
    },

    actions: {
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
    
            for (let i = 0; i < db.length; i++) {
                const user = db[i];
    
                if (creds[0] === user.email && creds[1] === user.password) {
                    console.log("User:", user)
                    commit("SET_USER", user)
    
                    return true
                }
            }
            return false
        },
    
        async createAccount ({ commit }, newUser) {
    
            newUser.id = generateID()
    
            const getRes = await axios.get("http://localhost:3001/customers")
            const db = getRes.data
    
            for (let i = 0; i < db.length; i++) {
                const user = db[i];
                if (newUser.email === user.email) {
                    console.log("Same email")
                    return false
                }
            }
    
            const postRes = await axios.post("http://localhost:3001/customers", newUser)
    
            commit("SET_USER", newUser)
    
            return true
        },
    
        async getCart ({commit}) {

            if (this.getters.isLoggedIn) {
                const res = await axios.get(`http://localhost:3001/orders?customerId=${this.state.user.id}`)
                console.log(res.data)
                commit("SET_CART", res.data)
            }

            
        },
    
        async addToCart ({commit}, item) {
    
        },
    
        async removeFromCart ({commit}, item) {
    
        }
    
    
    
    },


    mutations: {
        SET_PRODUCTS(state,products) {
            state.products = products
        },
        SET_WORKERS (state, workers) {
            state.workers = workers
        },
    
        SET_CART (state, items) {
            state.cart = items
        },
    
        SET_USER (state, user) {
            state.user = user
        },
        REMOVE_USER (state) {
            state.user = {}
            state.cart = {}
        }
    }
})

export default store
