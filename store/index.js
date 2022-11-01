import Vue from 'vue'
import Vuex from 'vuex'
import actions from './actions'
import getters from './getters'
import mutations from './mutations'
Vue.use(Vuex)

export default () => new Vuex.Store({
    state: () => ({
        windowSize:null,
        windowHeight:null,
        //pages from strapi
        pageHome: null,
        basePathApiUrl: 'https://crm.polnac.com',
        productos: null

    }),
    actions,
    getters,
    mutations
})