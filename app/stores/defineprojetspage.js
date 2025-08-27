import { defineStore } from 'pinia'

export const useProjetsPage = defineStore("defineProjetsPage", () => {

    const visible = ref('oui');

    const set_visible = (valeur) => {
        visible.value = valeur !== undefined && valeur !== null && valeur !== '' && valeur !== false ? "oui" : "non";
    }

    const page_type = ref('affiche');

    const set_page_type = (valeur) => {
        if (valeur === undefined || valeur === null || valeur === '' || valeur !== 'bandeau') {
            page_type.value = 'affiche';
        }else{
            page_type.value = 'bandeau';
        }
    }

    return {
        visible,
        set_visible,
        page_type,
        set_page_type,
    };
});