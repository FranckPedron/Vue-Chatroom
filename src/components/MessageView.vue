<template>
  <article class="message">
    <h2 class="message-author">{{ author }}</h2>
    <p class="message-content">{{ content }}</p>
  </article>
</template>

<script setup>
// eslint-disable-next-line no-undef
defineProps({
  author: {
    type: String,
    required: true
  },
  content: {
    type: String,
    required: true
  }
})
</script>

<style lang="scss">
@use 'src/styles/vars';

.message {
  padding: 1rem 2rem;
  animation: pop 0.5s 0s 1;

  &-content {
    background-color: white;
    border-radius: 4rem;
    padding: 2rem;
    display: inline-block;
    min-width: 10em;
  }

  &-author {
    color: vars.$colorBackground;
    padding: 0 2rem 1.5rem;
    position: relative;

    &::after {
      content: "";
      background-color: white;
      width: 1rem;
      height: 1.25rem;
      clip-path: polygon(0 100%, 100% 100%, 100% 0);
      position: absolute;
      bottom: 0;
      left: 2.5rem;
    }
  }

  &--is-mine {
    text-align: right;

    .message-author {
      margin-left: auto;

      .message-author::after {
        content: "";
        background-color: white;
        width: 1rem;
        height: 1.25rem;
        clip-path: polygon(0 100%, 100% 100%, 100% 0);
        position: absolute;
        bottom: 0;
        right: 2.5rem;
      }
    }
  }
}
</style>
