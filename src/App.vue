<template>
  <nav>
    <router-link to="/">Home</router-link> |
    <router-link to="/admin">Admin</router-link>
  </nav>
  <main>
    <AppLayout />
  </main>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import AppLayout from './layouts/AppLayout.vue'

export default defineComponent({
  name: 'App',
  components: {
    AppLayout,
  }
})
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
