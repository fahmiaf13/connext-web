<script setup lang="ts">
import { ref, useSlots, shallowRef, onMounted } from "vue";
import type { Ref, ShallowRef } from "vue";
const tabs: ShallowRef<object[]> = shallowRef([]);
const currentTab = shallowRef();
const slots = useSlots();

onMounted(() => {
  if (slots !== null) {
    slots.default?.().map((child) => {
      tabs.value.push(child);
    });

    currentTab.value = tabs.value[0];
  }
});

const changeTab = (tab: object) => {
  currentTab.value = tab;
};
</script>
<template>
  <ul>
    <li v-for="(tab, index) in tabs" :key="index" @click="changeTab(tab)">
      {{ index + 1 }}
    </li>
  </ul>
  <component :is="currentTab"></component>
</template>
<style scoped>
ul {
  list-style: none;
  display: flex;
}

ul li {
  background: lightgrey;
  width: 20px;
  height: 20px;
  text-align: center;
  margin-right: 5px;
  cursor: pointer;
}
</style>
