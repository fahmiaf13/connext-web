import { createApp } from "vue";
import { createPinia } from "pinia";
import "./style.css";
import App from "./App.vue";
import router from "./router";
import { OhVueIcon, addIcons } from "oh-vue-icons";
import { RiSendPlaneFill, MdNotificationsOutlined, BiGoogle, BiFacebook } from "oh-vue-icons/icons";
import piniaPluginPersistedstate from "pinia-plugin-persistedstate";

const pinia = createPinia();
pinia.use(piniaPluginPersistedstate);
// icon
addIcons(RiSendPlaneFill, MdNotificationsOutlined, BiFacebook, BiGoogle);

const app = createApp(App);
app.use(pinia);
app.use(router);
app.component("v-icon", OhVueIcon);

app.mount("#app");
