import Vue from 'vue'
import Vuex from 'vuex'

import contato from './contato'

Vue.use(Vuex)

const store = new Vuex.Store({
  modules: {
    contato
  }
})

export default store
