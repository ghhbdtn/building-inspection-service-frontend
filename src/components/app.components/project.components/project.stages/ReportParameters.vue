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
                <v-btn variant="outlined" color="#E03021">
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
import {defineComponent} from "vue";

export default defineComponent({
  name: "ReportParameters"
});
</script>

<style scoped>

</style>
