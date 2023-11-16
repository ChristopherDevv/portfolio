<script setup>
import {RouterView, RouterLink} from 'vue-router'
import ToggleVue from './Toggle.vue'
import ModalVue from './Modal.vue';
import { ref } from 'vue';

const isOpen = ref(false);

</script>

<template>
    <div class="fixed w-full z-[2000] top-0 left-0 px-4 h-[58px] overflow-hidden lg:hidden flex items-center bg-opacity-20 dark:bg-opacity-20 backdrop-filter dark:backdrop-filter backdrop-blur-sm dark:backdrop-blur-sm bg-slate-400 dark:bg-slate-800 transition-all duration-200">
       <div class="w-full flex items-center justify-between">
        <RouterLink :to="{name: 'home'}">
            <div class="flex items-center gap-2">
                    <div class="relative">
                        <div class="border-[3px] border-slate-200 dark:border-slate-900 w-11 h-11 flex items-center justify-center overflow-hidden shadow rounded-full bg-gray-300 dark:bg-gray-700 transition-all duration-200">
                            <img class="w-full h-full object-cover hover:scale-110 transition-all duration-500" src="/img/avatar3.webp" alt="avatar image">
                        </div>
                        <div class="bottom-[3px] right-[3px] absolute">
                            <span class="relative flex h-[10px] w-[10px]">
                                <span class="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#0DB1E3] opacity-75"></span>
                                <span class="relative inline-flex rounded-full h-[10px] w-[10px] bg-[#0DB1E3]"></span>
                            </span>
                        </div>
                    </div>
                <h2 class="font-bold text-xs">Christoper P.</h2>
            </div>
        </RouterLink>
            <div @click="isOpen = !isOpen">
                <img class="w-7 h-auto" src="https://img.icons8.com/fluency/48/menu--v1.png" alt="menu--v1"/>
            </div>
       </div>
    </div>
    <transition name="slide" mode="out-in">
    <div v-if="isOpen" class="z-[2000] mt-[58px] min-h-screen lg:hidden dark:min-h-screen bg-slate-400 dark:bg-slate-800 w-full lg:w-[300px] fixed py-10 px-10 flex items-center justify-start flex-col bg-opacity-20 dark:bg-opacity-20 backdrop-filter dark:backdrop-filter backdrop-blur-sm dark:backdrop-blur-sm transition-all duration-200">
        <div class="relative">
            <ModalVue>
                <template #button>
                    <div class="border-[7px] border-slate-200 dark:border-slate-900 w-32 h-32 flex items-center justify-center overflow-hidden shadow-lg rounded-full bg-gray-300 dark:bg-gray-700 transition-all duration-200">
                        <img class="w-full h-full object-cover hover:scale-110 transition-all duration-500" src="/img/avatar3.webp" alt="avatar image">
                    </div>
                </template>
            </ModalVue>
        </div>

        <h1 class="mt-2 text-center font-bold mb-2">Christoper Patiño</h1>
        <ToggleVue></ToggleVue>
        <nav class="mt-7 font-semibold">
            <ul class="flex items-center justify-center gap-3 flex-col">
                <li>
                    <RouterLink @click="isOpen = !isOpen" :to="{name: 'home'}" exact-active-class="text-[#0DB1E3]">About</RouterLink>
                </li>
                <li>
                    <RouterLink @click="isOpen = !isOpen" :to="{name: 'about'}" exact-active-class="text-[#0DB1E3]">Projects</RouterLink>
                </li>
                <li>
                    <RouterLink @click="isOpen = !isOpen" :to="{name: 'contact'}"  exact-active-class="text-[#0DB1E3]">Contact</RouterLink>
                </li>
            </ul>
        </nav>
        <div class="mt-10 flex items-center justify-center gap-4">
            <a href="https://www.linkedin.com/in/christopher-pati%C3%B1o-a27b95263/" target="_blank" class="hover:translate-y-[-3px] transition-all duration-500">
                <img class="w-7 h-auto" src="/img/linkedin-image.svg" alt="linkedin image">
            </a>
            <a href="https://github.com/ChristopherDevv" target="_blank" class="hover:translate-y-[-3px] transition-all duration-500">
                <svg xmlns="http://www.w3.org/2000/svg" class="w-7 fill-current h-auto" viewBox="0 0 24 24"><path fill-rule="evenodd" clip-rule="evenodd" d="M12.026 2c-5.509 0-9.974 4.465-9.974 9.974 0 4.406 2.857 8.145 6.821 9.465.499.09.679-.217.679-.481 0-.237-.008-.865-.011-1.696-2.775.602-3.361-1.338-3.361-1.338-.452-1.152-1.107-1.459-1.107-1.459-.905-.619.069-.605.069-.605 1.002.07 1.527 1.028 1.527 1.028.89 1.524 2.336 1.084 2.902.829.091-.645.351-1.085.635-1.334-2.214-.251-4.542-1.107-4.542-4.93 0-1.087.389-1.979 1.024-2.675-.101-.253-.446-1.268.099-2.64 0 0 .837-.269 2.742 1.021a9.582 9.582 0 0 1 2.496-.336 9.554 9.554 0 0 1 2.496.336c1.906-1.291 2.742-1.021 2.742-1.021.545 1.372.203 2.387.099 2.64.64.696 1.024 1.587 1.024 2.675 0 3.833-2.33 4.675-4.552 4.922.355.308.675.916.675 1.846 0 1.334-.012 2.41-.012 2.737 0 .267.178.577.687.479C19.146 20.115 22 16.379 22 11.974 22 6.465 17.535 2 12.026 2z"></path></svg>
            </a>
            <a href="https://www.instagram.com/code.pher/" target="_blank" class="hover:translate-y-[-3px] transition-all duration-500">
                <img class="w-7 h-auto" src="/img/instagram-image.svg" alt="instagram image">
            </a>
        </div>
    </div>
</transition>
<div class="z-[2000] min-h-screen hidden dark:min-h-screen bg-slate-400 dark:bg-slate-800 w-full lg:w-[300px] fixed py-10 px-10 lg:flex items-center justify-start flex-col bg-opacity-20 dark:bg-opacity-20 backdrop-filter dark:backdrop-filter backdrop-blur-sm dark:backdrop-blur-sm transition-all duration-200">
    <div class="relative">
        <ModalVue>
            <template #button>
                <div class="border-[7px] border-slate-200 dark:border-slate-900 w-32 h-32 flex items-center justify-center overflow-hidden shadow-lg rounded-full bg-gray-300 dark:bg-gray-700 transition-all duration-200">
                    <img class="w-full h-full object-cover hover:scale-110 transition-all duration-500" src="/img/avatar3.webp" alt="avatar image">
                </div>
            </template>
        </ModalVue>
        
        <div class="bottom-[6px] right-[22px] absolute">
            <span class="relative flex h-4 w-4">
                <span class="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#0DB1E3] opacity-75"></span>
                <span class="relative inline-flex rounded-full h-4 w-4 bg-[#0DB1E3]"></span>
            </span>
        </div>
    </div>

    <h1 class="mt-2 text-center font-bold mb-2">Christoper Patiño</h1>
    <ToggleVue></ToggleVue>
    <nav class="mt-7 font-semibold">
        <ul class="flex items-center justify-center gap-3 flex-col">
            <li>
                <RouterLink :to="{name: 'home'}" class="hover:opacity-75 transition-all duration-200" exact-active-class="text-[#0DB1E3]">About</RouterLink>
            </li>
            <li>
                <RouterLink :to="{name: 'about'}" class="hover:opacity-75 transition-all duration-200" exact-active-class="text-[#0DB1E3]">Projects</RouterLink>
            </li>
            <li>
                <RouterLink :to="{name: 'contact'}" class="hover:opacity-75 transition-all duration-200" exact-active-class="text-[#0DB1E3]">Contact</RouterLink>
            </li>
        </ul>
    </nav>
    <div class="mt-10 flex items-center justify-center gap-4">
        <a href="https://www.linkedin.com/in/christopher-pati%C3%B1o-a27b95263/" target="_blank" class="hover:translate-y-[-3px] transition-all duration-500">
            <img class="w-[25px] h-auto" src="/img/linkedin-image.svg" alt="linkedin image">
        </a>
        <a href="https://github.com/ChristopherDevv" target="_blank" class="hover:translate-y-[-3px] transition-all duration-500">
            <svg xmlns="http://www.w3.org/2000/svg" class="w-[25px] fill-current h-auto" viewBox="0 0 24 24"><path fill-rule="evenodd" clip-rule="evenodd" d="M12.026 2c-5.509 0-9.974 4.465-9.974 9.974 0 4.406 2.857 8.145 6.821 9.465.499.09.679-.217.679-.481 0-.237-.008-.865-.011-1.696-2.775.602-3.361-1.338-3.361-1.338-.452-1.152-1.107-1.459-1.107-1.459-.905-.619.069-.605.069-.605 1.002.07 1.527 1.028 1.527 1.028.89 1.524 2.336 1.084 2.902.829.091-.645.351-1.085.635-1.334-2.214-.251-4.542-1.107-4.542-4.93 0-1.087.389-1.979 1.024-2.675-.101-.253-.446-1.268.099-2.64 0 0 .837-.269 2.742 1.021a9.582 9.582 0 0 1 2.496-.336 9.554 9.554 0 0 1 2.496.336c1.906-1.291 2.742-1.021 2.742-1.021.545 1.372.203 2.387.099 2.64.64.696 1.024 1.587 1.024 2.675 0 3.833-2.33 4.675-4.552 4.922.355.308.675.916.675 1.846 0 1.334-.012 2.41-.012 2.737 0 .267.178.577.687.479C19.146 20.115 22 16.379 22 11.974 22 6.465 17.535 2 12.026 2z"></path></svg>
        </a>
        <a href="https://www.instagram.com/code.pher/" target="_blank" class="hover:translate-y-[-3px] transition-all duration-500">
            <img class="w-[25px] h-auto" src="/img/instagram-image.svg" alt="instagram image">
        </a>
    </div>
</div>
</template>


<style scoped>

</style>