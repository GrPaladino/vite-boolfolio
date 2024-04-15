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
    const projectId = this.$route.params.id;
    axios.get(api.baseUrl + `projects/${projectId}`).then((response) => {
      this.project = response.data;
    });
  },
};
</script>

<template>
  <app-project-card :project="project" :isDefined="true" />
</template>

<script lang="scss" scoped></script>
