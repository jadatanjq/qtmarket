<style>

.cart {
    background-color: #ECE9E9;
    height: 500px;
    margin: 30px;
    border-radius: 30px;
    
}

</style>

<template>
    <navbar></navbar>
    <div class = 'container-fluid box'>
        <div class = 'cart'>

        </div>
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
