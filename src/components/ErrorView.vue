<template>
  <p class="error">{{ errorMessage }}</p>
</template>

<script setup>
import {useMessageStore} from "@/stores/MessageStore";
import {storeToRefs} from "pinia";

const messageStore = useMessageStore();
const {errorMessage} = storeToRefs(messageStore);
</script>

<style lang="scss">
.error {
  padding: 1rem;
  border: 1px solid darkred;
  color: darkred;
  background-color: rgb(255, 231, 228);
}
</style>
