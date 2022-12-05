<template>
  <div class="app">
    <MessagesView />
    <FormView />
  </div>
</template>

<script setup>
import MessagesView from "@/components/MessagesView";
import FormView from "@/components/FormView";
</script>

<style lang="scss">
  @use "src/styles/vars";
  .app {
    background-color: vars.$colorContent;
    color: vars.$colorText;
    width: 80%;
    margin: auto;
    height: 80vh;
    display: flex;
    flex-direction: column;
    box-shadow: 0 0 2rem rgba(0, 0, 0, 0.2);
  }
</style>
