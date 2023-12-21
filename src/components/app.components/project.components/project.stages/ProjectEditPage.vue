<template>
  <v-main>
    <v-stepper alt-labels elevation="0" v-model="el">
      <v-stepper-header>
        <v-stepper-item :class="{ 'active-step': el === 0 }" value="1" editable title="Настройка проекта" @click="goToRoute('ProjectSettings')"></v-stepper-item>

        <v-divider></v-divider>

        <v-stepper-item :class="{ 'active-step': el === 1 }" value="2" editable title="Подготовка к обследованию"
                        @click="goToRoute('InspectionPreparation')"></v-stepper-item>

        <v-divider></v-divider>

        <v-stepper-item :class="{ 'active-step': el === 2 }" value="3" editable title="Импорт материалов обследования"
                        @click="goToRoute('ImportMaterialsPage')"></v-stepper-item>
        <v-divider></v-divider>

        <v-stepper-item :class="{ 'active-step': el === 3 }" value="4" editable title="Параметры отчета"
                        @click="goToRoute('ReportParameters')"></v-stepper-item>
        <v-divider></v-divider>

        <v-stepper-item :class="{ 'active-step': el === 4 }"
            value="5"
            editable
            title="Экспорт документации"
            @click="goToRoute('DocExport')"
        ></v-stepper-item>
      </v-stepper-header>
      <v-stepper-window>
        <RouterView/>
      </v-stepper-window>
    </v-stepper>
  </v-main>
</template>

<script lang="ts">
import {computed, defineComponent, onMounted, ref, watch} from "vue";
import {useRoute, useRouter} from "vue-router";

export default defineComponent({
  name: "ProjectEditPage",
  setup(){
    const router = useRouter();
    const route = useRoute();
    const el = ref(0)
    watch(() => route.name, () => {
      if (route.name === 'ProjectSettings') el.value = 0;
      else if (route.name === 'InspectionPreparation') el.value = 1;
      else if (route.name === 'ImportMaterialsPage') el.value = 2;
      else if (route.name === 'ReportParameters') el.value = 3;
      else if (route.name === 'DocExport') el.value = 4;
    });
    onMounted(() => {
      const id = route.params.id;
      router.push({name: 'ProjectSettings', params: {id: id}})
    })
    const goToRoute = (name) => {
      router.push({name: name, params: {id: route.params.id}})
    }
    return{
      router,
      route,
      goToRoute,
      el
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
.active-step {
  background-color: rgba(24, 29, 43, 0.3);
}
</style>
