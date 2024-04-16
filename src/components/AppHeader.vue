<script>
import { RouterLink } from "vue-router";

export default {
  data() {
    return {
      title: "Boolfolio",
    };
  },
  props: {
    title: String,
  },

  methods: {},
};
</script>

<template>
  <nav class="navbar bg-body-tertiary">
    <div class="container">
      <ul class="p-0 d-flex">
        <li class="nav-item">
          <router-link :to="{ name: 'home' }" class="navbar-brand">
            {{ title }}
          </router-link>
        </li>

        <li>
          <router-link :to="{ name: 'home' }" class="navbar-brand">
            Home
          </router-link>
        </li>

        <li>
          <router-link :to="{ name: 'project.index' }" class="navbar-brand">
            Blog
          </router-link>
        </li>
      </ul>
    </div>
  </nav>
</template>

<style lang="scss" scoped>
@use "../style/partials/mixins" as *;
@use "../style/partials/variables" as *;

ul {
  list-style: none;
}
</style>
