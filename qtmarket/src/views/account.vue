<style>

.sidebar {
    background-color: #ECE9E9;
}

.link {
    color: #4C424C;
    text-decoration: none;
    cursor: pointer;
}

.tab {
    background-color: #F5F5F5;
}

.test2:hover {
    font-size: 1.1em;
}

.test {
    background-color: #ECE9E9;
    height: 550px;
    border-radius: 0px 50px 50px 50px;
}

.test2 {
    background-color: #ECE9E9;
    height: 50px;
    padding: 15px 0px 5px 20px;
    border-top-right-radius: 20px;
    border-top-left-radius: 20px;
    margin: 0px 0px;
    border-right: #4C424C 1px solid;
    cursor: pointer;
}

</style>

<template>
<navbar></navbar>
<div class = 'container-fluid box'>

    <div class = 'row text-center pt-5 mx-3'>
        <div class = 'col-2 test2' @click="profile=true">
            <span>My profile</span>
        </div>
        <div class = 'col-2 test2' @click="profile=false">
            <span>My orders</span>
        </div>
        <div class = 'col-4'>

        </div>
        <div class = 'col-3'>
            <img src = 'https://cdn-icons-png.flaticon.com/128/1077/1077063.png' width="40">  <span>Hello, {{username}}!</span>
        </div>
    </div>

    <div class = 'row test mx-3 d-flex justify-content-center'>
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
                    <input type="text" class="form-control m-1 text-muted w-75" v-bind:value="username"/>
                    <input type="text" class="form-control m-1 text-muted w-75" v-bind:value="email"/>
                    <input type="text" class="form-control m-1 text-muted w-75" v-bind:value="number"/>
                    <input type="text" class="form-control m-1 text-muted w-75" v-bind:value="address"/>
                </div>
            </div>

            <div class="row p-4 mt-5 d-flex justify-content-center">
                <button class="form-control w-25 rounded-pill">Save changes</button>
            </div>
            
        </div>

        <div v-else class ='col-10 mt-5'>
            <div class="row">
                <select v-model="current" class="form-control w-25">
                    <option value = 'all'>All orders</option>
                    <option value = 'pay'>To Pay</option>
                    <option value = 'ship'>To Ship</option>
                    <option value = 'rec'>To Receive</option>
                    <option value = 'com'>Completed</option>
                    <option value = 'rev'>Leave Review</option>
                </select>
            </div>

            <br/>
            

            <div v-if="current=='all'" class = 'row'>
                <div class = 'col d-flex flex-wrap justify-content-center' style = "overflow:scroll; height:400px;">
                    <item v-for="n in 10"></item>
                </div>
            </div>

            <div v-if="current=='pay'" class = 'row'>
                pay
            </div>

            <div v-if="current=='ship'" class = 'row'>
                ship
            </div>

            <div v-if="current=='rec'" class = 'row'>
                receive
            </div>

            <div v-if="current=='com'" class = 'row'>
                completed
            </div>

            <div v-if="current=='rev'" class = 'row'>
                review
            </div>
        </div>
    </div>

</div>
</template>

<script>
import navbar from "@/components/navbar.vue"
import item from "@/components/item.vue"

export default {
    data() {
        return {
            profile: true,
            username: 'dumbass',
            email: 'dumbass@gmail.com',
            number: '8962 5432',
            address: 'clementi somewhere',

            current: 'all',
        }
    },

    components: {
        navbar,
        item
    },
}
</script>