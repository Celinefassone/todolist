<script setup>
import Button from '@/components/Button'
import { Trash, Edit } from '@/components/Icons'
</script>

<template>
  <li class="task">
    <input type="checkbox" class="task-checkbox" />

    <label for="task-checkbox" class="task-box">
      <p class="task-text">Task 1</p>
      <div class="task-buttonbox">
        <Button><Edit /></Button>
        <Button><Trash /></Button>
      </div>
    </label>
  </li>
</template>

<style lang="scss" scoped>
@use './styles.scss';
</style>
