<template>
  <button class="settings-toggler" type="button" @click="handleClick" :title="[open ? 'Fermer' : 'Ouvrir']">X</button>
</template>

<script setup>
import {useUserStore} from "@/stores/UserStore";
import {storeToRefs} from "pinia";

const userStore = useUserStore();
const { open } = storeToRefs(userStore);

const handleClick = () => {
  userStore.toggleOpen();
}
</script>

<style scoped>

</style>
