import {defineStore} from "pinia";

export const useUserStore = defineStore("UserStore", {
    state: () => {
        return {
            email: '',
            password: '',
            pseudo: 'Anonyme',
            logged: false,
        }
    }
})
