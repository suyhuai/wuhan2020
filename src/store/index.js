import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
    state: {
        area: ''
    },
    getters: {
        Area: state => {
            return state.area
        }
    },
    mutations: {
        setArea(state, payload) {
            state.area = payload.area
        }
    },
    actions: {},
    modules: {}
})
