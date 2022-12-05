<template>
  <form class="form" @submit.prevent="addMessage(currentMessage)">
    <input class="form-input" type="text" placeholder="Saisissez votre message" v-model="currentMessage"/>
    <button class="form-button" type="submit">Envoyer</button>
  </form>
</template>

<script setup>
import {useMessageStore} from "@/stores/MessageStore";
import {storeToRefs} from "pinia";
import {useUserStore} from "@/stores/UserStore";

const MessageStore = useMessageStore();
const UserStore = useUserStore();

const {currentMessage} = storeToRefs(MessageStore);
const {pseudo} = storeToRefs(UserStore);

const addMessage = (currentMessage) => {
  if (currentMessage.length === 0) {
    MessageStore.showError('Un message ne peut être vide');
  }
  //   else if (currentMessage.trim().length === 0) {
  //   store.showError('Un message ne peut contenir uniquement des espaces');
  // }
    else {
    MessageStore.writeMessage(currentMessage, pseudo);
  }
}
</script>

<style lang="scss">
@use 'src/styles/vars';

.form {
  display: flex;
  font-size: 1.3em;

  &-input {
    background-color: white;
    border: 0;
    padding: 1.5rem 2rem;
    flex-grow: 1;
  }

  &-button {
    background-color: white;
    border: 0;
    padding: 0.5rem 1rem;
    color: vars.$colorText;

    &:hover, &:focus {
      background-color: #eee
    }
  }
}
</style>
