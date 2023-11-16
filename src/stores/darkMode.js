import {ref, onMounted} from 'vue'
import { defineStore } from 'pinia'

export const useDarkModeStore = defineStore('darkMode', () => {

    const toggledarkMode = ref(document.documentElement.className === 'dark');
    const existDark = ref(false);

    onMounted(() => {
        existDark.value = document.querySelector('html').classList.contains('dark');
    })


    const changeDarkMode = () => {
        toggledarkMode.value =  document.documentElement.classList.toggle('dark');
        toggledarkMode.value ? (localStorage.theme = 'dark') : (localStorage.theme = 'light');
    }

    const prefersMode = () => {
        // On page load or when changing themes, best to add inline in `head` to avoid FOUC
        if (localStorage.theme === 'dark' || (!('theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
            document.documentElement.classList.add('dark')
        } else {
            document.documentElement.classList.remove('dark')
        }
    }

    return {
        changeDarkMode,
        prefersMode,
        existDark
    }
})