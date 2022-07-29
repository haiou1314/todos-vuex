export default {
  namespaced: true,
  state: {
    todosArr: [
      {
        name: '吃饭',
        done: false,
        id: 1,
      },
      {
        name: '睡觉',
        done: false,
        id: 2,
      },
      {
        name: '打豆豆',
        done: false,
        id: 3,
      },
    ],
  },
  mutations: {
    updateTodos1(state, payload) {
      state.todosArr.push(payload)
    },
    delTodos1(state, payload) {
      let index = state.todosArr.findIndex((item) =>  item.id === payload)
      state.todosArr.splice(index,1)
    },
  },
  getters: {},
  actions: {
    updateTodos2({ commit }, payload) {
      commit('updateTodos1', payload)
    },
    delTodos2({ commit }, id) {
      commit('delTodos1', id)
    },
  },
}
