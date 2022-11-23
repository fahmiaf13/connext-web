<template>
  <div class="flex flex-wrap">
    <div class="w-full">
      <ul class="flex mb-0 list-none flex-wrap pt-3 pb-4 flex-row">
        <li class="-mb-px mr-2 last:mr-0 flex-auto text-center">
          <a class="text-xs font-bold uppercase px-5 py-3 shadow-lg rounded block leading-normal" v-on:click="toggleTabs(1)" v-bind:class="{ 'text-darker-100 bg-white': openTab !== 1, 'text-white bg-tosca': openTab === 1 }"> Chat </a>
        </li>
        <li class="-mb-px mr-2 last:mr-0 flex-auto text-center">
          <a class="text-xs font-bold uppercase px-5 py-3 shadow-lg rounded block leading-normal" v-on:click="toggleTabs(2)" v-bind:class="{ 'text-darker-100 bg-white': openTab !== 2, 'text-white bg-tosca': openTab === 2 }"> Contact </a>
        </li>
      </ul>
      <div class="relative flex flex-col min-w-0 break-words bg-whiter-100 w-full mb-6 shadow-lg rounded">
        <div class="px-4 py-5 flex-auto">
          <div class="tab-content tab-space h-[500px] pl-1 pr-5 box-content overflow-y-auto">
            <div v-bind:class="{ hidden: openTab !== 1, block: openTab === 1 }">
              <slot name="tabOne"></slot>
            </div>
            <div v-bind:class="{ hidden: openTab !== 2, block: openTab === 2 }">
              <slot name="tabTwo"></slot>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
export default {
  name: "pink-tabs",
  data() {
    return {
      openTab: 1,
    };
  },
  methods: {
    toggleTabs: function (tabNumber: any) {
      this.openTab = tabNumber;
    },
  },
};
</script>
