<script setup lang="ts">
import { ref } from "vue";

defineProps({
  label: String,
  modelValue: String,
  type: String,
});

const handleInputChange = (event: Event) => {
  return (event.target as HTMLInputElement).value;
};

defineEmits(["update:modelValue"]);
</script>
<template>
  <div class="w-full text-slate-800">
    <div class="relative w-full min-w-[200px] h-10">
      <input
        class="text-slate-800 peer w-full h-full bg-transparent font-sans font-normal outline outline-0 focus:outline-0 disabled:bg-blue-gray-50 disabled:border-0 transition-all placeholder-shown:border placeholder-shown:border-blue-gray-200 placeholder-shown:border-t-blue-gray-200 border focus:border-2 border-t-transparent focus:border-t-transparent text-sm px-3 py-2.5 rounded-[7px] border-blue-gray-200 focus:border-red"
        :type="type || 'text'"
        placeholder=""
        required
        autocomplete="on"
        :name="label"
        :value="modelValue"
        @input="$emit('update:modelValue', handleInputChange($event))"
      />
      <label
        class="capitalize flex w-full h-full select-none pointer-events-none absolute left-0 font-normal peer-placeholder-shown:text-slate-500 leading-tight peer-focus:leading-tight peer-disabled:text-transparent peer-disabled:peer-placeholder-shown:text-blue-gray-500 transition-all -top-1.5 peer-placeholder-shown:text-sm text-[11px] peer-focus:text-[11px] before:content[' '] before:block before:box-border before:w-2.5 before:h-1.5 before:mt-[6.5px] before:mr-1 peer-placeholder-shown:before:border-transparent before:rounded-tl-md before:border-t peer-focus:before:border-t-2 before:border-l peer-focus:before:border-l-2 before:pointer-events-none before:transition-all peer-disabled:before:border-transparent after:content[' '] after:block after:flex-grow after:box-border after:w-2.5 after:h-1.5 after:mt-[6.5px] after:ml-1 peer-placeholder-shown:after:border-transparent after:rounded-tr-md after:border-t peer-focus:after:border-t-2 after:border-r peer-focus:after:border-r-2 after:pointer-events-none after:transition-all peer-disabled:after:border-transparent peer-placeholder-shown:leading-[3.75] text-blue-gray-400 peer-focus:text-red before:border-blue-gray-200 peer-focus:before:border-red after:border-blue-gray-200 peer-focus:after:border-red"
      >
        {{ label }}
      </label>
    </div>
  </div>
</template>
