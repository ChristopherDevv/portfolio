<script setup>
import {RouterLink, RouterView} from 'vue-router'
import { useDarkModeStore } from './stores/darkMode';
const darkMode = useDarkModeStore();
darkMode.prefersMode();
</script>

<template>
    <RouterView/>
</template>


<style>
::-webkit-scrollbar {
  width: 10px;
}

::-webkit-scrollbar-track {
  background: #020617;

}

::-webkit-scrollbar-thumb {
  background: #1e293b;
  border-radius: 0px;
}

::-webkit-scrollbar-thumb:hover {
  background: #192333;
}

.bg-gradient-footer{
    position: absolute;
    background-color: #0DB1E3;
    border-radius: 50%;
    filter: blur(90px);
    width: 150px;
    height: 150px;
    z-index: -1;
}

.fade-enter-from,
.fade-leave-to {
    opacity: 0;
}
.fade-enter-active,
.fade-leave-active {
    transition: opacity 0.5s ease-out;
}

.slide-enter-from,
.slide-leave-to {
    opacity: 0;
    transform: translateX(-100%);
}
.slide-enter-active,
.slide-leave-active{
    transition: 0.5s ease-out;
}

</style>
