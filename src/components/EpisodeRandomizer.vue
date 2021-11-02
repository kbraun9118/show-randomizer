<template>
  <div v-if="show">
    <h3>{{show?.name}}</h3>
    <button @click="randomize">Randomize</button>
    <div v-if="result">
      <p>Random Episode is:</p>
      <p>Season {{result?.season}}</p>
      <p>Episode {{result?.number}}</p>
    </div>
  </div>
  <div v-else>
    LOADING...
  </div>
</template>

<script setup lang="ts">
import { useRoute } from 'vue-router';
import { onMounted, ref } from 'vue';
import { Episode, Show } from '@/models/models';

const route = useRoute();

const show = ref<Show | null>(null);
const episodes = ref<Episode[]>([]);
const result = ref<Episode | null>(null);

onMounted(async () => {
  const response = await fetch(`https://api.tvmaze.com/shows/${route.params.id}`);
  show.value = await response.json();
});
onMounted(async () => {
  const response = await fetch(`https://api.tvmaze.com/shows/${route.params.id}/episodes`);
  episodes.value = await response.json();
});

const randomize = () => {
  const randomIndex = Math.floor(Math.random() * episodes.value.length);
  result.value = episodes.value[randomIndex];
};
</script>

<style scoped>

</style>
