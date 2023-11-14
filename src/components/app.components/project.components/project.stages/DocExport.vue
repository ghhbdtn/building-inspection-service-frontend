<template>
  <v-main>
    <v-container fluid>
      <v-row justify="center">
        <v-col cols="4" offset="20">
          <v-card elevation="0" border>
            <v-container fluid>
              <v-row>
                <v-card-subtitle>Пожалуйста дождитесь завершения формирования отчета</v-card-subtitle>
              </v-row>
              <v-row>
                <v-progress-linear></v-progress-linear>
              </v-row>
              <v-row justify="center">
                  <v-btn variant="text">
                    Скачать отчет
                  </v-btn>
              </v-row>
              <v-row justify="center">
                <v-btn variant="text">
                  Скачать dwg файлы
                </v-btn>
              </v-row>
            </v-container>
            <v-container>
              <v-textarea label="Нужно ли что-то подправить?"></v-textarea>
              <v-card-actions>
                <v-btn variant="text">
                  Отправить
                </v-btn>
              </v-card-actions>
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
  name: "DocExport"
});
</script>

<style scoped>

</style>
