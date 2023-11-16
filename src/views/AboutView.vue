<script setup>

</script>
<template>
    <div class="relative">
        <div class="bg-gradient-footer -top-40 right-0 opacity-70"></div>
        <h2 class="text-3xl font-bold flex items-center gap-2">
            <svg xmlns="http://www.w3.org/2000/svg" class="fill-current w-8 h-auto" viewBox="0 0 24 24"><path d="M20 3H4c-1.103 0-2 .897-2 2v14c0 1.103.897 2 2 2h16c1.103 0 2-.897 2-2V5c0-1.103-.897-2-2-2zM4 19V7h16l.002 12H4z"></path><path d="M9.293 9.293 5.586 13l3.707 3.707 1.414-1.414L8.414 13l2.293-2.293zm5.414 0-1.414 1.414L15.586 13l-2.293 2.293 1.414 1.414L18.414 13z"></path></svg>
            <span>Projects</span>
        </h2>

        <section class="mt-10 flex flex-col md:flex-row items-center justify-between gap-10 group">
            <a href="https://novaguitar-frontend.vercel.app/" target="_blank" class="w-full md:w-1/2 rounded-xl bg-slate-400 dark:bg-slate-700 transition-colors duration-200 h-44 md:h-60 relative overflow-hidden">
                <img class="w-[500px] h-auto absolute -bottom-7 -right-10 rounded-xl transition-transform duration-500 group-hover:translate-x-[-15px] group-hover:translate-y-[-15px]" src="/img/eguitar-image.png" alt="eguitar image">
            </a>
            <div class="w-full md:w-1/2">
                <h3 class="font-bold text-3xl">eGuitar</h3>
                <p class="font-medium mt-3 opacity-75">E-commerce dedicated to electric guitars. Contains visitor, member and administrator user roles.</p>
                <div class="flex items-center gap-2 mt-3">
                    <img class="w-7 h-auto hover:translate-y-[-4px] transition-all duration-500" src="/img/html-image.svg" alt="html image">
                    <img class="w-7 h-auto hover:translate-y-[-4px] transition-all duration-500" src="/img/css-image.svg" alt="css image">
                    <img class="w-7 h-auto hover:translate-y-[-4px] transition-all duration-500" src="/img/js-image.svg" alt="js image">
                    <img class="w-7 h-auto hover:translate-y-[-4px] transition-all duration-500" src="/img/tailwind-image.svg" alt="tailwind image">
                    <img class="w-7 h-auto hover:translate-y-[-4px] transition-all duration-500" src="/img/vue-image.svg" alt="vue image">
                    <img class="w-7 h-auto hover:translate-y-[-4px] transition-all duration-500" src="/img/laravel-image.svg" alt="laravel image">
                    <img class="w-7 h-auto hover:translate-y-[-4px] transition-all duration-500" src="/img/mysql-image.png" alt="mysql image">
                </div>
                <div class="flex items-center gap-5 mt-3">
                    <a href="https://github.com/ChristopherDevv/novaguitar-frontend" target="_blank">
                        <svg xmlns="http://www.w3.org/2000/svg" class="fill-current w-10 h-auto" viewBox="0 0 24 24"><path fill-rule="evenodd" clip-rule="evenodd" d="M12.026 2c-5.509 0-9.974 4.465-9.974 9.974 0 4.406 2.857 8.145 6.821 9.465.499.09.679-.217.679-.481 0-.237-.008-.865-.011-1.696-2.775.602-3.361-1.338-3.361-1.338-.452-1.152-1.107-1.459-1.107-1.459-.905-.619.069-.605.069-.605 1.002.07 1.527 1.028 1.527 1.028.89 1.524 2.336 1.084 2.902.829.091-.645.351-1.085.635-1.334-2.214-.251-4.542-1.107-4.542-4.93 0-1.087.389-1.979 1.024-2.675-.101-.253-.446-1.268.099-2.64 0 0 .837-.269 2.742 1.021a9.582 9.582 0 0 1 2.496-.336 9.554 9.554 0 0 1 2.496.336c1.906-1.291 2.742-1.021 2.742-1.021.545 1.372.203 2.387.099 2.64.64.696 1.024 1.587 1.024 2.675 0 3.833-2.33 4.675-4.552 4.922.355.308.675.916.675 1.846 0 1.334-.012 2.41-.012 2.737 0 .267.178.577.687.479C19.146 20.115 22 16.379 22 11.974 22 6.465 17.535 2 12.026 2z"></path></svg>
                    </a>
                   <a href="https://novaguitar-frontend.vercel.app/" target="_blank">
                        <button class="rounded-xl py-2 px-4 bg-gray-200 shadow-md flex items-center justify-center gap-2 hover:gap-4 transition-all duration-200 text-gray-600">
                            <span class="font-bold">Live</span>
                            <svg xmlns="http://www.w3.org/2000/svg" class="fill-current w-5 h-auto" viewBox="0 0 24 24"><path d="M4.222 19.778a4.983 4.983 0 0 0 3.535 1.462 4.986 4.986 0 0 0 3.536-1.462l2.828-2.829-1.414-1.414-2.828 2.829a3.007 3.007 0 0 1-4.243 0 3.005 3.005 0 0 1 0-4.243l2.829-2.828-1.414-1.414-2.829 2.828a5.006 5.006 0 0 0 0 7.071zm15.556-8.485a5.008 5.008 0 0 0 0-7.071 5.006 5.006 0 0 0-7.071 0L9.879 7.051l1.414 1.414 2.828-2.829a3.007 3.007 0 0 1 4.243 0 3.005 3.005 0 0 1 0 4.243l-2.829 2.828 1.414 1.414 2.829-2.828z"></path><path d="m8.464 16.95-1.415-1.414 8.487-8.486 1.414 1.415z"></path></svg>
                        </button>
                   </a>
                </div>
            </div>
        </section>
        <section class="mt-10 flex flex-col md:flex-row items-center justify-between gap-10 group">
            <a href="https://lobster-app-2obfx.ondigitalocean.app/" target="_blank" class="w-full md:w-1/2 rounded-xl bg-slate-400 dark:bg-slate-700 transition-colors duration-200 h-44 md:h-60 relative overflow-hidden">
                <img class="w-[500px] h-auto absolute -bottom-7 -right-10 rounded-xl transition-transform duration-500 group-hover:translate-x-[-15px] group-hover:translate-y-[-15px]" src="/img/neonet-image.png" alt="eguitar image">
            </a>
            <div class="w-full md:w-1/2">
                <h3 class="font-bold text-3xl">NeoNet</h3>
                <p class="font-medium mt-3 opacity-75">Social network dedicated to interactivity between people who share common tastes such as movies, anime and music.</p>
                <div class="flex items-center gap-2 mt-3">
                    <img class="w-7 h-auto hover:translate-y-[-4px] transition-all duration-500" src="/img/html-image.svg" alt="html image">
                    <img class="w-7 h-auto hover:translate-y-[-4px] transition-all duration-500" src="/img/css-image.svg" alt="css image">
                    <img class="w-7 h-auto hover:translate-y-[-4px] transition-all duration-500" src="/img/js-image.svg" alt="js image">
                    <img class="w-7 h-auto hover:translate-y-[-4px] transition-all duration-500" src="/img/tailwind-image.svg" alt="tailwind image">
                    <img class="w-7 h-auto hover:translate-y-[-4px] transition-all duration-500" src="/img/livewire-image.svg" alt="livewire image">
                    <img class="w-7 h-auto hover:translate-y-[-4px] transition-all duration-500" src="/img/laravel-image.svg" alt="laravel image">
                    <img class="w-7 h-auto hover:translate-y-[-4px] transition-all duration-500" src="/img/mysql-image.png" alt="mysql image">
                </div>
                <div class="flex items-center gap-5 mt-3">
                    <a href="https://github.com/ChristopherDevv/neonet" target="_blank">
                        <svg xmlns="http://www.w3.org/2000/svg" class="fill-current w-10 h-auto" viewBox="0 0 24 24"><path fill-rule="evenodd" clip-rule="evenodd" d="M12.026 2c-5.509 0-9.974 4.465-9.974 9.974 0 4.406 2.857 8.145 6.821 9.465.499.09.679-.217.679-.481 0-.237-.008-.865-.011-1.696-2.775.602-3.361-1.338-3.361-1.338-.452-1.152-1.107-1.459-1.107-1.459-.905-.619.069-.605.069-.605 1.002.07 1.527 1.028 1.527 1.028.89 1.524 2.336 1.084 2.902.829.091-.645.351-1.085.635-1.334-2.214-.251-4.542-1.107-4.542-4.93 0-1.087.389-1.979 1.024-2.675-.101-.253-.446-1.268.099-2.64 0 0 .837-.269 2.742 1.021a9.582 9.582 0 0 1 2.496-.336 9.554 9.554 0 0 1 2.496.336c1.906-1.291 2.742-1.021 2.742-1.021.545 1.372.203 2.387.099 2.64.64.696 1.024 1.587 1.024 2.675 0 3.833-2.33 4.675-4.552 4.922.355.308.675.916.675 1.846 0 1.334-.012 2.41-.012 2.737 0 .267.178.577.687.479C19.146 20.115 22 16.379 22 11.974 22 6.465 17.535 2 12.026 2z"></path></svg>
                    </a>
                   <a href="https://lobster-app-2obfx.ondigitalocean.app/" target="_blank">
                        <button class="rounded-xl py-2 px-4 bg-gray-200 shadow-md flex items-center justify-center gap-2 hover:gap-4 transition-all duration-200 text-gray-600">
                            <span class="font-bold">Live</span>
                            <svg xmlns="http://www.w3.org/2000/svg" class="fill-current w-5 h-auto" viewBox="0 0 24 24"><path d="M4.222 19.778a4.983 4.983 0 0 0 3.535 1.462 4.986 4.986 0 0 0 3.536-1.462l2.828-2.829-1.414-1.414-2.828 2.829a3.007 3.007 0 0 1-4.243 0 3.005 3.005 0 0 1 0-4.243l2.829-2.828-1.414-1.414-2.829 2.828a5.006 5.006 0 0 0 0 7.071zm15.556-8.485a5.008 5.008 0 0 0 0-7.071 5.006 5.006 0 0 0-7.071 0L9.879 7.051l1.414 1.414 2.828-2.829a3.007 3.007 0 0 1 4.243 0 3.005 3.005 0 0 1 0 4.243l-2.829 2.828 1.414 1.414 2.829-2.828z"></path><path d="m8.464 16.95-1.415-1.414 8.487-8.486 1.414 1.415z"></path></svg>
                        </button>
                   </a>
                </div>
            </div>
        </section>
        <section class="mt-10 flex flex-col md:flex-row items-center justify-between gap-6 md:gap-10">
            <a href="https://cryptocurrencies-appweb.netlify.app/" target="_blank" class="w-full md:w-1/2 p-5 rounded-xl border-2 border-slate-300 hover:border-slate-400 dark:border-slate-800 dark:hover:border-slate-700 transition-all duration-300 hover:translate-y-[-5px]">
                <div class="flex items-center justify-between">
                    <h3 class="font-bold text-xl">Crypto currencies</h3>
                    <svg xmlns="http://www.w3.org/2000/svg" class="fill-current w-7 h-auto" viewBox="0 0 24 24"><path d="M19.071 4.929c-3.899-3.898-10.243-3.898-14.143 0-3.898 3.899-3.898 10.244 0 14.143 3.899 3.898 10.243 3.898 14.143 0 3.899-3.9 3.899-10.244 0-14.143zm-3.536 10.607-2.828-2.829-3.535 3.536-1.414-1.414 3.535-3.536-2.828-2.829h7.07v7.072z"></path></svg>
                </div>
                <p class="font-medium text-sm mt-1 opacity-75">Cryptocurrency quoter in real time</p>
                <div class="flex items-center gap-2 mt-3">
                    <img class="w-7 h-auto hover:translate-y-[-4px] transition-all duration-500" src="/img/html-image.svg" alt="html image">
                    <img class="w-7 h-auto hover:translate-y-[-4px] transition-all duration-500" src="/img/css-image.svg" alt="css image">
                    <img class="w-7 h-auto hover:translate-y-[-4px] transition-all duration-500" src="/img/js-image.svg" alt="js image">
                    <img class="w-7 h-auto hover:translate-y-[-4px] transition-all duration-500" src="/img/tailwind-image.svg" alt="tailwind image">
                    <img class="w-7 h-auto hover:translate-y-[-4px] transition-all duration-500" src="/img/vue-image.svg" alt="vue image">
                </div>
            </a>
            <a href="https://drink-app.netlify.app/" target="_blank" class="w-full md:w-1/2 p-5 rounded-xl border-2 border-slate-300 hover:border-slate-400 dark:border-slate-800 dark:hover:border-slate-700 transition-all duration-300 hover:translate-y-[-5px]">
                <div class="flex items-center justify-between">
                    <h3 class="font-bold text-xl">Drinks app</h3>
                    <svg xmlns="http://www.w3.org/2000/svg" class="fill-current w-7 h-auto" viewBox="0 0 24 24"><path d="M19.071 4.929c-3.899-3.898-10.243-3.898-14.143 0-3.898 3.899-3.898 10.244 0 14.143 3.899 3.898 10.243 3.898 14.143 0 3.899-3.9 3.899-10.244 0-14.143zm-3.536 10.607-2.828-2.829-3.535 3.536-1.414-1.414 3.535-3.536-2.828-2.829h7.07v7.072z"></path></svg>
                </div>
                <p class="font-medium text-sm mt-1 opacity-75">Find the best recipes drinks and milkshakes</p>
                <div class="flex items-center gap-2 mt-3">
                    <img class="w-7 h-auto hover:translate-y-[-4px] transition-all duration-500" src="/img/html-image.svg" alt="html image">
                    <img class="w-7 h-auto hover:translate-y-[-4px] transition-all duration-500" src="/img/css-image.svg" alt="css image">
                    <img class="w-7 h-auto hover:translate-y-[-4px] transition-all duration-500" src="/img/js-image.svg" alt="js image">
                    <img class="w-7 h-auto hover:translate-y-[-4px] transition-all duration-500" src="/img/tailwind-image.svg" alt="tailwind image">
                    <img class="w-7 h-auto hover:translate-y-[-4px] transition-all duration-500" src="/img/vue-image.svg" alt="vue image">
                </div>
            </a>
        </section>
        <section class="mt-6 md:mt-10 flex flex-col md:flex-row items-center justify-between gap-6 md:gap-10">
            <a href="https://webcoffee.netlify.app/" target="_blank" class="w-full md:w-1/2 p-5 rounded-xl border-2 border-slate-300 hover:border-slate-400 dark:border-slate-800 dark:hover:border-slate-700 transition-all duration-300 hover:translate-y-[-5px]">
                <div class="flex items-center justify-between">
                    <h3 class="font-bold text-xl">Blog coffee</h3>
                    <svg xmlns="http://www.w3.org/2000/svg" class="fill-current w-7 h-auto" viewBox="0 0 24 24"><path d="M19.071 4.929c-3.899-3.898-10.243-3.898-14.143 0-3.898 3.899-3.898 10.244 0 14.143 3.899 3.898 10.243 3.898 14.143 0 3.899-3.9 3.899-10.244 0-14.143zm-3.536 10.607-2.828-2.829-3.535 3.536-1.414-1.414 3.535-3.536-2.828-2.829h7.07v7.072z"></path></svg>
                </div>
                <p class="font-medium text-sm mt-1 opacity-75">Coffee blog, tips and courses</p>
                <div class="flex items-center gap-2 mt-3">
                    <img class="w-7 h-auto hover:translate-y-[-4px] transition-all duration-500" src="/img/html-image.svg" alt="html image">
                    <img class="w-7 h-auto hover:translate-y-[-4px] transition-all duration-500" src="/img/css-image.svg" alt="css image">
                    <img class="w-7 h-auto hover:translate-y-[-4px] transition-all duration-500" src="/img/js-image.svg" alt="js image">
                </div>
            </a>
            <a href="https://website-weather.netlify.app/" target="_blank" class="w-full md:w-1/2 p-5 rounded-xl border-2 border-slate-300 hover:border-slate-400 dark:border-slate-800 dark:hover:border-slate-700 transition-all duration-300 hover:translate-y-[-5px]">
                <div class="flex items-center justify-between">
                    <h3 class="font-bold text-xl">Weather web</h3>
                    <svg xmlns="http://www.w3.org/2000/svg" class="fill-current w-7 h-auto" viewBox="0 0 24 24"><path d="M19.071 4.929c-3.899-3.898-10.243-3.898-14.143 0-3.898 3.899-3.898 10.244 0 14.143 3.899 3.898 10.243 3.898 14.143 0 3.899-3.9 3.899-10.244 0-14.143zm-3.536 10.607-2.828-2.829-3.535 3.536-1.414-1.414 3.535-3.536-2.828-2.829h7.07v7.072z"></path></svg>
                </div>
                <p class="font-medium text-sm mt-1 opacity-75">Weather application, in real time</p>
                <div class="flex items-center gap-2 mt-3">
                    <img class="w-7 h-auto hover:translate-y-[-4px] transition-all duration-500" src="/img/html-image.svg" alt="html image">
                    <img class="w-7 h-auto hover:translate-y-[-4px] transition-all duration-500" src="/img/css-image.svg" alt="css image">
                    <img class="w-7 h-auto hover:translate-y-[-4px] transition-all duration-500" src="/img/js-image.svg" alt="js image">
                    <img class="w-7 h-auto hover:translate-y-[-4px] transition-all duration-500" src="/img/tailwind-image.svg" alt="tailwind image">
                    <img class="w-7 h-auto hover:translate-y-[-4px] transition-all duration-500" src="/img/vue-image.svg" alt="vue image">
                </div>
            </a>
        </section>
       
    </div>
</template>



