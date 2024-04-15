import { createRouter, createWebHistory } from "vue-router";

import HomePage from "./pages/HomePage.vue";
import ProjectListPage from "./pages/ProjectListPage.vue";
import ProjectPage from "./pages/ProjectPage.vue";

const router = createRouter({
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
      path: "/blog/:id",
      name: "project.show",
      component: ProjectPage,
    },
  ],
});

export { router };
