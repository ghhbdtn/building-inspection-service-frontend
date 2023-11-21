<template>
  <v-app>
  <v-main>
    <v-toolbar>
      <template v-slot:prepend>
        <img class="mr-3" height="40" src="../../assets/images/logooooo.png">
        <div class="checkpoint">Checkpoint</div>
        <div class="custom-k">-k</div>
        <v-divider class="ms-3" inset
                   vertical></v-divider>
        <v-toolbar-items>
          <v-tab
              density="compact" to="/personal-account/projects-dashboard">Мои проекты
          </v-tab>
        </v-toolbar-items>
      </template>
      <v-menu>
        <template v-slot:activator="{ props }">
        <v-btn icon v-bind="props">
          <v-icon>mdi-account</v-icon>
        </v-btn>
        </template>
        <v-list>
          <v-list-item title="Персональные данные" @click="router.push('/personal-account/personal-data')"/>
          <v-list-item title="Список компаний" @click="router.push('/personal-account/companies')"/>
          <v-list-item title="Перечень оборудования" @click="router.push('/personal-account/equipment')"/>
        </v-list>
      </v-menu>
      <v-btn icon>
        <v-icon>mdi mdi-help</v-icon>
      </v-btn>
      <v-btn icon @click="onLogoutButtonClick">
        <v-icon>mdi-logout</v-icon>
      </v-btn>
    </v-toolbar>
    <RouterView/>
  </v-main>
  </v-app>
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
      router.push({name: "Мои проекты"});
    });

    return {
      showNewProject,
      onLogoutButtonClick,
      router,
    };
  },
  data() {
    return {}
  }
});
</script>

<style lang="scss" scoped>
</style>
