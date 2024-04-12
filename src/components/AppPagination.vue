<script>

// import { store } from "../store";

export default {
  data() {
    return {
      // store,
    };
  },

  
};
</script>

<template>
<div class="mt-3">
         <nav aria-label="Page navigation example">
           <ul class="pagination">
             
             <li class="page-item" v-for="link in pagination">
              <a class="page-link" href="#">1</a>
            </li>
              
           </ul>
         </nav>
                   
       </div>  
 
</template>

<style lang="scss" scoped>
@use "../style/partials/mixins" as *;
@use "../style/partials/variables" as *;

</style>
