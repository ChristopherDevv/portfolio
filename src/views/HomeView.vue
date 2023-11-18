
<script setup>
import { RouterView, RouterLink } from 'vue-router';
import ModalVue from '../components/Modal.vue';
    const institutions = [
        {image: '/img/uvm-logo.jpg', name: 'Universidad del Valle de México', time: '2022 - In procress', career: 'Ingeniería de software y redes computacionales'},
        {image: '/img/platzi-logo.png', name: 'Web platforms, Udemy | Platzi', time: '2021 - In procress', career: 'Web development courses'},
        {image: '/img/envios-logo.jpg', name: 'CS facturacion - Envios perros', time: 'April 2023 - July 2023', career: 'Bootcamp de programacion web'},
        {image: '/img/euro-logo.png', name: 'Universidad Euro Hispanoamericana', time: '2020 - 2022', career: 'Ciencias de la Comunicación'},
    ]

    const logos = [
        {image: '/img/html-image.svg', name: 'html'},
        {image: '/img/css-image.svg', name: 'css'},
        {image: '/img/js-image.svg', name: 'JavaScript'},
        {image: '/img/sass-image.svg', name: 'sass'},
        {image: '/img/tailwind-image.svg', name: 'tailwind'},
        {image: '/img/vue-image.svg', name: 'VueJs'},
    ];

    const logosBack = [
        {image: '/img/php-image.svg', name: 'php'},
        {image: '/img/mysql-image.png', name: 'mysql'},
        {image: '/img/laravel-image.svg', name: 'laravel'},
        {image: '/img/java-image.svg', name: 'java'},
        {image: '/img/postman-image.svg', name: 'postman'},
    ]

    const logosOthers = [
        {image: '/img/git-image.svg', name: 'git'},
        {image: '/img/github-image.svg', name: 'github'},
        {image: '/img/netlify-image.svg', name: 'netlify'},
        {image: '/img/vercel-image.svg', name: 'vercel'},
        {image: '/img/digital-image.png', name: 'd.Ocean'},
    ]
</script>

<template>
    <div class="min-h-screen w-full relative">
        <div class="bg-gradient-footer bottom-0 right-0 opacity-70"></div>
        <img class="-z-10 absolute top-0 -left-24 lg:-left-60 w-[600px] h-auto" src="/img/shadow1.svg" alt="shadow image">
        <div>
            <h2 class="font-semibold text-xs md:text-sm">Hello everyone!</h2>
            <span class="block text-[39px] md:text-[65px] font-bold">I'm </span>
            <img class="hidden md:block mt-1 z-20" src="https://readme-typing-svg.demolab.com?font=Roboto&weight=700&size=60&pause=1000&color=0DB1E3&vCenter=true&random=false&width=550&height=60&lines=Christoper;Frontend+developer;Designer;Backend+developer" alt="about image">
            <img class="md:hidden z-20 -mt-[1px]" src="https://readme-typing-svg.demolab.com?font=Roboto&weight=700&size=40&pause=1000&vCenter=true&random=false&height=60&lines=Christopher+;Backend+developer;Designer+;Frontend+developer" alt="">
            <p class="mt-3 font-medium">I'm a passionate web development, Frontend | Backend.</p>
           <div class="mt-5 flex items-center gap-3 md:gap-5">
            <RouterLink :to="{name: 'contact'}">
                <button class="inline-flex items-center justify-center gap-2 px-4 py-2 rounded-full bg-pink-500 bg-opacity-30  hover:bg-opacity-40 transition-all duration-500">
                    <svg xmlns="http://www.w3.org/2000/svg" class="fill-current w-4 h-auto" viewBox="0 0 24 24"><path d="M20 2H4c-1.103 0-2 .894-2 1.992v12.017C2 17.106 2.897 18 4 18h3v4l6.351-4H20c1.103 0 2-.894 2-1.992V3.992A1.998 1.998 0 0 0 20 2zm-9 8a2 2 0 1 1-2-2c.086 0 .167.015.25.025.082-.014.164-.025.25-.025A1.5 1.5 0 0 1 11 9.5c0 .086-.012.168-.025.25.01.083.025.165.025.25zm4 2a2 2 0 0 1-2-2c0-.086.015-.167.025-.25A1.592 1.592 0 0 1 13 9.5 1.5 1.5 0 0 1 14.5 8c.086 0 .168.011.25.025.083-.01.164-.025.25-.025a2 2 0 0 1 0 4z"></path></svg>
                    <span class="text-xs font-semibold">Let's talk</span>
                </button>
            </RouterLink>
            <ModalVue>
                <template #button>
                    <button class="inline-flex items-center justify-center gap-2 px-4 py-2 rounded-full bg-blue-500 bg-opacity-10  hover:bg-opacity-20 transition-all duration-500">
                        <svg xmlns="http://www.w3.org/2000/svg" class="fill-current w-4 h-auto" viewBox="0 0 24 24"><path d="M6 22h13a2 2 0 0 0 2-2V4a2 2 0 0 0-2-2H5a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h1zm6-17.001c1.647 0 3 1.351 3 3C15 9.647 13.647 11 12 11S9 9.647 9 7.999c0-1.649 1.353-3 3-3zM6 17.25c0-2.219 2.705-4.5 6-4.5s6 2.281 6 4.5V18H6v-.75z"></path></svg>
                        <span class="text-xs font-semibold">Resume</span>
                    </button>
                </template>
            </ModalVue>
           
           </div>
            
            <section class="mt-16 flex flex-col md:flex-row items-start justify-between gap-16 w-full">
                <div class="w-full md:w-1/2">
                    <h3 class="mb-10 font-bold text-xl text-center">• Education</h3>
                    <ol class="relative border-l border-slate-300 dark:border-gray-600 ml-5 transition-all duration-200">                     
                        <li v-for="institution in institutions" :key="institution.id" class="mb-10 m-li">
                            <div class="absolute flex items-center justify-center rounded-full w-6 h-6 bg-red-500 overflow-hidden -left-3 ring-8 ring-slate-300 dark:ring-gray-500 transition-all duration-200">
                                <img class="shadow-lg w-full h-full object-cover" :src="institution.image" :alt="institution.name"/>
                            </div>
                            <div class="p-4 rounded-lg bg-slate-300 dark:bg-slate-800 bg-opacity-30 dark:bg-opacity-20 shadow-md dark:shadow-lg dark:shadow-gray-900 transition-all duration-200">
                                <div class="items-center justify-between mb-3 flex">
                                    <div class="text-xs font-normal opacity-70">
                                        <p>{{ institution.name }}</p>
                                    </div>
                                    <time class="text-[10px] md:text-xs font-normal sm:order-last opacity-70">{{ institution.time }}</time>
                                </div>
                                <div class="py-2 px-3 rounded-lg bg-slate-50 dark:bg-gray-600 font-medium text-sm transition-all duration-100">{{ institution.career }}</div>
                            </div>
                        </li>
                    </ol>
                </div>
                <div class="w-full md:w-1/2">
                    <h3 class="mb-10 font-bold text-xl text-center">• Technologies and kills</h3>
                    <h4 class=" opacity-50 font-semibold text-center">• Frontend</h4>
                    <div class="mt-8 grid grid-cols-3 gap-8 w-full px-4 md:px-10">
                        <div v-for="logo in logos" :key="logo.id" class="w-full flex items-center justify-center relative group">
                            <img class="w-14 h-auto transition-all duration-500 group-hover:scale-110" :src="logo.image" :alt="logo.name">
                            <p class="absolute top-[-30px] left-1/2 transform -translate-x-1/2 text-xs opacity-0 group-hover:opacity-100 transition-all duration-500 py-1 px-3 rounded-xl bg-gray-500 bg-opacity-10 dark:text-gray-300 dark:bg-gray-300 dark:bg-opacity-10">{{ logo.name }}</p>
                        </div>
                    </div>
                    <h4 class=" opacity-50 font-semibold text-center mt-10">• Backend</h4>
                    <div class="mt-8 grid grid-cols-3 gap-8 w-full px-4 md:px-10">
                        <div v-for="logo in logosBack" :key="logo.id" class="w-full flex items-center justify-center relative group">
                            <img class="w-14 h-auto transition-all duration-500 group-hover:scale-110" :src="logo.image" :alt="logo.name">
                            <p class="absolute top-[-30px] left-1/2 transform -translate-x-1/2 text-xs opacity-0 group-hover:opacity-100 transition-all duration-500 py-1 px-3 rounded-xl bg-gray-500 bg-opacity-10 dark:text-gray-300 dark:bg-gray-300 dark:bg-opacity-10">{{ logo.name }}</p>
                        </div>
                    </div>
                    <h4 class=" opacity-50 font-semibold text-center mt-10">• Others</h4>
                    <div class="mt-8 grid grid-cols-3 gap-8 w-full px-4 md:px-10">
                        <div v-for="logo in logosOthers" :key="logo.id" class="w-full flex items-center justify-center relative group">
                            <img class="w-14 h-auto transition-all duration-500 group-hover:scale-110" :src="logo.image" :alt="logo.name">
                            <p class="absolute top-[-30px] left-1/2 transform -translate-x-1/2 text-xs opacity-0 group-hover:opacity-100 transition-all duration-500 py-1 px-3 rounded-xl bg-gray-500 bg-opacity-10 dark:text-gray-300 dark:bg-gray-300 dark:bg-opacity-10 mx-auto">{{ logo.name }}</p>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    </div>
    
</template>


<style scoped>
.p-comments{
padding: 20px 30px;
}
.m-li{
margin-left: 30px;
}
</style>