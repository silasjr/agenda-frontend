import * as Service from './services'
import to from 'await-to-js'
export default {
  state: {
    filtro: null,
    contatos: []
  },

  getters: {
    filtro: state => state.filtro,
    contatos: state => state.contatos
  },

  mutations: {
    setContatos (state, payload) {
      state.contatos = payload
    }
  },

  actions: {
    setContatos ({ commit }, payload) {
      commit('setContatos', payload)
    },
    async findAllContatos ({getters, dispatch}, filtro) {
      const [error, response = {
        data: null
      }] = await to(Service.listAllContatos(filtro))

      if (error) {
        console.log(error)
      }

      dispatch('setContatos', response.data)
      return response.data
    },
    async deleteContato ({getters, dispatch}, contato) {
      const [error, response = { data: null }] = await to(Service.deleteContato(contato._id))

      if (error) {
        console.log(error)
      }
      dispatch('findAllContatos')
      return response.data
    },

    async saveContato ({ dispatch }, contato) {
      let persist = contato._id ? Service.updateContato : Service.saveContato

      const [error, response = { data: null }] = await to(persist(contato))

      if (error) {
        console.log(error)
      }

      dispatch('findAllContatos')
      return response.data
    }
  }
}
