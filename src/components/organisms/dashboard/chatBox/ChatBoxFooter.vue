<template>
  <div class="">
    <div class="flex items-center gap-x-3">
      <input type="text" placeholder="Type a message" class="input text-darker-100 focus:outline-none focus:border-tosca border-whiter-200 w-full" />
      <button class="btn bg-tosca text-whiter-100 hover:bg-darker-100 border-tosca"><v-icon name="ri-send-plane-fill"></v-icon></button>
    </div>
  </div>
</template>

<script setup lang="ts">
import Input from "../../../atom/input/Input.vue";
</script>

<style scoped></style>
