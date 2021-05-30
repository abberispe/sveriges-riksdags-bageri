import { createStore } from "vuex" 
import axios from 'axios'

const generateID = () => {
    return Math.round(Math.random() *10e10)
}


const totalPrice = (cart) => {
    let totalPrice = 0

    cart.forEach(item => {
        totalPrice += item.price * item.quantity
    });

    return totalPrice

}

const store = createStore({
    state () {
        return {
            products: [],
            workers: [],
            
            user: {},
            cart: [],
            orders: []
        }
    },

    getters: {
        isLoggedIn: state => {
            console.log(state.user.email)
            return state.user.email != undefined
        },
        isItemInCart: state => item => {
            for (let index = 0; index < state.cart.length; index++) {
                const element = state.cart[index];
                if(element.id === item.id) {
                    return true 
                } else {
                    return false
                }
                
                
            }
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
    
        async getPreviousOrders ({commit}) {

            if (this.getters.isLoggedIn) {
                const res = await axios.get(`http://localhost:3001/orders?customerId=${this.state.user.id}`)
                console.log(res.data)
                commit("SET_ORDERS", res.data)
            }
        },

        async placeOrder ({commit}) {
            const order = {
                id: generateID(),
                customerId: this.state.user.id,
                cakes: this.state.cart,
                totalPrice: totalPrice(this.state.cart),
                timestamp: new Date().toJSON()
            }
           console.log(this.state.cart)
           console.log(order)
            // const res = await axios.post("http://localhost:3001/orders", orderobj)
        },

        addItemToCart ({commit}, data) {
            console.log(this.state.cart.includes(data), data)
            if (!this.state.cart.includes(data)){
                commit("ADD_ITEM", data)
            }
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

        UPDATE_ITEM (state, data) {
            console.log(state.cart)
            state.cart.filter(el => el.id === data[0])[0].quantity = data[1]
        },
        UPDATE_ITEM2 (state, data) {
            state.cart.filter(el => el.id === data)[0].quantity++
        },
        ADD_ITEM (state, data) {
           
            state.cart.push(data)
            
            
        },

        DELETE_ITEM (state, id) {
            const i = state.cart.map(item => item.id).indexOf(id);
            state.cart.splice(i, 1);
        },
        CLEAR_CART (state, id) {

        },



        SET_ORDERS (state, items) {
            state.orders = items
        },
    
        SET_USER (state, user) {
            state.user = user
        },
        REMOVE_USER (state) {
            state.user = {}
            state.cart = []
        }
    }
})

export default store
