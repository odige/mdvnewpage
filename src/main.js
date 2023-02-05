import { createApp } from "vue";
import App from "./App.vue";
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/js/bootstrap.min.js';
import { createRouter, createWebHashHistory } from "vue-router";

import hello from "@/components/HelloWorld.vue";

const routes = [
  {path: "/",name: "home",component: hello,
  },
];

const router = createRouter({
    history: createWebHashHistory(),
    routes
})

createApp(App).use(router).mount("#app");
