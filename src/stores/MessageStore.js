import {defineStore} from 'pinia'

export const useMessageStore = defineStore('MessageStore', {
    state: () => {
        return {
            messages: [
                // {id: 0, content: 'Petit essai', author: 'Testeur 1'},
                // {id: 1, content: 'Deuxième essai', author: 'Testeur 2'},
                // {id: 2, content: 'Nouvel essai', author: 'Testeur 3'}
            ],
            currentMessage: '',
            displayError: false,
            errorMessage: '',
            open: true,
            id: 0
        }
    },
    actions: {
        writeMessage(message) {
            this.messages = [...this.messages,{id: this.id, content: message, author: 'test'}];
            this.currentMessage='';
            this.id++;
        },
        showError(error) {
            this.displayError = true;
            this.erroMessage = error;
            this.currentMessage = '';
        }

    }
})

