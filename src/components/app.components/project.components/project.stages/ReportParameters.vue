<template>
  <v-main>
    <v-container fluid>
      <v-row justify="center">
        <v-col cols="4" offset="20">
          <v-card elevation="0" border style="border-color: #E03021" width="400">
            <v-container fluid>
              <v-col>
              <v-row>
                <v-card-title>
                  Выберите опции отчета
                </v-card-title>
              </v-row>
              <v-row justify="center">
                <v-checkbox label="Подписать отчет"></v-checkbox>
              </v-row>
              <v-row justify="center">
                <v-text-field type="date" label="Дата выпуска" variant="outlined" density="compact"></v-text-field>
              </v-row>
              <v-row justify="center">
                <v-card-actions>
                <v-btn variant="outlined" color="#E03021" @click="onGenerateReport">
                  Сгенерировать отчет
                </v-btn>
                </v-card-actions>
              </v-row>
              </v-col>
            </v-container>
          </v-card>
        </v-col>
      </v-row>
    </v-container>
  </v-main>
</template>

<script lang="ts">
import {defineComponent, ref} from "vue";
import {useStore} from "vuex";
import {useRoute, useRouter} from "vue-router";

export default defineComponent({
  name: "ReportParameters",
  emits: ['go-route'],
  setup({emit}) {
    const store = useStore()
    const router = useRouter()
    const route = useRoute()
    const onGenerateReport = () => {
      store.dispatch('inspections/generateReport', route.params.id).then(()=>{
        router.push({name: 'DocExport', params: {id: route.params.id}})
      })
    }
    return {
      onGenerateReport
    }
  }
});
</script>

<style scoped>

</style>
