<style>

.sidebar {
    background-color: #ECE9E9;
}

.link {
    color: #4C424C;
    text-decoration: none;
    cursor: pointer;
}

</style>

<template>
<navbar></navbar>
<div class = 'container-fluid'>
    <div class = 'row'>
        <div class = 'col-2 sidebar pt-5 text-center'>
            <img src = 'https://cdn-icons-png.flaticon.com/128/1077/1077063.png' width="50">  <span>username</span>
            
            <p class="link pt-5" @click="profile=true">My profile</p>
            <p class="link pb-5" @click="profile=false">My orders</p>
            <!-- all, to pay, to ship, to receive, completed, leave review -->



        </div>

        <div v-if="profile==true" class ='col-10 mt-5 text-center'>
            <p>edit your profile</p>
            <div class="row text-center">
                <div class="col-4">
                    <p class = 'my-3'>username</p>
                    <p class = 'my-3'>email</p>
                    <p class = 'my-2'>phone number (+65)</p>
                    <p class = 'my-3'>delivery address</p>
                </div>
                <div class = 'col-8'>
                    <input type="text" class="form-control m-1 text-muted" v-bind:value="username"/>
                    <input type="text" class="form-control m-1 text-muted" v-bind:value="email"/>
                    <input type="text" class="form-control m-1 text-muted" v-bind:value="number"/>
                    <input type="text" class="form-control m-1 text-muted" v-bind:value="address"/>
                </div>
            </div>

            <div class="row p-4 ">
                <button class="form-control w-25 rounded-pill">Save changes</button>
            </div>
            
        </div>

        <div v-else class ='col-10 mt-5 px-5'>
            <div class="row">
                <div class = 'col'>
                    <span>All orders</span>
                </div>
                <div class = 'col'>
                    <span>To pay</span>
                </div>
                <div class = 'col'>
                    <span>To ship</span>
                </div>
                <div class = 'col'>
                    <span>To receive</span>
                </div>
                <div class = 'col'>
                    <span>Completed</span>
                </div>
                <div class = 'col'>
                    <span>Leave Review</span>
                </div>
            </div>
        </div>
    </div>
</div>
</template>

<script>
import navbar from "@/components/navbar.vue"

export default {
    data() {
        return {
            profile: true,
            username: 'dumbass',
            email: 'dumbass@gmail.com',
            number: '8962 5432',
            address: 'clementi somewhere'
        }
    },

    components: {
        navbar,
    },
}
</script>