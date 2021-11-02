<template>
  <h3>Search Show: </h3>
  <form @submit.prevent="search">
    <input type="search" v-model="searchInput"/>
    <button type="submit">Search</button>
  </form>

  <div v-for="show in shows" :key="show.show.id">
    <ShowCard :show="show.show"></ShowCard>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import { TVMazeResponse } from '@/models/models';
import ShowCard from '@/views/ShowCard.vue';

const searchInput = ref('');
const shows = ref<TVMazeResponse[]>([]);

const search = async () => {
  const response = await fetch(`https://api.tvmaze.com/search/shows?q=${searchInput.value}`);
  shows.value = await response.json();
};
</script>
