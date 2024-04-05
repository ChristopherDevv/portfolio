<script setup>
import { ref } from 'vue'
import {
  TransitionRoot,
  TransitionChild,
  Dialog,
  DialogPanel,
  DialogTitle,
} from '@headlessui/vue'

const isOpen = ref(false)

function closeModal() {
  isOpen.value = false
}
function openModal() {
  isOpen.value = true
}
</script>

<template>
    <div>
      <button type="button" @click="openModal">
       <slot name="button"></slot>
      </button>
    </div>
    <TransitionRoot appear :show="isOpen" as="template">
      <Dialog as="div" @close="closeModal" class="relative z-[2200]">
        <TransitionChild
          as="template"
          enter="duration-300 ease-out"
          enter-from="opacity-0"
          enter-to="opacity-100"
          leave="duration-200 ease-in"
          leave-from="opacity-100"
          leave-to="opacity-0"
        >
          <div class="fixed inset-0 bg-black/25 backdrop-filter backdrop-blur-[3px]" />
        </TransitionChild>
  
        <div class="fixed inset-0 overflow-y-auto">
          <div
            class="flex min-h-full items-center justify-center p-4 text-center"
          >
            <TransitionChild
              as="template"
              enter="duration-300 ease-out"
              enter-from="opacity-0 scale-95"
              enter-to="opacity-100 scale-100"
              leave="duration-200 ease-in"
              leave-from="opacity-100 scale-100"
              leave-to="opacity-0 scale-95"
            >
              <DialogPanel class="w-full max-w-md transform overflow-hidden rounded-2xl bg-white p-6 text-left align-middle shadow-xl transition-all">
                <DialogTitle as="h3" class="w-full flex items-center gap-5">
                    <div class="border-[7px] border-gray-50 w-20 h-20 flex items-center justify-center overflow-hidden shadow-lg rounded-full bg-white">
                        <img class="w-full h-full object-cover" src="/img/avatar3.webp" alt="avatar image">
                    </div>
                    <div class="text-gray-600">
                        <h4 class="text-sm font-semibold">Christoper Patiño</h4>
                        <p class="text-xs opacity-75">Software engineer | web developer</p>
                        <p class="text-xs opacity-75">Cardel Veracruz, Mex.</p>
                    </div>
                </DialogTitle>
                <div class="mt-4">
                  <p class="text-sm text-gray-600">
                    Hello! I am Christoper Patiño, a passionate 21-year-old Software Engineering student with an infectious enthusiasm for web development. My fascination with creating digital experiences has led me to explore both the backend and the frontend.
                  </p>
                </div>
  
                <div class="mt-4 flex items-center gap-5 text-gray-700">
                    <div>
                        <p class="text-xs font-medium opacity-50">Frelance</p>
                        <div class="flex items-center gap-1">
                            <svg xmlns="http://www.w3.org/2000/svg" class="fill-current w-5 h-auto text-green-500" viewBox="0 0 24 24"><path d="M3 4v12c0 1.103.897 2 2 2h3.5l3.5 4 3.5-4H19c1.103 0 2-.897 2-2V4c0-1.103-.897-2-2-2H5c-1.103 0-2 .897-2 2zm5.707 4.293L11 10.586l4.793-4.793 1.414 1.414L11 13.414 7.293 9.707l1.414-1.414z"></path></svg>
                            <span class="text-xs font-semibold">Available</span>
                        </div>
                    </div>
                    <a href="https://1drv.ms/b/s!AlY2aFiiVpUPnGeWGrE7paUppPIl?e=QUde5n" target="_blank">
                      <button @click="closeModal" type="button" class="inline-flex items-center justify-center gap-2 px-4 py-2 rounded-full bg-blue-500 bg-opacity-20 hover:bg-opacity-30 transition-all duration-500">
                          <svg xmlns="http://www.w3.org/2000/svg" class="fill-current w-4 h-auto text-blue-500" viewBox="0 0 24 24"><path d="M6 22h13a2 2 0 0 0 2-2V4a2 2 0 0 0-2-2H5a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h1zm6-17.001c1.647 0 3 1.351 3 3C15 9.647 13.647 11 12 11S9 9.647 9 7.999c0-1.649 1.353-3 3-3zM6 17.25c0-2.219 2.705-4.5 6-4.5s6 2.281 6 4.5V18H6v-.75z"></path></svg>
                          <span class="text-xs font-semibold text-blue-500">See CV</span>
                      </button>
                    </a>
                </div>
              </DialogPanel>
            </TransitionChild>
          </div>
        </div>
      </Dialog>
    </TransitionRoot>
</template>
  
