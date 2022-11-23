<template>
  <Tab>
    <template #tabOne>
      <input type="text" placeholder="Search..." class="input text-darker-100 focus:outline-none focus:border-tosca border-whiter-200 w-full" />
      <div class="h-full overflow-y-auto">
        <ChatList name="tstsdad sdawdadaw" msg="test" alert="2" time="01:40" />
        <ChatList name="sdawdadaw" msg="testing" alert="5" time="11:55" />
        <ChatList name="sdawdadaw" msg="testing" alert="5" time="11:55" />
        <ChatList name="sdawdadaw" msg="testing" alert="5" time="11:55" />
        <ChatList name="sdawdadaw" msg="testing" alert="5" time="11:55" />
        <ChatList name="sdawdadaw" msg="testing" alert="5" time="11:55" />
        <ChatList name="sdawdadaw" msg="testing" alert="5" time="11:55" />
        <ChatList name="sdawdadaw" msg="testing" alert="5" time="11:55" />
      </div>
    </template>
    <template #tabTwo>
      <ContactList />
    </template>
  </Tab>
</template>

<script setup lang="ts">
import Tab from "../../../molecules/tab/Tab.vue";
import ChatList from "./ChatList.vue";
import ContactList from "./ContactList.vue";
</script>

<style scoped>
.router-link-exact-active.menuItem-active-link {
  border-bottom: 2px solid white;
  background-color: rgb(186, 185, 185);
  width: 100%;
  color: black;
}
</style>
