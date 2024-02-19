<template>
  <v-app style="background-color: #F4F6F7">
  <v-main>
    <v-toolbar color="#181D2B">
      <template v-slot:prepend>
        <v-tab @click="onCloseWorkspace">
        <img class="mr-3" height="40" src="../../assets/images/icons/darklogo.svg">
        <div class="checkpoint-dark">Checkpoint</div>
        <div class="custom-k">-k</div>
      </v-tab>

        <v-toolbar-items>
          <router-link to="/personal-account/projects-dashboard">
            <div
                style="align-items: center; align-content: center; padding-top: 20px; padding-bottom: 25px; padding-left: 30px; gap: 10px; display: inline-flex">
            <img src="../../assets/images/icons/my_projects.svg" style="width: 25px; height: 25px;">
          <button style="color: white; font-size: 16px; font-family: TT Travels; font-weight: 600; line-height: 19.20px; word-wrap: break-word;">
            Мои проекты
          </button>
            </div>
          </router-link>
        </v-toolbar-items>
      </template>
      <v-menu>
        <template v-slot:activator="{ props }">
        <v-btn icon v-bind="props">
          <v-icon>
            <img src="../../assets/images/icons/lk.svg" style="height: 25px; width: 25px">
          </v-icon>
        </v-btn>
        </template>
        <v-list>
          <v-list-item style="font-family: TT Travels; font-weight: 600; line-height: 19.20px; word-wrap: break-word;" title="Персональные данные" @click="router.push('/personal-account/personal-data')"/>
          <v-list-item style="font-family: TT Travels; font-weight: 600; line-height: 19.20px; word-wrap: break-word;" title="Список компаний" @click="router.push('/personal-account/companies')"/>
          <v-list-item style="font-family: TT Travels; font-weight: 600; line-height: 19.20px; word-wrap: break-word;" title="Перечень оборудования" @click="router.push('/personal-account/equipment')"/>
        </v-list>
      </v-menu>
<!--      <v-btn icon>-->
<!--        <v-icon>mdi mdi-help</v-icon>-->
<!--      </v-btn>-->
      <v-btn icon @click="onLogoutButtonClick">
        <v-icon>
          <img src="../../assets/images/icons/logout.svg" style="height: 25px; width: 25px">
        </v-icon>
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
  emits: ['onCloseWorkspace'],
  setup({emit}) {

    const store = useStore();
    const router = useRouter();
    const showNewProject = ref(false); // Используйте ref для переменной


    const onLogoutButtonClick = () => {
      const result = confirm("Вы действительно хотите завршить сессию?")
      if (result) {
        store.dispatch("users/logOut").then(()=> {
          location.reload()
          emit('onCloseWorkspace')
        });
      }
    };

    onMounted(() => {
      router.push({name: "Мои проекты"});
    });

    return {
      showNewProject,
      onLogoutButtonClick,
      router
    };
  },
  data() {
    return {
      }
    },
  methods: {
      onCloseWorkspace () {
        this.$emit('onCloseWorkspace')
      }
  }
});
</script>

<style lang="scss" scoped>
</style>
