<script>
import { store, api } from "../store";
import axios from "axios";
import AppProjectCard from "./AppProjectCard.vue";
import AppPagination from "./AppPagination.vue";

export default {
  data() {
    return {
      store,
      pagination: [],
    };
  },

  components: { AppProjectCard, AppPagination },

  methods: {
    fetchProjects(endpoint = api.baseUrl + "projects") {
      axios.get(endpoint).then((response) => {
        store.projects = response.data.data;
        this.pagination = response.data.links;
      });
    },
  },

  created() {
    this.fetchProjects();
  },
};
</script>

<template>
  <div class="container">
    <h1>I miei progetti</h1>
    <div class="row row-cols-4 g-3">
      <app-project-card v-for="project in store.projects" :project="project" />
    </div>

    <app-pagination @change-page="fetchProjects" :pagination="pagination" />
  </div>
</template>

<style lang="scss" scoped>
@use "../style/partials/mixins" as *;
@use "../style/partials/variables" as *;
</style>
