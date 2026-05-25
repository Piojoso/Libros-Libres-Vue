import { HomeRoutes } from "@/modules/home/routes";
import { createRouter, createWebHistory } from "vue-router";

export const router = createRouter({
  history: createWebHistory(),
  routes: [
    HomeRoutes,
  ],
})