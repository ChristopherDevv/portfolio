import { ref } from "vue";

export default function useLocationMap() {

    const zoom = ref(13.5);
    const center = ref([19.3710311,-96.3765068]);

    return {
        zoom,
        center
    }
}