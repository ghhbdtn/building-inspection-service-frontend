<template>
  <UnauthAppView v-if="!isAuth || !isWorkSpace&&isAuth" @onOpenWorkspace="onOpenWorkspace" :isAuth="isAuth"/>
  <PersonalAccount v-else @onCloseWorkspace="onCloseWorkspace" />
</template>

<script lang="ts">
import {computed, defineComponent, ref} from "vue";
import UnauthAppView from "./components/app.components/UnauthAppView.vue";
import PersonalAccount from "./components/app.components/PersonalAccount.vue";

function checkJWTTokenInCookies() {
  const cookies = document.cookie.split(';');

  for (let i = 0; i < cookies.length; i++) {
    const cookie = cookies[i].trim();

    // Проверяем, содержит ли куки JWT токен
    if (cookie.startsWith('jwt=')) {
      // JWT токен найден в куках
      const jwtToken = cookie.substring(4); // Получаем сам токен (без "jwt=")
      return jwtToken.length > 0;
    }
  }

  // JWT токен не найден
  return false;
}

export default defineComponent({
  components: {PersonalAccount, UnauthAppView},
  setup() {
    const isAuth = computed(() => checkJWTTokenInCookies())
    const isWorkSpace = ref(false)
    const onOpenWorkspace = () => {
      isWorkSpace.value = true;
    }
    const onCloseWorkspace = () => {
      isWorkSpace.value = false;
    }
    return {
      isAuth,
      onOpenWorkspace,
      isWorkSpace,
      onCloseWorkspace,
    }

  },
  name: "App",
});

</script>

<style scoped>

</style>
