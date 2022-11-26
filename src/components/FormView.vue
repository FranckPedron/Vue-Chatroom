<template>
  <form class="form" @submit.prevent="addMessage(currentMessage)">
    <input class="form-input" type="text" placeholder="Saisissez votre message" v-model="currentMessage"/>
    <button class="form-button" type="submit">Envoyer</button>
  </form>
</template>

<script setup>
import {useMessageStore} from "@/stores/MessageStore";
import {storeToRefs} from "pinia";

const messageStore = useMessageStore();
const { currentMessage } = storeToRefs(messageStore);

const addMessage = (message) => {
  messageStore.writeMessage(message);
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
