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
      <div class="img me-5" style="width: 18rem">
        <img :src="project.image" alt="" />
      </div>
      <div class="card-body d-flex flex-column justify-content-between">
        <div class="description">
          <p class="card-text">{{ project.description }}</p>
          <p>
            <strong>Tipologia: </strong
            >{{ project.type ? project.type : "Nessuna tipologia" }}
          </p>
          <p>
            <strong>Tecnologie utilizzate: </strong>

            <!-- <span v-for="project.technologies"></span>($project->technologies as $technology) {!! $technology ?
            $technology->getBadge() : 'Nessuna tecnologia' !!}  -->
          </p>
        </div>
        <div class="links text-start">
          <a :href="project.github_url" class="mb-3"
            ><i class="fa-brands fa-github link-dark fa-2xl me-3"></i
          ></a>
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
</style>
