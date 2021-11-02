import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router';
import Home from '../components/Home.vue';
import EpisodeRandomizer from '@/components/EpisodeRandomizer.vue';

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: 'Home',
    component: Home,
  },
  {
    path: '/show/:id',
    name: 'EpisodeRandomizer',
    component: EpisodeRandomizer,
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
