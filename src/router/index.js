import { createRouter, createWebHistory } from "vue-router";
import Inicio from "@/modules/Inicio/router/index.js";
import Tabla from "@/modules/Tabla/router/index.js";
import Login from "@/modules/Login/router/index.js";
import MainLayout from "@/layouts/DashboardLayout.vue";
// import ModuloB from '../modules/TablaGeneral/router/index.js'
const routes = [
  {
    path: "/dash",
    component: MainLayout,
    children: [
      {
        ...Inicio
      },
      {
        ...Tabla
      }
    ],
  },
  {
    path: "/",
    name: "home",
    ...Login,
  },
  {
    path: "/:catchAll(.*)*",
    component: () => import("../views/ErrorNotFound.vue"),
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
