<script>
import axios from "axios";
import { api, store } from "../store";
import AppProjectCard from "../components/AppProjectCard.vue";

export default {
  data() {
    return {
      store,

      project: null,
    };
  },

  components: { AppProjectCard },
  created() {
    const projectSlug = this.$route.params.slug;
    axios.get(api.baseUrl + `projects/${projectSlug}`).then((response) => {
      this.project = response.data;
    });
  },
};
</script>

<template>
  <app-project-card v-if="project" :project="project" :isDefined="true" />
</template>

<script lang="scss" scoped></script>
