<script>
export default {
  data() {
    return {
      title: "404  |  Not Found",
    };
  },
};
</script>

<template>
  <div>
    <h2 class="fs-1 py-5">{{ title }}</h2>
  </div>
</template>

<style lang="scss" scoped>
@use "../style/partials/mixins" as *;

div {
  background-color: #1a202c;
  color: white;
  text-align: center;
}
</style>
