<script>
import AppProjectList from './AppProjectList.vue';

// import { store } from "../store";

export default {
  data() {
    return {
      // store,
    };
  },

  components: { AppProjectList },

  methods: {
  },
};
</script>

<template>
  <app-project-list />
  
 
</template>

<style lang="scss" scoped>
@use "../style/partials/mixins" as *;
@use "../style/partials/variables" as *;

</style>
