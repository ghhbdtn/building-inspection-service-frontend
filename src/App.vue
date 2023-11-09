<template>
  <UnauthAppView v-if="!isAuth"/>
  <v-app>
    <PersonalAccount v-if="isAuth"/>
  </v-app>
</template>

<script lang="ts">
import {computed, defineComponent, onMounted} from "vue";
import {useStore} from "vuex";
import {useRouter} from "vue-router";
import UnauthAppView from "./components/menu/UnauthAppView.vue";
import PersonalAccount from "./components/menu/PersonalAccount.vue";

export default defineComponent({
  components: {PersonalAccount, UnauthAppView},
  setup() {
    const store = useStore();
    const router = useRouter()
    const isAuth = computed(() => store.state.users.isAuthenticated)
    return {
      isAuth,
    }

  },
  name: "App",
});

</script>

<style>
</style>
