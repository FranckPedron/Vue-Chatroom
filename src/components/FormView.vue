<template>
  <form class="form">
    <input class="form-input" type="text" placeholder="Saisissez votre message" v-model="currentMessage" @change="handleChange"/>
    <button class="form-button" type="submit">Envoyer</button>
  </form>
</template>

<script setup>
import {useMessageStore} from "@/stores/MessageStore";

const messageStore = useMessageStore();
const currentMessage = messageStore.currentMessage;

const handleChange = (e) => {
  messageStore.$patch(writeMessage(e.target.value));
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
