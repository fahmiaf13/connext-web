<template>
  <router-view></router-view>
</template>

<script setup lang="ts">
import { useAuthStore } from "./store/useAuthStore";
import { onMounted } from "vue";

const store = useAuthStore();

onMounted(() => {
  store.init();
});
</script>
