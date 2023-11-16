<script setup>
import Navegation from '../components/Navegation.vue';
import { RouterLink, RouterView } from 'vue-router'

</script>

<template>
    <Navegation></Navegation>
    <div class="lg:ml-[300px] px-4 py-24 lg:py-12 lg:px-14 min-h-screen relative">
        <router-view v-slot="{Component}">
            <transition name="slide" mode="out-in">
                <Component :is="Component"/>
            </transition>
        </router-view>
    </div>
</template>



