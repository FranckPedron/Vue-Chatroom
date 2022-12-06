import {defineStore} from "pinia";

export const useUserStore = defineStore("UserStore", {
    state: () => {
        return {
            email: '',
            password: '',
            pseudo: 'Anonyme',
            logged: false,
            open: true,
        }
    },
    actions: {
        changeValue() {

        },
        saveUser(pseudo) {
            this.pseudo = pseudo;
            this.logged = true;
            this.email = '';
            this.password = '';
        },
        login() {

        },
        logout() {
            this.logged = false;
            this.pseudo = 'Anonyme';
        }
    },
    getters: {
        toggleOpen() {
            this.open = !this.open;
        }
    }
})
