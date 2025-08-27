import { defineStore } from 'pinia'

export const useDernierDDLs = defineStore("defineDernierDDL", () => {

    const visible = ref('oui');

    const set_visible = (valeur) => {
        visible.value = valeur !== undefined && valeur !== null && valeur !== '' && valeur !== false ? "oui" : "non";
    }

    return {
        visible,
        set_visible,
    };
});