<script>
import { store, api } from "../store";

export default {
  data() {
    return {
      store,
    };
  },

  props: {
    project: Object,
    isDefined: Boolean,
  },
};
</script>

<template>
  <div v-if="!isDefined" class="col">
    <div class="card h-100">
      <div class="img-wrapper">
        <img
          :src="project.image ? project.image : 'https://picsum.photos/200/300'"
          class="card-img-top"
          alt="..." />
      </div>

      <div class="card-body">
        <span
          class="badge mb-3"
          :style="'background-color: ' + project.type.color"
          >{{ project.type.label }}</span
        >

        <h5 class="card-title">{{ project.title }}</h5>
        <p class="card-text">{{ project.description }}</p>
        <router-link
          :to="{ name: 'project.show', params: { id: project.id } }"
          class="btn btn-primary"
          >Dettagli</router-link
        >
      </div>

      <div class="card-footer">
        <span
          v-for="technology in project.technologies"
          class="badge mb-3"
          :style="'background-color: ' + technology.color"
          >{{ technology.label }}</span
        >
      </div>
    </div>
  </div>

  <div v-if="isDefined">
    <h1 class="card-title mt-3">{{ project.title }}</h1>

    <div class="d-flex mt-5">
      <div class="img me-5">
        <img
          :src="project.image ? project.image : 'https://picsum.photos/200/300'"
          alt=""
          id="img" />
      </div>
      <div class="card-body d-flex flex-column justify-content-between">
        <div class="description">
          <p class="card-text">{{ project.description }}</p>
          <p>
            <strong>Tipologia: </strong>
            <span
              class="badge mt-3"
              :style="'background-color: ' + project.type.color"
              >{{ project.type.label }}</span
            >
          </p>
          <p>
            <strong>Tecnologie utilizzate: </strong>

            <span
              v-for="tech in project.technologies"
              class="badge mt-3 me-2"
              :style="'background-color: ' + tech.color"
              >{{ tech.label }}</span
            >
          </p>
          <div class="links text-start mt-4">
            <a :href="project.github_url"
              ><i class="fa-brands fa-github link-dark fa-2xl"></i
            ></a>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
@use "../style/partials/mixins" as *;
@use "../style/partials/variables" as *;

.card {
  height: 700px;
  .img-wrapper {
    height: 300px;
    img {
      width: 100%;
      height: 100%;
      object-fit: cover;
    }
  }
}
.img {
  width: 300px;
  height: 400px;
  object-fit: cover;
  #img {
    display: block;
    width: 100%;
  }
}
</style>
