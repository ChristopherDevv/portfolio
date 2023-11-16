<script setup>
import { ref } from 'vue';
import {useForm, useField} from 'vee-validate'
import { contactSchema } from '../validation/contactSchema'
import Alert from '../components/Alert.vue';
import "leaflet/dist/leaflet.css";
import { LMap, LTileLayer, LMarker } from "@vue-leaflet/vue-leaflet";
import useLocationMap from '@/composables/useLocationMap'

const {zoom, center} = useLocationMap();
const {handleSubmit, resetForm} = useForm({validationSchema : contactSchema});

const name = useField('name');
const email = useField('email');
const description = useField('description');
const showAlert = ref(false);

const handleSend = handleSubmit(() => {
   showAlert.value = true;
   resetForm();
   setTimeout(() => {
    showAlert.value = false;
   }, 6000);
})


</script>

<template>
    <div class="relative">
        <div class="bg-gradient-footer -top-40 left-0 opacity-70"></div>
    <section class="flex flex-col md:flex-row items-start justify-between gap-10">
        <div class="w-full md:w-1/2">
            <h2 class="font-medium">- Let's connect</h2>
            <h3 class="font-bold text-3xl">Get in touch</h3>
            <p class="mt-5 opacity-70">I'm currently avaliable to take on new projects, so feel free to send me a message about anything that you want to run past me. You can contact anytime at 24/7</p>
            <div class="mt-5 flex items-center gap-3">
                <a href="https://www.linkedin.com/in/christopher-pati%C3%B1o-a27b95263/" target="_blank" class="inline-flex items-center justify-center gap-1 font-semibold py-2 px-3 md:px-4 rounded-lg border-2 border-slate-200 hover:border-slate-300 dark:border-slate-700 dark:hover:border-slate-600 transition-all duration-200">
                    <img class="w-5 md:w-6 h-auto" src="/img/linkedin-image.svg" alt="linkedin image">
                    <span class="text-[#0288D1] text-xs md:text-base">Linkedin</span>
                </a>
                <a href="https://github.com/ChristopherDevv" target="_blank" class="inline-flex items-center justify-center gap-1 font-semibold py-2 px-3 md:px-4 rounded-lg border-2 border-slate-200 hover:border-slate-300 dark:border-slate-700 dark:hover:border-slate-600 transition-all duration-200">
                    <svg xmlns="http://www.w3.org/2000/svg" class="w-5 md:w-6 fill-current h-auto" viewBox="0 0 24 24"><path fill-rule="evenodd" clip-rule="evenodd" d="M12.026 2c-5.509 0-9.974 4.465-9.974 9.974 0 4.406 2.857 8.145 6.821 9.465.499.09.679-.217.679-.481 0-.237-.008-.865-.011-1.696-2.775.602-3.361-1.338-3.361-1.338-.452-1.152-1.107-1.459-1.107-1.459-.905-.619.069-.605.069-.605 1.002.07 1.527 1.028 1.527 1.028.89 1.524 2.336 1.084 2.902.829.091-.645.351-1.085.635-1.334-2.214-.251-4.542-1.107-4.542-4.93 0-1.087.389-1.979 1.024-2.675-.101-.253-.446-1.268.099-2.64 0 0 .837-.269 2.742 1.021a9.582 9.582 0 0 1 2.496-.336 9.554 9.554 0 0 1 2.496.336c1.906-1.291 2.742-1.021 2.742-1.021.545 1.372.203 2.387.099 2.64.64.696 1.024 1.587 1.024 2.675 0 3.833-2.33 4.675-4.552 4.922.355.308.675.916.675 1.846 0 1.334-.012 2.41-.012 2.737 0 .267.178.577.687.479C19.146 20.115 22 16.379 22 11.974 22 6.465 17.535 2 12.026 2z"></path></svg>
                    <span class="text-xs md:text-base">Github</span>
                </a>
                <a href="https://www.facebook.com/profile.php?id=100087795078794" target="_blank" class="inline-flex items-center justify-center gap-1 font-semibold py-2 px-3 md:px-4 rounded-lg border-2 border-slate-200 hover:border-slate-300 dark:border-slate-700 dark:hover:border-slate-600 transition-all duration-200">
                    <img class="w-5 md:w-6 h-auto" src="/img/facebook-image.svg" alt="facebook image">
                    <span class="text-[#1F99ED] text-xs md:text-base">Facebook</span>
                </a>
            </div>
            <a  href="mailto:christopher.patiho@gmail.com" class="mt-5 inline-flex items-center gap-1">
                <svg xmlns="http://www.w3.org/2000/svg" class="w-6 fill-current h-auto" viewBox="0 0 24 24"><path d="M20 4H4a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V6a2 2 0 0 0-2-2zm0 4.7-8 5.334L4 8.7V6.297l8 5.333 8-5.333V8.7z"></path></svg>
                <span class="font-semibold text-sm">christopher.patiho@gmail.com</span>
            </a>
        </div>
        <div class="w-full hidden md:block md:w-1/2 py-8 px-5 md:py-0 rounded-md bg-slate-100 dark:bg-slate-800 md:bg-transparent md:dark:bg-transparent md:px-10">
            <Alert v-if="showAlert" >
                {{ 'Email sent successfully' }}
            </Alert>
           <form @submit.prevent="handleSend">
            <div class="relative">
                <input  v-model="name.value.value" type="text" name="name" id="name" :class="{'border-red-500 dark:border-red-500 ' : name.errorMessage.value}" class="block px-2.5 bg-transparent border-2 border-gray-300 dark:border-gray-700 transition-colors duration-200 pb-2.5 pt-4 w-full text-sm focus:border-gray-400 dark:focus:border-gray-600 rounded-lg appearance-none focus:outline-none focus:ring-0 peer" placeholder=" " />
                <label for="name" :class="{'text-red-500 dark:text-red-500' : name.errorMessage.value}" class="absolute text-sm text-gray-400 dark:text-gray-500 duration-300 transform -translate-y-4 scale-75 top-2 origin-[0] bg-slate-100 md:bg-slate-50 dark:bg-slate-800 dark:md:bg-slate-900 px-2 peer-focus:px-2 peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-2 peer-focus:scale-75 peer-focus:-translate-y-4 start-1 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto">Name</label>
            </div>
            <p class="text-red-500 text-sm font-medium mt-1">{{ name.errorMessage.value }}</p>
            <div class="relative mt-5">
                <input v-model="email.value.value" type="email" name="email" id="email" :class="{'border-red-500 dark:border-red-500' : email.errorMessage.value}" class="block px-2.5 bg-transparent border-2 border-gray-300 dark:border-gray-700 transition-colors duration-200 pb-2.5 pt-4 w-full text-sm focus:border-gray-400 dark:focus:border-gray-600 rounded-lg appearance-none focus:outline-none focus:ring-0 peer" placeholder=" " />
                <label for="email" :class="{'text-red-500 dark:text-red-500' : email.errorMessage.value}" class="absolute text-sm text-gray-400 dark:text-gray-500 duration-300 transform -translate-y-4 scale-75 top-2 origin-[0] bg-slate-100 md:bg-slate-50 dark:bg-slate-800 dark:md:bg-slate-900 px-2 peer-focus:px-2 peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-2 peer-focus:scale-75 peer-focus:-translate-y-4 start-1 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto">E-mail</label>
            </div>
            <p class="text-red-500 text-sm font-medium mt-1">{{ email.errorMessage.value }}</p>
            <div class="relative mt-5">
                <textarea  v-model="description.value.value" name="comments" id="description" :class="{'border-red-500 dark:border-red-500' : description.errorMessage.value}" class="block px-2.5 pb-2.5 pt-5 w-full text-sm bg-transparent rounded-lg border-2 border-gray-300 dark:border-gray-700 transition-colors duration-200 appearance-none focus:outline-none focus:ring-0 focus:border-gray-400 dark:focus:border-gray-600 peer fixed-height resize-none h-24" placeholder=" "></textarea>
                <label for="description" :class="{'text-red-500 dark:text-red-500' : description.errorMessage.value}" class="absolute text-sm text-gray-400 dark:text-gray-500 duration-300 transform -translate-y-4 scale-75 top-2 origin-[0] bg-slate-100 md:bg-slate-50 dark:bg-slate-800 dark:md:bg-slate-900 px-2 peer-focus:px-2 peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-full peer-placeholder-shown:top-1/3 peer-focus:top-2 peer-focus:scale-75 peer-focus:-translate-y-4 left-1">Description</label>
            </div>
            <p class="text-red-500 text-sm font-medium mt-1">{{ description.errorMessage.value }}</p>

            <div class="mt-7">
                <button type="submit" class="bg-gradient-to-tr from-blue-600 to-cyan-400 py-2 px-4 rounded-lg font-semibold text-white active:opacity-[0.7] disabled:opacity-50 disabled:shadow-none disabled:pointer-events-none transition-all duration-100">Send email</button>
            </div>
           </form>
        </div>
    </section>
    <div class="mt-10 md:mt-14 h-[350] rounded-md overflow-hidden">
        <div class="w-full" style="height:350px;">
            <LMap v-model:zoom="zoom" :center="center" :use-global-leaflet="false">
            <LMarker :lat-lng="center"/>
            <LTileLayer
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            ></LTileLayer>
            </LMap>
        </div>
    </div>
    <div class="w-full md:w-1/2 md:hidden mt-10 py-8 px-5 md:py-0 rounded-md bg-slate-100 dark:bg-slate-800 md:bg-transparent md:dark:bg-transparent md:px-10">
            <Alert v-if="showAlert" >
                {{ 'Email sent successfully' }}
            </Alert>
            <h3 class="font-bold text-lg mb-5">• Contact me</h3>
           <form @submit.prevent="handleSend">
            <div class="relative">
                <input  v-model="name.value.value" type="text" name="name" id="name" :class="{'border-red-500 dark:border-red-500 ' : name.errorMessage.value}" class="block px-2.5 bg-transparent border-2 border-gray-300 dark:border-gray-700 transition-colors duration-200 pb-2.5 pt-4 w-full text-sm focus:border-gray-400 dark:focus:border-gray-600 rounded-lg appearance-none focus:outline-none focus:ring-0 peer" placeholder=" " />
                <label for="name" :class="{'text-red-500 dark:text-red-500' : name.errorMessage.value}" class="absolute text-sm text-gray-400 dark:text-gray-500 duration-300 transform -translate-y-4 scale-75 top-2 origin-[0] bg-slate-100 md:bg-slate-50 dark:bg-slate-800 dark:md:bg-slate-900 px-2 peer-focus:px-2 peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-2 peer-focus:scale-75 peer-focus:-translate-y-4 start-1 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto">Name</label>
            </div>
            <p class="text-red-500 text-sm font-medium mt-1">{{ name.errorMessage.value }}</p>
            <div class="relative mt-5">
                <input v-model="email.value.value" type="email" name="email" id="email" :class="{'border-red-500 dark:border-red-500' : email.errorMessage.value}" class="block px-2.5 bg-transparent border-2 border-gray-300 dark:border-gray-700 transition-colors duration-200 pb-2.5 pt-4 w-full text-sm focus:border-gray-400 dark:focus:border-gray-600 rounded-lg appearance-none focus:outline-none focus:ring-0 peer" placeholder=" " />
                <label for="email" :class="{'text-red-500 dark:text-red-500' : email.errorMessage.value}" class="absolute text-sm text-gray-400 dark:text-gray-500 duration-300 transform -translate-y-4 scale-75 top-2 origin-[0] bg-slate-100 md:bg-slate-50 dark:bg-slate-800 dark:md:bg-slate-900 px-2 peer-focus:px-2 peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-2 peer-focus:scale-75 peer-focus:-translate-y-4 start-1 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto">E-mail</label>
            </div>
            <p class="text-red-500 text-sm font-medium mt-1">{{ email.errorMessage.value }}</p>
            <div class="relative mt-5">
                <textarea  v-model="description.value.value" name="comments" id="description" :class="{'border-red-500 dark:border-red-500' : description.errorMessage.value}" class="block px-2.5 pb-2.5 pt-5 w-full text-sm bg-transparent rounded-lg border-2 border-gray-300 dark:border-gray-700 transition-colors duration-200 appearance-none focus:outline-none focus:ring-0 focus:border-gray-400 dark:focus:border-gray-600 peer fixed-height resize-none h-24" placeholder=" "></textarea>
                <label for="description" :class="{'text-red-500 dark:text-red-500' : description.errorMessage.value}" class="absolute text-sm text-gray-400 dark:text-gray-500 duration-300 transform -translate-y-4 scale-75 top-2 origin-[0] bg-slate-100 md:bg-slate-50 dark:bg-slate-800 dark:md:bg-slate-900 px-2 peer-focus:px-2 peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-full peer-placeholder-shown:top-1/3 peer-focus:top-2 peer-focus:scale-75 peer-focus:-translate-y-4 left-1">Description</label>
            </div>
            <p class="text-red-500 text-sm font-medium mt-1">{{ description.errorMessage.value }}</p>

            <div class="mt-7">
                <button type="submit" class="bg-gradient-to-tr from-blue-600 to-cyan-400 py-2 px-4 rounded-lg font-semibold text-white active:opacity-[0.7] disabled:opacity-50 disabled:shadow-none disabled:pointer-events-none transition-all duration-100">Send email</button>
            </div>
           </form>
        </div>
    </div>
</template>


