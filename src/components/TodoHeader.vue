<template>
  <header class="header">
    <h1 :style="{color:color}">todos</h1>
    <input id="toggle-all" class="toggle-all" type="checkbox" />
    <label for="toggle-all"></label>
    <input
      v-model.trim="content"
      class="new-todo"
      placeholder="输入任务名称-回车确认"
      autofocus
      @keydown.enter="addTodos"
    />
  </header>
</template>

<script>
import { mapActions ,mapGetters} from 'vuex'
export default {
  props:{
    color:{
      type:String
    }
  },
  computed:{
...mapGetters(['todosArr'])
  },
  data() {
    return {
      content:''
    }
  },
  methods: {
   ...mapActions(['main/updateTodos2']),
   addTodos(){
    if(this.content.length <= 0 ){
      alert('输入不能为空')
      return
    }
    let isTrue = this.todosArr.some((item)=>item.name == this.content)
    if(isTrue){
      alert('内容不能重复')
      return
    }
    const obj ={
      name: this.content,
      done: false,
      id:this.$store.state.main.todosArr.length + 1,
    }
    this['main/updateTodos2'](obj)
    this.content = ''
   }
  },
}
</script>
