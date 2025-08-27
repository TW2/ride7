import { defineStore } from 'pinia'

export const useVery = defineStore("useVery", () => {

    const ok = ref('Recommencez');

    const set_status = (status) => {
        ok.value = status;
    }

    const isOk = () => {
        return ok.value !== 'Recommencez';
    };

    const rules = ref('X');

    const set_rules = (rule) => {
        rules.value = rule;
    }

    const verify = (result) => {
        set_status('Recommencez');
        switch (rules.value) {
            case 'A':
                if(result === 'Magenta' || result === 'Rouge') {
                    set_status('OK');
                }
                break;
            case 'B':
                if(result === 'Jaune') {
                    set_status('OK');
                }
                break;
            case 'C':
                if(result === 'Cyan' || result === 'Bleu') {
                    set_status('OK');
                }
                break;
            case 'A + B':
                if(result === 'Orange' || result === 'Citron') {
                    set_status('OK');
                }
                break;
            case 'A + C':
                if(result === 'Violet') {
                    set_status('OK');
                }
                break;
            case 'B + C':
                if(result === 'Vert' || result === 'Canard') {
                    set_status('OK');
                }
                break;
            case 'A + B + C':
                if(result === 'Indigo' || result === 'Violet') {
                    set_status('OK');
                }
                break;
        }
    }

    return {
        set_status,
        set_rules,
        verify,
        isOk,
    };

});