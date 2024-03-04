<template>
  <v-main>
    <v-container fluid>
      <v-row justify="center">
        <v-col cols="4" offset="20">
          <v-card elevation="0" border style="background: #F4F6F7; border-radius: 25px; width: 100%" width="400">
            <v-container fluid>
              <v-col>
              <v-row>
                <v-card-title style="color: #000000; font-size: 25px; font-family: TT Travels; font-weight: 700; line-height: 41.25px; word-wrap: break-word">
                  Выберите опции отчета
                </v-card-title>
              </v-row>
              <v-row justify="center">
                <v-checkbox label="Подписать отчет"></v-checkbox>
              </v-row>
              <v-row justify="center">
                <v-text-field type="date" label="Дата выпуска" variant="outlined" density="compact"
                              style="color: #616161; font-size: 16px; font-family: TT Travels; font-weight: 600; word-wrap: break-word"></v-text-field>
              </v-row>
              <v-row justify="center">
                <v-card-actions>
                <button style="width: 214px; height: 50px; padding: 15px 10px 15px 10px;background: #52596C; border-radius: 25px;
                 justify-content: center; align-items: center; gap: 10px; display: inline-flex" @click="onGenerateReport">
                  <div style="color: white; font-size: 16px; font-family: TT Travels; font-weight: 600; word-wrap: break-word">
                    Сгенерировать отчет
                  </div>
                </button>
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
