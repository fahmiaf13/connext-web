<template>
  <div class="bg-whiter-100 w-3/4 md:1/2 lg:w-1/3 p-5 rounded-xl">
    <form @submit.prevent="handleSubmit">
      <div class="text-darker-100 font-extrabold text-3xl text-center mb-5">LOGIN</div>
      <div class="flex flex-col gap-y-5">
        <Input label="Email" v-model="store.email" />
        <Input label="Password" v-model="store.password" type="password" />
      </div>
      <button class="btn bg-darker-100 hover:bg-transparent hover:text-darker-100 hover:border-darker-100 text-whiter-100 mt-5 w-full font-extrabold">SUBMIT</button>
    </form>
    <div class="text-center my-3 text-sm text-darker-100">Or Login With</div>

    <div class="md:flex gap-3 flex-1 w-full">
      <div class="w-full">
        <button @click="handleGoogleSubmit" class="btn bg-[#4285F4] md:w-full border-[#4285F4] text-whiter-100 w-full font-extrabold hover:text-darker-100 hover:bg-transparent flex gap-1">
          <v-icon name="bi-google"></v-icon>
          <span>GOOGLE</span>
        </button>
      </div>
      <div class="w-full my-3 md:my-0">
        <button class="btn bg-[#4267B2] border-[#4267B2] md:w-full hover:bg-transparent text-whiter-100 w-full font-extrabold hover:text-darker-100 flex gap-1">
          <v-icon name="bi-facebook"></v-icon>
          <div>FACEBOOK</div>
        </button>
      </div>
    </div>
    <div class="text-slate-800 text-sm text-center mt-5">
      Don't have an account ? <router-link to="/register"><span class="text-tosca">Register</span> </router-link>
    </div>
  </div>
</template>

<script setup lang="ts">
import Input from "../../atom/Input/Input.vue";
import { useAuthStore } from "../../../store/useAuthStore";

const store = useAuthStore();
console.log(store.user);

const handleSubmit = () => {
  store.signIn();
};

const handleGoogleSubmit = () => {
  console.log("clicked");
  store.googleSignIn();
};
</script>

<style scoped>
.btn-gradient {
  background-image: linear-gradient(to right top, #d16ba5, #c777b9, #ba83ca, #aa8fd8, #9a9ae1, #8aa7ec, #79b3f4, #69bff8, #52cffe, #41dfff, #46eefa, #5ffbf1);
}
</style>
