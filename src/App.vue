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
