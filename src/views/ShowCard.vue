<template>
  <router-link :to="`/show/${props?.show?.id}`">
    <img :src="props?.show?.image?.medium" alt="Not found"/>
    <p>{{show.name}}</p>
  </router-link>
</template>

<script setup lang="ts">
import { defineProps } from 'vue';
import { Show } from '@/models/models';

const props = defineProps<{
  show: Show
}>();

</script>

<style scoped>
a {
  display: inline-block;
  width: 210px;
  text-decoration: unset;
  color: inherit;
}

p {
  margin-top: 0.25rem;
}
</style>
