<template>
  <div class="h-full flex flex-col">
    <ChatBoxHeader />
    <div class="divider"></div>
    <ChatBoxContent />
    <ChatBoxFooter />
  </div>
</template>

<script setup lang="ts">
import ChatBoxContent from "./ChatBoxContent.vue";
import ChatBoxFooter from "./ChatBoxFooter.vue";
import ChatBoxHeader from "./ChatBoxHeader.vue";
</script>

<style scoped></style>
