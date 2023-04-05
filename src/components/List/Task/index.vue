<script setup>
import Button from '@/components/Button'
import { Trash, Edit } from '@/components/Icons'
</script>

<template>
  <li :class="`task ${todo.className || 'color-default'}`">
    <input type="checkbox" class="task-checkbox" />
    <label for="task-checkbox" class="task-box">
      <p class="task-text">{{ todo.title }}</p>
      <div class="task-buttonbox">
        <Button><Edit /></Button>
        <Button @click="handleDelete"><Trash /></Button>
      </div>
    </label>
  </li>
</template>

<script>
export default {
  props:['todo'],
  methods: {
    async handleDelete() {
      await this.$store.dispatch('todos/DELETE', this.todo._id)
      this.$store.dispatch('todos/FETCH')
    }
  }
}
</script>

<style lang="scss" scoped>
@use './styles.scss';
</style>
