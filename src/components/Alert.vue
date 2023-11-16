<script setup>
import { ref } from 'vue';
const show = ref(true);

setTimeout(() => {
  show.value = false;
}, 4000);
</script>

<template>
    <transition name="slide-fade">
        <div v-if="show" class="fixed z-[2100] top-4 right-4 animate-slideInFromRight">
            <div class="shadow-lg border dark:border-none bg-white dark:bg-slate-600 inline-flex items-center justify-center gap-2 py-2 px-6 rounded-lg">
                <div class="inline-flex items-center justify-center flex-shrink-0 w-7 h-7 text-green-500 bg-green-100 rounded-lg dark:bg-green-100 dark:text-green-500">
                    <svg class="w-[18px] h-[18px]" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20"><path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5Zm3.707 8.207-4 4a1 1 0 0 1-1.414 0l-2-2a1 1 0 0 1 1.414-1.414L9 10.586l3.293-3.293a1 1 0 0 1 1.414 1.414Z"/></svg>
                </div>
                <span class="font-semibold text-xs"><slot></slot></span>
            </div>
        </div>
    </transition>
</template>

<style scoped>
@keyframes slideInFromRight {
  0% {
    transform: translateX(100%);
    opacity: 0;
  }
  100% {
    transform: translateX(0);
    opacity: 1;
  }
}
.animate-slideInFromRight {
  animation: slideInFromRight 0.3s ease-out;
}
.slide-fade-enter-active {
  transition: all .3s ease;
}
.slide-fade-leave-active {
  transition: all .3s cubic-bezier(1.0, 0.5, 0.8, 1.0);
}
.slide-fade-enter, .slide-fade-leave-to {
  transform: translateX(10px);
  opacity: 0;
}
@keyframes slideOutToRight {
  0% {
    transform: translateX(0);
    opacity: 1;
  }
  100% {
    transform: translateX(100%);
    opacity: 0;
  }
}
.animate-slideOutToRight {
  animation: slideOutToRight 0.3s ease-out;
}

</style>