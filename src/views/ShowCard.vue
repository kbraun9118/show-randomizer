<template>
  <router-link :to="`/show/${show.id}`">
    <img :src="show.image.medium" alt="Not found"/>
  </router-link>
</template>

<script setup lang="ts">
import { defineProps } from 'vue';
import { Show } from '@/models/models';

const props = defineProps<{
  show: Show
}>();

console.log(props.show);
</script>

<style scoped>

</style>
