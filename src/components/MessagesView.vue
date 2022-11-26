<template>
  <section class="messages">
    <MessageView v-for="message in messages"
                 :key="message.id"
                 :author="message.author"
                 :content="message.content"
    />
  </section>
</template>

<script setup>
import MessageView from "@/components/MessageView";
import {useMessageStore} from "@/stores/MessageStore";
import {storeToRefs} from "pinia";

const messageStore = useMessageStore();
const { messages } = storeToRefs(messageStore);

</script>

<style lang="scss">
.messages {
  flex-grow: 1;
  overflow-y: auto;
  scroll-behavior: smooth;
}
</style>
