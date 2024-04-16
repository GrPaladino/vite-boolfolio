import { createRouter, createWebHistory } from "vue-router";

import HomePage from "./pages/HomePage.vue";
import ProjectListPage from "./components/ProjectListPage.vue";
import ProjectPage from "./pages/ProjectPage.vue";
import NotFoundPage from "./pages/NotFoundPage.vue";
import BlogPage from "./pages/BlogPage.vue";

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
      component: BlogPage,
    },
    {
      path: "/blog/:slug",
      name: "project.show",
      component: ProjectPage,
    },
    {
      path: "/type/:type_id",
      name: "project.filter-by-type",
      component: ProjectListPage,
    },
    {
      path: "/:pathMatch(.*)*",
      name: "not-found",
      component: NotFoundPage,
    },
  ],
});

export { router };
