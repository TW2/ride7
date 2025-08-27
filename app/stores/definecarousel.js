import { defineStore } from 'pinia'

export const useCarousel = defineStore("defineCarousel", () => {

    const visible = ref('oui');

    const set_visible = (valeur) => {
        visible.value = valeur !== undefined && valeur !== null && valeur !== '' && valeur !== false ? "oui" : "non";
    }

    return {
        visible,
        set_visible,
    };
});