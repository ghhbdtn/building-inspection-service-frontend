<template>
  <v-main>
    <v-container fluid>
      <v-row justify="center">
        <v-col cols="4" offset="20">
          <v-card elevation="0" border>
            <v-container fluid>
              <v-row>
                <v-card-title>
                  Выберите опции отчета
                </v-card-title>
              </v-row>
              <v-row>
                <v-checkbox label="Подписать отчет"></v-checkbox>
              </v-row>
              <v-row>
                <v-text-field type="date" label="Дата выпуска" variant="outlined" density="compact"></v-text-field>
              </v-row>
              <v-row>
                <v-card-actions>
                <v-btn variant="text">
                  Запустить ИИ
                </v-btn>
                </v-card-actions>
              </v-row>
            </v-container>
          </v-card>
        </v-col>
      </v-row>
    </v-container>
  </v-main>
</template>

<script lang="ts">
import {defineComponent} from "vue";

export default defineComponent({
  name: "ReportParameters"
});
</script>

<style scoped>

</style>
