<style>
#navbar-header {
    background-color: #F5F5F5;
    position: relative;
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

.searchicon {
    background-color: #78677a;
}

.searchbar {
    input-background-color: #78677a;
}

</style>

<template>
    <div class="row">
        <div class="navbar-header" id="navbar-header">
            <div class="container-fluid">
                <nav class="navbar navbar-expand-sm">
                    <img src="https://cdn-icons-png.flaticon.com/512/4483/4483093.png" style="width: 50px">
                    <button class="navbar-toggler navbar-toggler-right" type="button" data-bs-toggle="collapse"
                        data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent"
                        aria-expanded="false" aria-label="Toggle navigation">
                        <span class="bi bi-list">=</span>
                    </button>

                    <div class="collapse navbar-collapse text-center"
                        id="navbarSupportedContent">
 
                        <ul class="navbar-nav ms-2">

                            <li class="nav-item active px-3 my-2">
                                <router-link to="/" class="hi">Home</router-link>
                            </li>

                            <li class="nav-item active px-3 my-2">
                                <router-link to="/products" class="hi">Products</router-link>
                            </li>

                            <li class="nav-item px-3 my-2">
                                <router-link to="/info" class="hi">Information</router-link>
                            </li>

                            <li class="nav-item px-3 my-2">
                                <router-link to="/notifications" class="hi">Notifications</router-link>
                            </li>

                            <li class="nav-item px-3 my-2">
                                <div class="input-group input-group-sm mb-3">
                                    <input type="text" class="form-control rounded-pill rounded-end searchbar" placeholder="Search" aria-label="Search" aria-describedby="search">
                                    <span class="rounded-pill rounded-start searchicon" id="search">
                                        <button class="btn"><img src = 'https://cdn-icons-png.flaticon.com/128/9412/9412704.png' width="25"></button>
                                    </span>
                                </div>
                            </li>

                            <li class="nav-item px-3 my-2">
                                <router-link to="/cart" class="hi">Cart <img src = 'https://cdn-icons-png.flaticon.com/128/2567/2567829.png' width="35"></router-link>
                            </li>

                            <li class="nav-item px-3 my-2">
                                <router-link to="/account" class="hi">Log In <img src='https://cdn-icons-png.flaticon.com/128/1077/1077063.png' width="25"></router-link>
                            </li>
                            <li class="nav-item px-3 my-2">
                                <router-link to="/owner" class="hi">owner <img src='https://cdn-icons-png.flaticon.com/128/1077/1077063.png' width="25"></router-link>
                            </li>

                        </ul>
                    </div>
                </nav>
            </div>
        </div>
    </div>
</template>