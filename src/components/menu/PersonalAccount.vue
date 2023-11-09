<template>

  <v-main>
      <v-toolbar>
        <template v-slot:prepend>
        <img class="mr-3" src="src/assets/telegram-cloud-document-2-5276362809125387406 1.png" height="40">
        <v-toolbar-title>Checkpoint-k</v-toolbar-title>
        <v-divider vertical class="ms-3"
                   inset></v-divider>
        <v-toolbar-items>
          <v-tab
              density="compact" to="/personal-account/projects-dashboard">Мои проекты</v-tab>
        </v-toolbar-items>
        </template>

        <v-btn icon>
          <v-icon>mdi-account</v-icon>
        </v-btn>
        <v-btn icon>
          <v-icon>mdi mdi-help</v-icon>
        </v-btn>
        <v-btn icon @click="onLogoutButtonClick">
          <v-icon>mdi-logout</v-icon>
        </v-btn>
      </v-toolbar>
      <RouterView/>
    </v-main>
</template>

<script lang="ts">
import {computed, defineComponent, onMounted, ref} from "vue";
import {useStore} from "vuex";
import {useRouter} from "vue-router";

export default defineComponent({
  name: "PersonalAccount",
      setup() {
        const store = useStore();
        const router = useRouter();
        const showNewProject = ref(false); // Используйте ref для переменной


        const onLogoutButtonClick = () => {
          store.commit("users/LOG_OUT");
        };

        onMounted(() => {
          router.push({ name: "Мои проекты" });
        });

        return {
          showNewProject,
          onLogoutButtonClick,
        };
  },
  data() {
    return {}
  }
});
</script>

<style lang="scss" scoped>
.nested-list-item {
  font-size: 14px; /* Установите желаемый размер шрифта */
  margin-left: 50px; /* Установите желаемый отступ слева */
}
</style>
