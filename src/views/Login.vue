<template>
  <Template>
    <template #content>
      <div class="h-screen flex justify-center items-center">
        <FormLogin />
      </div>
    </template>
  </Template>
</template>

<script setup lang="ts">
import FormLogin from "../components/molecules/Form/FormLogin.vue";
import Template from "../components/templates/Template.vue";
</script>
