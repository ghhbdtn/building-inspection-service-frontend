<template>
  <v-main>
    <v-stepper v-model="el" elevation="0" style="background: #F4F6F7">
      <v-stepper-header>
        <v-stepper-item style="font-family: TT Travels;" :color="el === 0 ? '#E03021' : 'black'"
                        :edit-icon="false" :class="{ 'active-step': el === 0 }" editable title="Настройка проекта" value="1"
                        @click="goToRoute('ProjectSettings')">
        </v-stepper-item>
        <v-divider style="height: 2px; background-color: black;"/>
        <v-stepper-item :color="el === 1 ? '#E03021' : 'black'" style="font-family: TT Travels;"
                        :edit-icon="false" :class="{ 'active-step': el === 1 }" editable title="Подготовка к обследованию" value="2"
                        @click="goToRoute('InspectionPreparation')"></v-stepper-item>

        <v-divider style="height: 2px; background-color: black;"/>
        <v-stepper-item :color="el === 2 ? '#E03021' : 'black'" style="font-family: TT Travels;"
                        :edit-icon="false" :class="{ 'active-step': el === 2 }" editable title="Импорт материалов обследования" value="3"
                        @click="goToRoute('ImportMaterialsPage')"></v-stepper-item>
        <v-divider style="height: 2px; background-color: black;"/>
        <v-stepper-item :color="el === 3 ? '#E03021' : 'black'" style="font-family: TT Travels;"
                        :edit-icon="false" :class="{ 'active-step': el === 3 }" editable title="Параметры отчета" value="4"
                        @click="goToRoute('ReportParameters')"></v-stepper-item>
        <v-divider style="height: 2px; background-color: black;"/>
        <v-stepper-item :color="el === 4 ? '#E03021' : 'black'" style="font-family: TT Travels;"
                        :edit-icon="false" :class="{ 'active-step': el === 4 }"
                        editable
                        title="Экспорт документации"
                        value="5"
                        @click="goToRoute('DocExport')"
        ></v-stepper-item>
      </v-stepper-header>
      <v-stepper-window>
        <RouterView/>
      </v-stepper-window>
      <v-stepper-actions :prev-text="`Назад`"
                         :next-text="`Дальше`"
                         @click:next="el++"
                         @click:prev="el--"
      ></v-stepper-actions>
    </v-stepper>
  </v-main>
</template>

<script lang="ts">
import {computed, defineComponent, onMounted, ref, watch} from "vue";
import {useRoute, useRouter} from "vue-router";

export default defineComponent({
  name: "ProjectEditPage",
  setup() {
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
    watch(() => el.value, () => {
      if (el.value === 0) goToRoute('ProjectSettings');
      else if (el.value === 1) goToRoute('InspectionPreparation');
      else if (el.value === 2) goToRoute('ImportMaterialsPage');
      else if (el.value === 3) goToRoute('ReportParameters');
      else if (el.value === 4) goToRoute('DocExport');
    });
    onMounted(() => {
      const id = route.params.id;
      router.push({name: 'ProjectSettings', params: {id: id}})
    })
    const goToRoute = (name) => {
      router.push({name: name, params: {id: route.params.id}})
    }
    return {
      router,
      route,
      goToRoute,
      el
    }
  },
  data() {
    return {
      height: window.screen.height - 48,
    }
  }
});
</script>

<style scoped>
.active-step {
  color: #E03021;
}
</style>
