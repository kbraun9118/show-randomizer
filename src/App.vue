<template>
  <div class="wrapper">
    <router-link to="/" class="router"><h2>Show Randomizer</h2></router-link>
    <router-view/>
  </div>
</template>

<script setup lang="ts">

import { provide, ref } from 'vue';
import { TVMazeResponse } from '@/models/models';

provide('shows', ref<TVMazeResponse[]>([]));
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
</style>
<style scoped>
@media (min-width: 1200px) {
  .wrapper {
    width: 1200px;
    margin: auto;
  }
}

.router {
  color: inherit;
  text-decoration: unset;
}
</style>
