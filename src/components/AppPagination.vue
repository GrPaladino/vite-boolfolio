<script>
export default {
  data() {
    return {};
  },
  props: { pagination: Array },

  emit: ["change-page"],
};
</script>

<template>
  <div class="mt-3">
    <nav aria-label="Page navigation example">
      <ul class="pagination">
        <li
          @click="$emit('change-page', link.url)"
          v-for="link in pagination"
          :link="link.url"
          :class="{
            active: link.active,
            disabled: !link.url,
          }"
          class="page-item">
          <a class="page-link" href="#" v-html="link.label"></a>
        </li>
      </ul>
    </nav>
  </div>
</template>

<style lang="scss" scoped>
@use "../style/partials/mixins" as *;
@use "../style/partials/variables" as *;
</style>
