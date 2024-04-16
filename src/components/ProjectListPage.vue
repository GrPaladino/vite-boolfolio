<script>
import { store, api } from "../store";
import axios from "axios";
import AppProjectCard from "../components/AppProjectCard.vue";
import AppPagination from "../components/AppPagination.vue";

export default {
  data() {
    return {
      store,
      pagination: [],
      type: null,
    };
  },
  // props: { type_id: [Number, Boolean] },

  components: { AppProjectCard, AppPagination },

  computed: {
    type_id() {
      return this.$route.params.type_id
        ? parseInt(this.$route.params.type_id)
        : false;
    },

    projectEndpoint() {
      if (this.type_id) {
        return api.baseUrl + "project-by-type/ " + this.type_id;
      } else {
        return api.baseUrl + "projects";
      }
    },
  },

  methods: {
    fetchProjects(endpoint = this.projectEndpoint) {
      axios.get(endpoint).then((response) => {
        if (!response.data.success) {
          return this.$router.push({ name: "not-found" });
        }
        store.projects = response.data.result.data;
        this.pagination = response.data.result.links;
        this.type = response.data.type;
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
    <h1 v-if="type" class="my-3">
      {{ type_id ? "Tipologia " + type.label : "Blog" }}
    </h1>
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
