import Vue from 'vue'
import Router from 'vue-router'
import Dashboard from '@/components/Dashboard'
import Contato from '@/components/Contato'
import Configuracao from '@/components/Configuracao'
import Atividade from '@/components/Atividades'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Dashboard',
      component: Dashboard
    },
    {
      path: '/contato',
      name: 'Contato',
      component: Contato
    },
    {
      path: '/settings',
      name: 'Config',
      component: Configuracao
    },
    {
      path: '/atividades',
      name: 'Atividade',
      component: Atividade
    }
  ]
})
