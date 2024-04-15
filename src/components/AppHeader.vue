<script>
// import { store } from "../store";
export default {
  data() {
    return {
      // store,
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
      <ul class="p-0">
        <li>
          <a class="navbar-brand" href="#">
            {{ title }}
          </a>
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
