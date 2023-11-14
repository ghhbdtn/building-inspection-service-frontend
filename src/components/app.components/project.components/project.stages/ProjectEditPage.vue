<template>
  <v-main>
    <v-stepper alt-labels elevation="0">
      <v-stepper-header>
        <v-stepper-item value="1" editable title="Настройка проекта" @click="router.push('/personal-account/project-settings')"></v-stepper-item>

        <v-divider></v-divider>

        <v-stepper-item value="2" editable title="Подготовка к обследованию" @click="router.push('/personal-account/inspection-preparation')"></v-stepper-item>

        <v-divider></v-divider>

        <v-stepper-item value="3" editable title="Импорт материалов обследования" @click="router.push('/personal-account/import-materials')"></v-stepper-item>
        <v-divider></v-divider>

        <v-stepper-item value="4" editable title="Параметры отчета" @click="router.push('/personal-account/report-parameters')"></v-stepper-item>
        <v-divider></v-divider>

        <v-stepper-item value="5" editable title="Экспорт документации" @click="router.push('/personal-account/report-export')"></v-stepper-item>
      </v-stepper-header>
      <v-stepper-window>
        <RouterView/>
      </v-stepper-window>
      <v-stepper-actions>
        <v-btn>Предыдущий этап</v-btn>
        <v-btn>Следующий этап</v-btn>
      </v-stepper-actions>
    </v-stepper>
  </v-main>
</template>

<script lang="ts">
import {defineComponent, onMounted} from "vue";
import {useRouter} from "vue-router";

export default defineComponent({
  name: "ProjectEditPage",
  setup(){
    const router = useRouter();
    onMounted(() => {
      router.push('/personal-account/project-settings')
    })
    return{
      router
    }
  },
  data() {
    return{
      height: window.screen.height - 48,
    }
  }
});
</script>

<style scoped>

</style>
