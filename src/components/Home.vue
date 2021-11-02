<template>
  <h3>Search Show: </h3>
  <form @submit.prevent="search">
    <input type="search" v-model="searchInput"/>
    <button type="submit">Search</button>
  </form>

  <div v-if="!loading" class="card-wrapper">
    <ShowCard v-for="show in shows" :key="show.show.id" :show="show.show" class="card"></ShowCard>
  </div>
  <Loading v-else></Loading>
</template>

<script setup lang="ts">
import { inject, Ref, ref } from 'vue';
import { TVMazeResponse } from '@/models/models';
import ShowCard from '@/views/ShowCard.vue';
import Loading from '@/views/Loading.vue';

const searchInput = ref('');
const shows = inject<Ref<TVMazeResponse[]>>('shows', ref([]));
const loading = ref(false);

const search = async () => {
  loading.value = true;
  const response = await fetch(`https://api.tvmaze.com/search/shows?q=${searchInput.value}`);
  shows.value = await response.json();
  loading.value = false;
};
</script>

<style scoped>
form * {
  margin: 0.25rem;
}

.card-wrapper {
  margin: 1rem 0.5rem;
}

.card {
  margin: .25rem;
}
</style>
