<template>
  <div class="flex items-center gap-x-2 border-b-2 py-5">
    <label tabindex="0" class="btn btn-ghost btn-circle avatar">
      <div class="w-10 rounded-full">
        <img src="https://placeimg.com/80/80/people" />
      </div>
    </label>
    <div class="flex justify-between w-full">
      <div class="flex flex-col">
        <div class="font-bold text-darker-100">{{ name }}</div>
        <div class="text-darker-100">{{ msg }}</div>
      </div>
      <div class="flex flex-col items-end">
        <div class="font-bold text-sm text-darker-100">{{ time }}</div>
        <div class="bg-tosca py-1 px-3 text-sm rounded-full text-slate-50">{{ alert }}</div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
const props = defineProps({
  name: String,
  msg: String,
  alert: String,
  time: String,
});
</script>
