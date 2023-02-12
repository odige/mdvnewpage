import { createApp } from "vue";
import App from "./App.vue";
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap/dist/js/bootstrap.min.js";
import { createRouter, createWebHashHistory } from "vue-router";

// 在此添加路由页面
import home from "@/components/PropaGanda.vue";
import personal from "@/components/PerSonal.vue";
import order from "@/components/OrDer.vue";
import inregral from "@/components/InteGral.vue";
import gift from "@/components/GiFt.vue";
import delivergoods from "@/components/DeliverGoods.vue";
import coin from "@/components/CoIn.vue";

// 在此添加路由
const routes = [
  { path: "/", component: home },
  { path: "/personal", component: personal },
  { path: "/order", component: order },
  { path: "/inregral", component: inregral },
  { path: "/gift", component: gift },
  { path: "/delivergoods", component: delivergoods },
  { path: "/coin", component: coin },
];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

createApp(App).use(router).mount("#app");
