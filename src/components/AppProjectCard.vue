<script>
import { store, api } from "../store";


export default {
  data() {
    return {
        store
    };
  },

  props: {
    project: Object,
  }


  
};




</script>

<template>
    <div class="col">
        <div class="card h-100">
            <div class="img-wrapper">
                <img :src="project.image ? project.image : 'https://picsum.photos/200/300'" class="card-img-top" alt="...">
            </div>
                
                
             <div class="card-body">
                <span class="badge mb-3" :style="'background-color: ' + project.type.color">{{project.type.label}}</span>
                    
                <h5 class="card-title">{{project.title}}</h5>
                <p class="card-text">{{project.description}}</p>
                <!-- <a href="#" class="btn btn-primary">Go somewhere</a> -->
            </div>

            <div class="card-footer">
                <span v-for="technology in project.technologies" class="badge mb-3" :style="'background-color: ' + technology.color">{{technology.label}}</span>

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
