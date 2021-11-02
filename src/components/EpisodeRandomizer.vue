<template>
  <div v-if="isLoading">
    <h3>{{ show?.name }}</h3>
    <p v-html="show?.summary"></p>
    <button @click="randomize">Randomize</button>
    <div v-if="result">
      <p>Random Episode is:</p>
      <p><b>{{ result?.name }}</b></p>
      <p>Season: {{ result?.season }}</p>
      <p>Episode: {{ result?.number }}</p>
    </div>
  </div>
  <div v-else>
    <Loading></Loading>
  </div>
</template>

<script setup lang="ts">
import { useRoute } from 'vue-router';
import {
  computed,
  inject,
  onMounted,
  Ref,
  ref,
} from 'vue';
import { Episode, Show, TVMazeResponse } from '@/models/models';
import Loading from '@/views/Loading.vue';

const route = useRoute();

const show = ref<Show>();
const episodes = ref<Episode[]>([]);
const result = ref<Episode>();
const shows = inject<Ref<TVMazeResponse[]>>('shows', ref([]));

onMounted(async () => {
  if (shows.value.length > 0) {
    [show.value] = shows.value
      .map((value) => value.show)
      .filter((inner) => inner.id === +route.params.id);
  } else {
    const response = await fetch(`https://api.tvmaze.com/shows/${route.params.id}`);
    show.value = await response.json();
  }
});
onMounted(async () => {
  const response = await fetch(`https://api.tvmaze.com/shows/${route.params.id}/episodes`);
  episodes.value = await response.json();
});

const randomize = () => {
  const randomIndex = Math.floor(Math.random() * episodes.value.length);
  result.value = episodes.value[randomIndex];
};

const isLoading = computed(() => !!show.value && episodes.value.length !== 0);
</script>

<style scoped>

</style>
