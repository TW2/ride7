import { defineStore } from 'pinia'

export const useEasyLog = defineStore("easyLog", () => {

    const user = ref(null);

    const authenticate = (name) => {
        user.value = {
            username: name,
        };
    };

    const deauthenticate = () => {
        user.value = null;
    };

    const isAuthenticated = () => {
        return user.value !== null;
    };

    return {
        user,
        authenticate,
        deauthenticate,
        isAuthenticated,
    };

});