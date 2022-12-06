<template>
  <input :name="inputName" :placeholder="inputName" v-model="text" @change="handleChange"/>
</template>

<script setup>
import {useUserStore} from "@/stores/UserStore";
import {ref} from "vue";

const userStore = useUserStore();
const text = ref('');

// eslint-disable-next-line no-undef
const inputName = defineProps(['inputName']);

const handleChange = (text) => {
  userStore.changeValue(inputName, text.value);
}

</script>

<style scoped>

</style>
