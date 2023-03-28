<script setup>
import Header from '@/components/Header'
import List from '@/components/List'
</script>

<template>
  <main role="main" class="home-page">
    <div class="home-page--container">
      <Header />

      <section class="home-page--content">
          <List />
      </section>
    </div>
  </main>
</template>

<style lang="scss" scoped>
@use './styles.scss';
</style>