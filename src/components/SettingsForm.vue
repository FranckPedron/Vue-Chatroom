<template>
  <form class="settingsForm" @submit.prevent="handleSubmit">
    <ControlledInput class="settingsForm-input" input-name="email" aria-label="Email" type="email" />
    <ControlledInput class="settingsForm-input" input-name="password" aria-label="Password" type="password" />
    <button class="settingsForm-button" type="submit">Se connecter</button>
  </form>
</template>

<script setup>

import ControlledInput from "@/components/ControlledInput.vue";
import {useUserStore} from "@/stores/UserStore";
const userStore = useUserStore();

const handleSubmit = () => {
  userStore.login();
}
</script>

<style scoped>

</style>
