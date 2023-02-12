import { createApp } from "vue";
import App from "./App.vue";
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap/dist/js/bootstrap.min.js";
import { createRouter, createWebHashHistory } from "vue-router";


// 在此添加路由页面
import hello from "@/components/HelloWorld.vue";

// 在此添加路由
const routes = [{ path: "/", component: hello }];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

createApp(App).use(router).mount("#app");
