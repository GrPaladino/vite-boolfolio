<script>
// Import components
import AppHeader from "./components/AppHeader.vue";
import AppFooter from "./components/AppFooter.vue";
import { RouterView } from "vue-router";

export default {
  data() {
    return {
      title: "Boolfolio frontend",
    };
  },

  components: {
    AppHeader,
    RouterView,
    AppFooter,
  },
};
</script>

<template>
  <app-header :title="title" />
  <div class="container">
    <router-view />
  </div>
  <app-footer />
</template>

<style lang="scss">
@use "./style/general.scss";
</style>
