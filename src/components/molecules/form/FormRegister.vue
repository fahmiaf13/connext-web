<template>
  <form @submit.prevent="handleSubmit" class="bg-slate-50 w-3/4 md:1/2 lg:w-1/3 p-5 rounded-xl">
    <div class="text-slate-800 font-extrabold text-3xl text-center mb-5">REGISTER</div>
    <div class="flex flex-col gap-y-5">
      <Input label="Email" v-model="store.email" />
      <Input label="Password" v-model="store.password" type="password" />
    </div>
    <button class="btn mt-5 w-full text-whiter-100 bg-darker-100 hover:bg-transparent hover:border-darker-100 hover:text-darker-100 font-extrabold">SUBMIT</button>
    <div class="text-slate-800 text-sm text-center mt-5">
      Currently have an account ? <router-link to="/login"><span class="text-tosca">Login</span> </router-link>
    </div>
  </form>
</template>

<script setup lang="ts">
import Input from "../../components/atom/Input.vue";
import { useAuthStore } from "../../../store/useAuthStore";

const store = useAuthStore();

const handleSubmit = async () => {
  store.signUp();
};
</script>

<style scoped></style>
