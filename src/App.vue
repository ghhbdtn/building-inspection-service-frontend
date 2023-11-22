<template>
  <UnauthAppView v-if="!isAuth"/>

    <PersonalAccount v-if="isAuth"/>

</template>

<script lang="ts">
import {computed, defineComponent, onMounted} from "vue";
import {useStore} from "vuex";
import {useRouter} from "vue-router";
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
      return jwtToken;
    }
  }

  // JWT токен не найден
  return null;
}

export default defineComponent({
  components: {PersonalAccount, UnauthAppView},
  setup() {
    const store = useStore();
    const router = useRouter()
    const isAuth = computed(() => checkJWTTokenInCookies())
    return {
      isAuth,
    }

  },
  name: "App",
});

</script>

<style>
</style>
