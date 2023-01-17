<style>
#navbar-header {
    background-color: #EBEAEB;
    position: absolute;
    top: 0;
    margin: 0;
    width: 100%;
    z-index: 1;
    box-shadow: 0 5px 10px 0 #E3DEDE;

}

.hi {
    font-family: 'Figtree', Helvetica, Arial, sans-serif;
    font-size: 14px;
    color: #78677a;
    margin-right: 15px;
    margin-bottom: 0;
    text-decoration: none;
}

.hi:hover {
    color: #B2A6B5;
    text-decoration: none;
}

</style>

<template>
    <div class="row">
        <div class="navbar-header" id="navbar-header">
            <div class="container-fluid">
                <nav class="navbar navbar-expand-md">
                    <img src="https://cdn-icons-png.flaticon.com/512/4483/4483093.png" style="width: 50px">
                    <button class="navbar-toggler navbar-toggler-right" type="button" data-bs-toggle="collapse"
                        data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent"
                        aria-expanded="false" aria-label="Toggle navigation">
                        <span class="bi bi-list"></span>
                    </button>

                    <div class="collapse navbar-collapse justify-content-between text-center"
                        id="navbarSupportedContent">
 
                        <ul class="navbar-nav ms-2">

                            <li class="nav-item active px-3 my-2">
                                <router-link to="/" class="hi">Products</router-link>
                            </li>

                            <li class="nav-item px-3 my-2">
                                <router-link to="/info" class="hi">Information</router-link>
                            </li>

                            <li class="nav-item px-3 my-2">
                                <router-link to="/cart" class="hi">Cart <img src = 'https://cdn-icons-png.flaticon.com/128/2567/2567829.png' width="35"></router-link>
                            </li>

                            <li class="nav-item px-3 my-2">
                                <router-link to="/cart" class="hi">Search <img src = 'https://cdn-icons-png.flaticon.com/128/2567/2567829.png' width="35"></router-link>
                            </li>

                            <li class="nav-item px-3 my-2">
                                <router-link to="/promo" class="hi">Promotion</router-link>
                            </li>

                            <li class="nav-item px-3 my-2">
                                <router-link to="/acc" class="hi">Account <img src='https://cdn-icons-png.flaticon.com/128/1077/1077063.png' width="25"></router-link>
                            </li>

                        </ul>
                    </div>
                </nav>
            </div>
        </div>
    </div>
</template>