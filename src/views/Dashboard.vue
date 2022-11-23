<template>
  <Template>
    <template #content>
      <div class="h-screen container mx-auto">
        <div class="flex gap-x-5">
          <div class="w-4/12 hidden md:block h-screen py-[4rem]">
            <div class="h-full bg-slate-50 rounded-xl p-3">
              <UserBox />
            </div>
          </div>
          <div class="w-full md:w-8/12 h-screen py-[4rem]">
            <div class="h-full bg-slate-50 rounded-xl p-5">
              <ChatBox />
            </div>
          </div>
        </div>
      </div>
    </template>
  </Template>
</template>

<script setup lang="ts">
import Template from "../components/templates/Template.vue";
import ChatBox from "../components/organisms/dashboard/chatBox/index.vue";
import UserBox from "../components/organisms/dashboard/userBox/index.vue";
</script>

<style scoped></style>
