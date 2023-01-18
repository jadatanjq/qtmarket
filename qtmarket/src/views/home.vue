<style>
  div {
      background-color: #F5F5F5;

  }

  p, span {
    color: #4C424C;
  }
</style>

<template>
    <navbar></navbar>
    <div class="alert alert-warning alert-dismissible fade show" role="alert">
        <strong>CNY Promotion!</strong> Get 10% off with minimum spend $150. QUOTE: "CNY23" 
        <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
    </div>
    <div class = 'container-fluid'>
        <!-- top 3 best selling products -->
        <div class="row">
            <div class = 'col'>
                
            </div>
        </div>
        <!-- list of products -->

    </div>
</template>

<script>
import navbar from "@/components/navbar.vue"


export default {
    data() {
        return {

        }
    },

    components: {
        navbar,
    },
}
</script>
