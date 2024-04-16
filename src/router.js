import { createRouter, createWebHistory } from "vue-router";

import HomePage from "./pages/HomePage.vue";
import ProjectListPage from "./pages/ProjectListPage.vue";
import ProjectPage from "./pages/ProjectPage.vue";

const router = createRouter({
  linkActiveClass: "active",
  linkExactActiveClass: "active",
  history: createWebHistory(),
  routes: [
    {
      path: "/",
      name: "home",
      component: HomePage,
    },
    {
      path: "/blog",
      name: "project.index",
      component: ProjectListPage,
    },
    {
      path: "/blog/:slug",
      name: "project.show",
      component: ProjectPage,
    },
  ],
});

export { router };
