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
      if (response.data.success) {
        this.project = response.data.result;
      } else {
        this.$router.push({ name: "not-found" });
      }
    });
  },
};
</script>

<template>
  <app-project-card v-if="project" :project="project" :isDefined="true" />
</template>

<script lang="scss" scoped></script>
