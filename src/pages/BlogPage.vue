<script>
import { parse } from "vue/compiler-sfc";
import ProjectListPage from "../components/ProjectListPage.vue";
export default {
  components: { ProjectListPage },
};
</script>

<template>
  <project-list-page :type_id="type_id" />
</template>

<style lang="scss" scoped></style>
