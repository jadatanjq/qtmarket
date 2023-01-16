<style>
#navbar-header {
    background-color: rgb(255, 255, 255);
    /* background-image: url('../img/bg4.jpg');
    background-size: cover; */
    position: relative;
    top: 0;
    margin: 0;
    width: 100%;
    z-index: 1;
    box-shadow: 0 0 10px 0 rgba(152, 168, 238, 0.2);

}

.hi {
    font-family: 'Figtree', Helvetica, Arial, sans-serif;
    font-size: 18px;
    color: rgb(85, 134, 190);
    margin-right: 15px;
    margin-bottom: 0;
    text-decoration: none;
}

.hi:hover {
    color: rgb(184, 215, 251);
    text-decoration: none;
}

</style>

<template>
    <div class="row">
        <div class="navbar-header" id="navbar-header">
            <div class="container-fluid">
                <nav class="navbar navbar-expand-md">
                    <img src="https://cdn-icons-png.flaticon.com/512/2338/2338306.png" style="width: 50px">
                    <button class="navbar-toggler navbar-toggler-right" type="button" data-bs-toggle="collapse"
                        data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent"
                        aria-expanded="false" aria-label="Toggle navigation">
                        <span class="bi bi-list"></span>
                    </button>

                    <div class="collapse navbar-collapse justify-content-between text-center"
                        id="navbarSupportedContent">
 
                        <ul class="navbar-nav ms-2">

                            <li class="nav-item active px-3 my-2">
                                <router-link to="/" class="hi">Homepage</router-link>
                            </li>

                            <li class="nav-item px-3 my-2">
                                <router-link to="/info" class="hi">Information</router-link>
                            </li>

                            <li class="nav-item px-3 my-2">
                                <router-link to="/cart" class="hi">Cart</router-link>
                            </li>

                        </ul>
                    </div>
                </nav>
            </div>
        </div>
    </div>
</template>