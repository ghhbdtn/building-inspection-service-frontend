<template>
  <v-main>
    <v-stepper alt-labels elevation="0">
      <v-stepper-header>
        <v-stepper-item value="1" editable title="Настройка проекта" @click="router.push({name: 'ProjectSettings', params: {id: route.params.id}})"></v-stepper-item>

        <v-divider></v-divider>

        <v-stepper-item value="2" editable title="Подготовка к обследованию" @click="router.push({name: 'InspectionPreparation', params: {id: route.params.id}})"></v-stepper-item>

        <v-divider></v-divider>

        <v-stepper-item value="3" editable title="Импорт материалов обследования" @click="router.push({name: 'ImportMaterialsPage',  params: {id: route.params.id}})"></v-stepper-item>
        <v-divider></v-divider>

        <v-stepper-item value="4" editable title="Параметры отчета" @click="router.push({name: 'ReportParameters',  params: {id: route.params.id}})"></v-stepper-item>
        <v-divider></v-divider>

        <v-stepper-item value="5" editable title="Экспорт документации" @click="router.push({name: 'DocExport',  params: {id: route.params.id}})"></v-stepper-item>
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
import {useRoute, useRouter} from "vue-router";

export default defineComponent({
  name: "ProjectEditPage",
  setup(){
    const router = useRouter();
    const route = useRoute();
    onMounted(() => {
      const id = route.params.id;
      router.push({name: 'ProjectSettings', params: {id: id}})
    })
    return{
      router,
      route
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
