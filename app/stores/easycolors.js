import { defineStore } from 'pinia'

export const useEasyColors = defineStore("easyColors", () => {

    const darkTheme = ref(true);

    const set_dark = (dark) => {
        darkTheme.value = dark !== undefined && dark !== null && dark !== 'true';
    }

    const is_dark = () => {
        return darkTheme.value;
    }

    return {
        set_dark,
        is_dark,
    };
});