<template>
  <div>
    <SettingsButton />
    <SettingsForm v-if="!logged" />
    <div v-if="logged">
      <p>Bienvenue {{ pseudo }}</p>
      <button type="button" class="SettingsForm-button" @click="handleLogout">Se déconnecter</button>
    </div>
  </div>
</template>

<script setup>
  import {useUserStore} from "@/stores/UserStore";
  import {storeToRefs} from "pinia";
  import SettingsForm from "@/components/SettingsForm.vue";
  import SettingsButton from "@/components/SettingsButton.vue";

  const userStore = useUserStore();
  const { logged, pseudo } = storeToRefs(userStore);

  const handleLogout = () => {
    userStore.logout();
  }
</script>

<style lang="scss">
@use "src/styles/vars";
@use "sass:color";

.settings {
  display: flex;
  position: fixed;
  right: 0;
  top: 0;
  max-width: 17em;
  z-index: 2;
  transition: transform 0.3s cubic-bezier(0.37, 1.31, .67, 1.16);

  &--close {
    transform: translateX(calc(100% - 1rem));

    .settings-toggler {
      transform: rotate(45deg);

      &:hover {
        transform: rotate(45deg) scale(1.1);
      }
    }
  }

  &-toggler {
    position: absolute;
    border-radius: 50%;
    right: 100%;
    top: 1rem;
    height: 3em;
    width: 3em;
    color: #5300ff;
    border: none;
    display: flex;
    align-items: center;
    justify-content: center;

    &:hover {
      transform: scale(1.1);
    }
  }
}

.settingsForm {
  display: flex;
  flex-direction: column;

  padding: 1rem;

  &-input{
    padding: 1rem;
    margin-bottom: 0.5rem;
    border-radius: 0.75rem;
    border: 1px solid #eee;
    background-color: white;
    &:focus {
      border-color: #aaa;
      background-color: #eee;
    }
  }

  &-button {
    padding: 1rem;
    margin-bottom: 0.5rem;
    border-radius: 0.75rem;
    width: 100%;
    background-color: #5300ff;
    color: #fff;
    text-align: center;
    &:hover {
      background-color: color.scale(#5300ff,$lightness: -20%);
    }
  }
}

</style>
