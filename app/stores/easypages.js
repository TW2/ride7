import { defineStore } from 'pinia'

export const useEasyPages = defineStore("easyPages", () => {

    const user = ref(null);
    const page = ref(null);

    const set_user_name = (name) => {
        user.value = name !== undefined && name !== null && name !== '' ? name : "visiteur";
    }

    const set_page_name = (name) => {
        page.value = name;
    }

    return {
        user,
        page,
        set_user_name,
        set_page_name,
    };
});