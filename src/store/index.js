import Vue from 'vue'
import Vuex from 'vuex'
import main from './module/main.js'
import title from './module/title.js'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {},
  getters: {
    todosArr: (state) => state.main.todosArr,
    title: (state) => state.title.title,
  },
  mutations: {},
  actions: {
    
  },
  modules: {
    main,
    title,
  },
})
