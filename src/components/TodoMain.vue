<template>
  <ul class="todo-list">
    <!-- completed: 完成的类名 -->
    <li class="completed" v-for="item in todosArr" :key="item.id">
      <div class="view">
        <input class="toggle" type="checkbox" :checked="item.done"/>
        <label>任务名:{{item.name}}</label>
        <button class="destroy" @click="delTodos(item.id)"></button>
      </div>
    </li>
  </ul>
  
</template>

<script>
import { mapGetters,mapActions } from 'vuex'
export default {
  computed:{
...mapGetters(['todosArr'])
  },
  methods: {
    ...mapActions(['main/delTodos2']),
    delTodos(id){
      this['main/delTodos2'](id)
    }
  },
}
</script>
