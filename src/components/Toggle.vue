<script setup>
import { ref, onMounted, toValue } from 'vue'
import { Switch } from '@headlessui/vue'
import { useDarkModeStore } from '../stores/darkMode'

const darkMode = useDarkModeStore();
darkMode.prefersMode();

</script>

<template>
    <div>
        <Switch @click="darkMode.changeDarkMode" v-model="darkMode.existDark" :class="darkMode.existDark ? 'bg-[#7f92b0]' : 'bg-slate-700'" class="relative inline-flex items-center justify-start h-[24px] w-[46px] shrink-0 cursor-pointer rounded-full border-2 border-transparent transition-colors duration-200 ease-in-out focus:outline-none focus-visible:ring-2 focus-visible:ring-white/75">
        <div aria-hidden="true" :class="darkMode.existDark ? 'translate-x-[21px]' : 'translate-x-[1px]'" class="pointer-events-none  w-5 h-5 flex items-center justify-center fill-current text-blue-500 transform rounded-full bg-white shadow-lg ring-0 transition-all duration-200 p-[2px] ease-in-out">
            <svg v-if="darkMode.existDark" xmlns="http://www.w3.org/2000/svg" class="w-4 h-4 fill-current" viewBox="0 0 24 24"><path d="M12 11.807A9.002 9.002 0 0 1 10.049 2a9.942 9.942 0 0 0-5.12 2.735c-3.905 3.905-3.905 10.237 0 14.142 3.906 3.906 10.237 3.905 14.143 0a9.946 9.946 0 0 0 2.735-5.119A9.003 9.003 0 0 1 12 11.807z"></path></svg>
            <svg v-else xmlns="http://www.w3.org/2000/svg" class="w-4 h-4 fill-current text-yellow-500"  viewBox="0 0 24 24"><path d="M6.995 12c0 2.761 2.246 5.007 5.007 5.007s5.007-2.246 5.007-5.007-2.246-5.007-5.007-5.007S6.995 9.239 6.995 12zM11 19h2v3h-2zm0-17h2v3h-2zm-9 9h3v2H2zm17 0h3v2h-3zM5.637 19.778l-1.414-1.414 2.121-2.121 1.414 1.414zM16.242 6.344l2.122-2.122 1.414 1.414-2.122 2.122zM6.344 7.759 4.223 5.637l1.415-1.414 2.12 2.122zm13.434 10.605-1.414 1.414-2.122-2.122 1.414-1.414z"></path></svg>
        </div>       
        
        </Switch>
    </div>
</template>
  

  