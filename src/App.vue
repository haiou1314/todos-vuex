<template>
  <div>
    <button @click="titleBgc">换肤</button>
    <div class="todoapp">
      <todo-header :color='color'></todo-header>
      <todo-main></todo-main>
      <todo-footer></todo-footer>
    </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
import TodoFooter from './components/TodoFooter.vue' // shift + alt + 下
import TodoHeader from './components/TodoHeader.vue' // shift + alt + 下
import TodoMain from './components/TodoMain.vue' // shift + alt + 下
export default {
  data() {
    return {
      color:'red'
    }
  },

  components: {
    TodoFooter,
    TodoHeader,
    TodoMain,
  },
  computed:{
...mapGetters(['title'])
  },

  created() {},

  methods: {
    titleBgc(){
    this.color = this.title[Math.floor(Math.random()*4)]
    }
  },
}
</script>

<style scoped></style>
