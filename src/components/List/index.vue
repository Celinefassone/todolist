<script setup>
import { mapState } from 'vuex'
import Task from '@/components/List/Task'
</script>

<template>
  <ul class="list">
    <li class="list--addtask">
      <button type="button" class="list--addtask-button" @click="handleOpenAdd">
        Add Task
      </button>
    </li>

    <li v-show="adding">
      <form @submit.prevent="handleSubmit">
        <button type="button" @click="adding = false">
          Cancel
        </button>
      
        <input ref="todo-input" v-model="inputValue" type="text" placeholder="title" />

        <button type="submit">
          Add TODO
        </button>
      </form>
    </li>

    <Task v-for="(todo, index) in todos" :key="index" :todo="todo" />
  </ul>
</template>

<script>
export default {
  data() {
    return {
      inputValue: '',
      adding: false
    }
  },
  created() {
    this.$store.dispatch('todos/FETCH')
  },
  computed: mapState({
    todos: (state) => state.todos.list
  }),
  methods: {
    handleOpenAdd() {
      this.adding = true
      this.$nextTick(() => {
        this.$refs['todo-input'].focus()
      })
    },
    async handleSubmit() {
      await this.$store.dispatch('todos/ADD', this.inputValue)

      this.inputValue = ''
      this.adding = false
    }
  }
}
</script>

<style lang="scss" scoped>
@use './styles.scss';
</style>